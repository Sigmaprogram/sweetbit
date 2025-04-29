import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import type { NextRequest } from "next/server"

export async function GET(request: NextRequest) {
  cookies().delete("admin_token")
  return NextResponse.redirect(new URL("/admin/login", request.url))
}
