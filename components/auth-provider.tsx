"use client"

import { createContext, useContext, useEffect, useState } from "react"

type User = {
  id: string
  name: string
  email: string
  phone?: string
  address?: string
  role: "customer" | "admin"
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string, role?: "customer" | "admin") => Promise<boolean>
  register: (userData: Omit<User, "id" | "role"> & { password: string }) => Promise<boolean>
  logout: () => void
  isAdmin: () => boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("sweetbit_user")
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error("Failed to parse user from localStorage:", error)
      }
    }
    setIsLoading(false)
  }, [])

  // Mock login function
  const login = async (email: string, password: string, role: "customer" | "admin" = "customer") => {
    setIsLoading(true)

    try {
      // In a real app, this would be an API call to validate credentials
      // For demo purposes, we'll use some simple validation

      // Admin login (hardcoded credentials for demo)
      if (role === "admin" && email === "admin@sweetbit.com" && password === "admin123") {
        const adminUser: User = {
          id: "admin-1",
          name: "Admin User",
          email: "admin@sweetbit.com",
          role: "admin",
        }

        setUser(adminUser)
        localStorage.setItem("sweetbit_user", JSON.stringify(adminUser))
        return true
      }

      // Customer login (simple validation for demo)
      if (role === "customer" && email && password.length >= 6) {
        // In a real app, we would verify against stored credentials
        // For demo, we'll create a user if email contains valid format
        if (email.includes("@") && email.includes(".")) {
          const customerUser: User = {
            id: `customer-${Date.now()}`,
            name: email.split("@")[0], // Use part of email as name
            email,
            role: "customer",
          }

          setUser(customerUser)
          localStorage.setItem("sweetbit_user", JSON.stringify(customerUser))
          return true
        }
      }

      return false
    } catch (error) {
      console.error("Login error:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  // Mock register function
  const register = async (userData: Omit<User, "id" | "role"> & { password: string }) => {
    setIsLoading(true)

    try {
      // In a real app, this would be an API call to create a user
      // For demo purposes, we'll just create a user object

      const newUser: User = {
        id: `customer-${Date.now()}`,
        name: userData.name,
        email: userData.email,
        phone: userData.phone,
        address: userData.address,
        role: "customer",
      }

      setUser(newUser)
      localStorage.setItem("sweetbit_user", JSON.stringify(newUser))
      return true
    } catch (error) {
      console.error("Registration error:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  // Logout function
  const logout = () => {
    setUser(null)
    localStorage.removeItem("sweetbit_user")
  }

  // Check if user is admin
  const isAdmin = () => {
    return user?.role === "admin"
  }

  return (
    <AuthContext.Provider value={{ user, isLoading, login, register, logout, isAdmin }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }

  return context
}
