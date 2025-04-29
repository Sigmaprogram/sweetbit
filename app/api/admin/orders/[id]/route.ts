import { NextResponse } from "next/server"
import { cookies } from "next/headers"

// Referencia a la simulación de base de datos
const orders = [
  {
    id: "1001",
    customer: {
      name: "Juan Pérez",
      email: "juan@example.com",
      phone: "555-123-4567",
    },
    address: "Calle Principal 123, Ciudad de México, 12345",
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
    total: 58.97,
    deliveryFee: 5.99,
    status: "delivered",
    createdAt: "2023-12-01T10:30:00Z",
    notes: "Dejar en recepción",
  },
  {
    id: "1002",
    customer: {
      name: "María García",
      email: "maria@example.com",
      phone: "555-987-6543",
    },
    address: "Avenida Reforma 456, Guadalajara, 45678",
    items: [
      {
        id: "2",
        name: "Vanilla Bean Cupcakes",
        price: 18.99,
        quantity: 3,
        image: "/placeholder.svg?height=64&width=64&text=Cupcakes",
      },
    ],
    total: 56.97,
    deliveryFee: 0,
    status: "pending",
    createdAt: "2023-12-05T14:45:00Z",
  },
  {
    id: "1003",
    customer: {
      name: "Carlos Rodríguez",
      email: "carlos@example.com",
      phone: "555-456-7890",
    },
    address: "Calle Juárez 789, Monterrey, 67890",
    items: [
      {
        id: "4",
        name: "Strawberry Cheesecake",
        price: 28.99,
        quantity: 1,
        image: "/placeholder.svg?height=64&width=64&text=Cheesecake",
      },
      {
        id: "6",
        name: "Macarons Assortment",
        price: 24.99,
        quantity: 1,
        image: "/placeholder.svg?height=64&width=64&text=Macarons",
      },
    ],
    total: 59.97,
    deliveryFee: 5.99,
    status: "shipped",
    createdAt: "2023-12-03T09:15:00Z",
    notes: "Llamar antes de entregar",
  },
]

export async function GET(request: Request, { params }) {
  const cookieStore = cookies()
  const token = cookieStore.get("admin_token")

  if (!token || token.value !== "admin_authenticated") {
    return new NextResponse(null, { status: 401 })
  }

  const { id } = params
  const order = orders.find((o) => o.id === id)

  if (!order) {
    return new NextResponse(null, { status: 404 })
  }

  return NextResponse.json(order)
}

export async function PATCH(request: Request, { params }) {
  const cookieStore = cookies()
  const token = cookieStore.get("admin_token")

  if (!token || token.value !== "admin_authenticated") {
    return new NextResponse(null, { status: 401 })
  }

  try {
    const { id } = params
    const updates = await request.json()

    const index = orders.findIndex((o) => o.id === id)

    if (index === -1) {
      return new NextResponse(null, { status: 404 })
    }

    orders[index] = {
      ...orders[index],
      ...updates,
      id, // Asegurarse de que el ID no cambie
    }

    return NextResponse.json(orders[index])
  } catch (error) {
    return new NextResponse(null, { status: 400 })
  }
}
