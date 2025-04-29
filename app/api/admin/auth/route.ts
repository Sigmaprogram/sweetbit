import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET() {
  const cookieStore = cookies()
  const token = cookieStore.get("admin_token")

  if (!token || token.value !== "admin_authenticated") {
    return new NextResponse(null, { status: 401 })
  }

  return NextResponse.json({ authenticated: true })
}
