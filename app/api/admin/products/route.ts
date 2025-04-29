import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import { mockProducts } from "@/lib/api"

// Simulación de base de datos
const products = [...mockProducts]

export async function GET() {
  const cookieStore = cookies()
  const token = cookieStore.get("admin_token")

  if (!token || token.value !== "admin_authenticated") {
    return new NextResponse(null, { status: 401 })
  }

  return NextResponse.json(products)
}

export async function POST(request: Request) {
  const cookieStore = cookies()
  const token = cookieStore.get("admin_token")

  if (!token || token.value !== "admin_authenticated") {
    return new NextResponse(null, { status: 401 })
  }

  try {
    const product = await request.json()

    // Generar un ID único
    const newId = (Number.parseInt(products[products.length - 1]?.id || "0") + 1).toString()

    const newProduct = {
      ...product,
      id: newId,
      createdAt: new Date().toISOString(),
    }

    products.push(newProduct)

    return NextResponse.json(newProduct, { status: 201 })
  } catch (error) {
    return new NextResponse(null, { status: 400 })
  }
}
