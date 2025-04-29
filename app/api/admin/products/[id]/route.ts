import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { mockProducts } from "@/lib/api"

// Simulación de base de datos
const products = [...mockProducts]

export async function GET(request: Request, { params }) {
  const cookieStore = cookies()
  const token = cookieStore.get("admin_token")

  if (!token || token.value !== "admin_authenticated") {
    return new NextResponse(null, { status: 401 })
  }

  const { id } = params
  const product = products.find((p) => p.id === id)

  if (!product) {
    return new NextResponse(null, { status: 404 })
  }

  return NextResponse.json(product)
}

export async function PUT(request: Request, { params }) {
  const cookieStore = cookies()
  const token = cookieStore.get("admin_token")

  if (!token || token.value !== "admin_authenticated") {
    return new NextResponse(null, { status: 401 })
  }

  try {
    const { id } = params
    const updatedProduct = await request.json()

    const index = products.findIndex((p) => p.id === id)

    if (index === -1) {
      return new NextResponse(null, { status: 404 })
    }

    products[index] = {
      ...products[index],
      ...updatedProduct,
      id, // Asegurarse de que el ID no cambie
    }

    return NextResponse.json(products[index])
  } catch (error) {
    return new NextResponse(null, { status: 400 })
  }
}

export async function DELETE(request: Request, { params }) {
  const cookieStore = cookies()
  const token = cookieStore.get("admin_token")

  if (!token || token.value !== "admin_authenticated") {
    return new NextResponse(null, { status: 401 })
  }

  const { id } = params
  const index = products.findIndex((p) => p.id === id)

  if (index === -1) {
    return new NextResponse(null, { status: 404 })
  }

  products.splice(index, 1)

  return new NextResponse(null, { status: 204 })
}
