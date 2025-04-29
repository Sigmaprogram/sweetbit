import type { Product, Category, Order } from "./types"

// Mock data for products
const mockProducts: Product[] = [
  {
    id: "1",
    name: "Chocolate Fudge Cake",
    description:
      "Rich, moist chocolate cake with a decadent fudge frosting. Perfect for celebrations or as a special treat.",
    price: 32.99,
    category: "Cakes",
    image: "/placeholder.svg?height=400&width=400&text=Chocolate+Cake",
    featured: true,
    rating: 4.8,
    createdAt: "2023-12-01T00:00:00Z",
    allergens: "Eggs, Dairy, Wheat, Soy",
    stockQuantity: 15,
  },
  {
    id: "2",
    name: "Vanilla Bean Cupcakes",
    description: "Light and fluffy vanilla cupcakes topped with creamy vanilla bean frosting and colorful sprinkles.",
    price: 18.99,
    category: "Cupcakes",
    image: "/placeholder.svg?height=400&width=400&text=Vanilla+Cupcakes",
    featured: true,
    rating: 4.6,
    createdAt: "2023-11-15T00:00:00Z",
    allergens: "Eggs, Dairy, Wheat",
    stockQuantity: 24,
  },
  {
    id: "3",
    name: "Chocolate Chip Cookies",
    description:
      "Classic chocolate chip cookies with a soft center and crispy edges. Made with premium chocolate chips.",
    price: 12.99,
    category: "Cookies",
    image: "/placeholder.svg?height=400&width=400&text=Chocolate+Chip+Cookies",
    featured: false,
    rating: 4.9,
    createdAt: "2023-12-05T00:00:00Z",
    allergens: "Eggs, Dairy, Wheat, Soy",
    stockQuantity: 36,
  },
  {
    id: "4",
    name: "Strawberry Cheesecake",
    description: "Creamy cheesecake with a graham cracker crust, topped with fresh strawberry compote.",
    price: 28.99,
    category: "Desserts",
    image: "/placeholder.svg?height=400&width=400&text=Strawberry+Cheesecake",
    featured: true,
    rating: 4.7,
    createdAt: "2023-11-20T00:00:00Z",
    allergens: "Eggs, Dairy, Wheat",
    stockQuantity: 8,
  },
  {
    id: "5",
    name: "Flaky Croissants",
    description: "Buttery, flaky croissants made with premium French butter. Perfect for breakfast or as a snack.",
    price: 14.99,
    category: "Pastries",
    image: "/placeholder.svg?height=400&width=400&text=Croissants",
    featured: false,
    rating: 4.5,
    createdAt: "2023-12-10T00:00:00Z",
    allergens: "Dairy, Wheat",
    stockQuantity: 18,
  },
  {
    id: "6",
    name: "Macarons Assortment",
    description:
      "Delicate French macarons in a variety of flavors, including chocolate, vanilla, raspberry, and pistachio.",
    price: 24.99,
    category: "Cookies",
    image: "/placeholder.svg?height=400&width=400&text=Macarons",
    featured: true,
    rating: 4.8,
    createdAt: "2023-11-25T00:00:00Z",
    allergens: "Eggs, Dairy, Nuts",
    stockQuantity: 12,
  },
  {
    id: "7",
    name: "Cinnamon Rolls",
    description: "Soft, gooey cinnamon rolls with cream cheese frosting. Perfect for a sweet breakfast treat.",
    price: 16.99,
    category: "Pastries",
    image: "/placeholder.svg?height=400&width=400&text=Cinnamon+Rolls",
    featured: false,
    rating: 4.7,
    createdAt: "2023-12-15T00:00:00Z",
    allergens: "Eggs, Dairy, Wheat",
    stockQuantity: 10,
  },
  {
    id: "8",
    name: "Tiramisu",
    description: "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream.",
    price: 22.99,
    category: "Desserts",
    image: "/placeholder.svg?height=400&width=400&text=Tiramisu",
    featured: false,
    rating: 4.6,
    createdAt: "2023-11-30T00:00:00Z",
    allergens: "Eggs, Dairy, Wheat",
    stockQuantity: 0,
  },
]

