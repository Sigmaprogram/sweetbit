import { NextResponse } from "next/server"
import { cookies } from "next/headers"

// En un entorno real, estas credenciales estarían en una base de datos
// y la contraseña estaría hasheada
const ADMIN_USERNAME = "admin"
const ADMIN_PASSWORD = "admin123"

export async function POST(request: Request) {
  const body = await request.json()
  const { username, password } = body

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    // Establecer cookie de autenticación
    cookies().set({
      name: "admin_token",
      value: "admin_authenticated",
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 semana
    })

    return NextResponse.json({ success: true })
  }

  return new NextResponse(null, { status: 401 })
}
