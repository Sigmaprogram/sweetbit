import { NextResponse } from "next/server"

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
]

export async function POST(request: Request) {
  try {
    const order = await request.json()

    // Generar un ID único
    const newId = (Number.parseInt(orders[orders.length - 1]?.id || "1000") + 1).toString()

    const newOrder = {
      ...order,
      id: newId,
      createdAt: new Date().toISOString(),
    }

    orders.push(newOrder)

    return NextResponse.json(newOrder, { status: 201 })
  } catch (error) {
    return new NextResponse(null, { status: 400 })
  }
}
