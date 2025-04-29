export type Product = {
  id: string
  name: string
  description: string
  price: number
  category: string
  image?: string
  featured?: boolean
  rating?: number
  createdAt: string
  allergens?: string
  stockQuantity: number
}

export type Category = {
  id: string
  name: string
  image: string
  slug: string
}

export type OrderItem = {
  id: string
  name: string
  price: number
  quantity: number
  image?: string
}

export type Customer = {
  name: string
  email: string
  phone: string
  userId?: string | null
}

export type Order = {
  id: string
  customer: Customer
  address: string
  items: OrderItem[]
  subtotal: number
  deliveryFee: number
  total: number
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  createdAt: string
  notes?: string
  deliveryOption?: string
}
