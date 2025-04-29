"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

export type Language = "en" | "es"

export const translations = {
  // Header translations
  header: {
    home: {
      en: "Home",
      es: "Inicio",
    },
    products: {
      en: "Products",
      es: "Productos",
    },
    about: {
      en: "About",
      es: "Nosotros",
    },
    contact: {
      en: "Contact",
      es: "Contacto",
    },
    cart: {
      en: "Cart",
      es: "Carrito",
    },
    login: {
      en: "Login",
      es: "Iniciar Sesión",
    },
    register: {
      en: "Register",
      es: "Registrarse",
    },
    account: {
      en: "My Account",
      es: "Mi Cuenta",
    },
    logout: {
      en: "Logout",
      es: "Cerrar Sesión",
    },
    search: {
      en: "Search",
      es: "Buscar",
    },
  },

  // Footer translations
  footer: {
    about: {
      en: "About Us",
      es: "Sobre Nosotros",
    },
    contact: {
      en: "Contact",
      es: "Contacto",
    },
    careers: {
      en: "Careers",
      es: "Empleo",
    },
    blog: {
      en: "Blog",
      es: "Blog",
    },
    help: {
      en: "Help",
      es: "Ayuda",
    },
    faq: {
      en: "FAQ",
      es: "Preguntas Frecuentes",
    },
    shipping: {
      en: "Shipping & Delivery",
      es: "Envíos y Entregas",
    },
    returns: {
      en: "Returns & Refunds",
      es: "Devoluciones y Reembolsos",
    },
    legal: {
      en: "Legal",
      es: "Legal",
    },
    privacy: {
      en: "Privacy Policy",
      es: "Política de Privacidad",
    },
    terms: {
      en: "Terms of Service",
      es: "Términos de Servicio",
    },
    cookies: {
      en: "Cookie Policy",
      es: "Política de Cookies",
    },
    rights: {
      en: "All rights reserved",
      es: "Todos los derechos reservados",
    },
  },

  // Product related translations
  product: {
    addToCart: {
      en: "Add to Cart",
      es: "Añadir al Carrito",
    },
    outOfStock: {
      en: "Out of Stock",
      es: "Agotado",
    },
    quantity: {
      en: "Quantity",
      es: "Cantidad",
    },
    price: {
      en: "Price",
      es: "Precio",
    },
    description: {
      en: "Description",
      es: "Descripción",
    },
    details: {
      en: "Product Details",
      es: "Detalles del Producto",
    },
    related: {
      en: "Related Products",
      es: "Productos Relacionados",
    },
    featured: {
      en: "Featured Products",
      es: "Productos Destacados",
    },
    categories: {
      en: "Categories",
      es: "Categorías",
    },
    filter: {
      en: "Filter",
      es: "Filtrar",
    },
    sort: {
      en: "Sort",
      es: "Ordenar",
    },
  },

  // Cart related translations
  cart: {
    title: {
      en: "Your Cart",
      es: "Tu Carrito",
    },
    empty: {
      en: "Your cart is empty",
      es: "Tu carrito está vacío",
    },
    continueShopping: {
      en: "Continue Shopping",
      es: "Continuar Comprando",
    },
    checkout: {
      en: "Proceed to Checkout",
      es: "Proceder al Pago",
    },
    remove: {
      en: "Remove",
      es: "Eliminar",
    },
    subtotal: {
      en: "Subtotal",
      es: "Subtotal",
    },
    total: {
      en: "Total",
      es: "Total",
    },
    tax: {
      en: "Tax",
      es: "Impuestos",
    },
    shipping: {
      en: "Shipping",
      es: "Envío",
    },
  },

  // Checkout related translations
  checkout: {
    title: {
      en: "Checkout",
      es: "Finalizar Compra",
    },
    shippingAddress: {
      en: "Shipping Address",
      es: "Dirección de Envío",
    },
    billingAddress: {
      en: "Billing Address",
      es: "Dirección de Facturación",
    },
    paymentMethod: {
      en: "Payment Method",
      es: "Método de Pago",
    },
    orderSummary: {
      en: "Order Summary",
      es: "Resumen del Pedido",
    },
    placeOrder: {
      en: "Place Order",
      es: "Realizar Pedido",
    },
    firstName: {
      en: "First Name",
      es: "Nombre",
    },
    lastName: {
      en: "Last Name",
      es: "Apellido",
    },
    email: {
      en: "Email",
      es: "Correo Electrónico",
    },
    phone: {
      en: "Phone",
      es: "Teléfono",
    },
    address: {
      en: "Address",
      es: "Dirección",
    },
    city: {
      en: "City",
      es: "Ciudad",
    },
    state: {
      en: "State/Province",
      es: "Estado/Provincia",
    },
    zipCode: {
      en: "Zip/Postal Code",
      es: "Código Postal",
    },
    country: {
      en: "Country",
      es: "País",
    },
  },

  // Authentication related translations
  auth: {
    login: {
      en: "Login",
      es: "Iniciar Sesión",
    },
    register: {
      en: "Register",
      es: "Registrarse",
    },
    email: {
      en: "Email",
      es: "Correo Electrónico",
    },
    password: {
      en: "Password",
      es: "Contraseña",
    },
    confirmPassword: {
      en: "Confirm Password",
      es: "Confirmar Contraseña",
    },
    forgotPassword: {
      en: "Forgot Password?",
      es: "¿Olvidaste tu Contraseña?",
    },
    noAccount: {
      en: "Don't have an account?",
      es: "¿No tienes una cuenta?",
    },
    haveAccount: {
      en: "Already have an account?",
      es: "¿Ya tienes una cuenta?",
    },
    signUp: {
      en: "Sign Up",
      es: "Registrarse",
    },
    signIn: {
      en: "Sign In",
      es: "Iniciar Sesión",
    },
  },

  // Account related translations
  account: {
    title: {
      en: "My Account",
      es: "Mi Cuenta",
    },
    profile: {
      en: "Profile",
      es: "Perfil",
    },
    orders: {
      en: "Orders",
      es: "Pedidos",
    },
    addresses: {
      en: "Addresses",
      es: "Direcciones",
    },
    wishlist: {
      en: "Wishlist",
      es: "Lista de Deseos",
    },
    settings: {
      en: "Settings",
      es: "Configuración",
    },
  },

  // Order related translations
  order: {
    title: {
      en: "Order",
      es: "Pedido",
    },
    confirmation: {
      en: "Order Confirmation",
      es: "Confirmación de Pedido",
    },
    thankYou: {
      en: "Thank you for your order!",
      es: "¡Gracias por tu pedido!",
    },
    orderNumber: {
      en: "Order Number",
      es: "Número de Pedido",
    },
    date: {
      en: "Date",
      es: "Fecha",
    },
    status: {
      en: "Status",
      es: "Estado",
    },
    items: {
      en: "Items",
      es: "Artículos",
    },
    shippingInfo: {
      en: "Shipping Information",
      es: "Información de Envío",
    },
    billingInfo: {
      en: "Billing Information",
      es: "Información de Facturación",
    },
    paymentMethod: {
      en: "Payment Method",
      es: "Método de Pago",
    },
    trackOrder: {
      en: "Track Order",
      es: "Seguir Pedido",
    },
  },

  // Common translations
  common: {
    loading: {
      en: "Loading...",
      es: "Cargando...",
    },
    error: {
      en: "An error occurred",
      es: "Ocurrió un error",
    },
    success: {
      en: "Success!",
      es: "¡Éxito!",
    },
    save: {
      en: "Save",
      es: "Guardar",
    },
    cancel: {
      en: "Cancel",
      es: "Cancelar",
    },
    edit: {
      en: "Edit",
      es: "Editar",
    },
    delete: {
      en: "Delete",
      es: "Eliminar",
    },
    submit: {
      en: "Submit",
      es: "Enviar",
    },
    back: {
      en: "Back",
      es: "Volver",
    },
    next: {
      en: "Next",
      es: "Siguiente",
    },
    previous: {
      en: "Previous",
      es: "Anterior",
    },
  },
}

// Default language
export const defaultLanguage: Language = "es"

// Get translation function
export function getTranslation(key: string, language: Language = defaultLanguage): string {
  const keys = key.split(".")
  let current: any = translations

  for (const k of keys) {
    if (current[k] === undefined) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    current = current[k]
  }

  if (typeof current === "object" && current[language]) {
    return current[language]
  }

  console.warn(`Translation not available for key: ${key} in language: ${language}`)
  return key
}

// Language context
type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(defaultLanguage)

  const t = (key: string) => getTranslation(key, language)

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