// Mock data for categories
const mockCategories: Category[] = [
  {
    id: "1",
    name: "Cakes",
    image: "/placeholder.svg?height=300&width=300&text=Cakes",
    slug: "cakes",
  },
  {
    id: "2",
    name: "Cupcakes",
    image: "/placeholder.svg?height=300&width=300&text=Cupcakes",
    slug: "cupcakes",
  },
  {
    id: "3",
    name: "Cookies",
    image: "/placeholder.svg?height=300&width=300&text=Cookies",
    slug: "cookies",
  },
  {
    id: "4",
    name: "Desserts",
    image: "/placeholder.svg?height=300&width=300&text=Desserts",
    slug: "desserts",
  },
  {
    id: "5",
    name: "Pastries",
    image: "/placeholder.svg?height=300&width=300&text=Pastries",
    slug: "pastries",
  },
]

// Mock data for orders
const mockOrders: Order[] = [
  {
    id: "1001",
    customer: {
      name: "John Doe",
      email: "john@example.com",
      phone: "555-123-4567",
      userId: "customer-1",
    },
    address: "123 Main St, Anytown, USA 12345",
    items: [
      {
        id: "1",
        name: "Chocolate Fudge Cake",
        price: 32.99,
        quantity: 1,
        image: "/placeholder.svg?height=64&width=64&text=Cake",
      },
      {
        id: "3",
        name: "Chocolate Chip Cookies",
        price: 12.99,
        quantity: 2,
        image: "/placeholder.svg?height=64&width=64&text=Cookies",
      },
    ],
    subtotal: 58.97,
    deliveryFee: 5.99,
    total: 64.96,
    status: "delivered",
    createdAt: "2023-12-01T10:30:00Z",
    notes: "Please leave at the door",
  },
  {
    id: "1002",
    customer: {
      name: "Jane Smith",
      email: "jane@example.com",
      phone: "555-987-6543",
      userId: "customer-2",
    },
    address: "456 Oak Ave, Somewhere, USA 67890",
    items: [
      {
        id: "2",
        name: "Vanilla Bean Cupcakes",
        price: 18.99,
        quantity: 3,
        image: "/placeholder.svg?height=64&width=64&text=Cupcakes",
      },
    ],
    subtotal: 56.97,
    deliveryFee: 0,
    total: 56.97,
    status: "pending",
    createdAt: "2023-12-05T14:45:00Z",
  },
]

// Simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

// Get all products
export async function getProducts(): Promise<Product[]> {
  await delay(500) // Simulate network delay
  return [...mockProducts]
}

// Get a single product by ID
export async function getProduct(id: string): Promise<Product | undefined> {
  await delay(300)
  return mockProducts.find((product) => product.id === id)
}

// Get featured products
export async function getFeaturedProducts(): Promise<Product[]> {
  await delay(500)
  return mockProducts.filter((product) => product.featured)
}

// Get related products (excluding the current product)
export async function getRelatedProducts(productId: string): Promise<Product[]> {
  await delay(500)
  const product = mockProducts.find((p) => p.id === productId)

  if (!product) {
    return []
  }

  return mockProducts.filter((p) => p.id !== productId && p.category === product.category).slice(0, 4)
}

// Get all categories
export async function getCategories(): Promise<Category[]> {
  await delay(300)
  return [...mockCategories]
}

// Get all orders
export async function getOrders(): Promise<Order[]> {
  await delay(500)
  return [...mockOrders]
}

// Get order by ID
export async function getOrder(id: string): Promise<Order | undefined> {
  await delay(300)
  return mockOrders.find((order) => order.id === id)
}

// Create a new order
export async function createOrder(orderData: Omit<Order, "id">): Promise<Order> {
  await delay(800)

  const newOrder: Order = {
    ...orderData,
    id: `${1000 + mockOrders.length + 1}`,
  }

  mockOrders.push(newOrder)
  return newOrder
}

// Update product stock
export async function updateProductStock(productId: string, quantity: number): Promise<Product | undefined> {
  await delay(300)

  const productIndex = mockProducts.findIndex((p) => p.id === productId)
  if (productIndex === -1) return undefined

  const product = mockProducts[productIndex]
  const updatedProduct = {
    ...product,
    stockQuantity: Math.max(0, (product.stockQuantity || 0) - quantity),
  }

  mockProducts[productIndex] = updatedProduct
  return updatedProduct
}

export { mockProducts, mockCategories, mockOrders }
