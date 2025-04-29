"use client"

import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Search, ArrowLeft } from "lucide-react"

export default function OrdersPage() {
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    }
  }, [user, isLoading, router])

  // Lista simulada de pedidos
  const orders = [
    {
      id: "1001",
      date: "01/12/2023",
      total: 58.97,
      status: "entregado",
      items: 3,
    },
    {
      id: "1002",
      date: "15/11/2023",
      total: 42.5,
      status: "en-camino",
      items: 2,
    },
    {
      id: "1003",
      date: "30/10/2023",
      total: 35.99,
      status: "entregado",
      items: 1,
    },
  ]

  const filteredOrders = orders.filter((order) => order.id.toLowerCase().includes(searchTerm.toLowerCase()))

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "pendiente":
        return "bg-yellow-100 text-yellow-800"
      case "en-proceso":
        return "bg-blue-100 text-blue-800"
      case "en-camino":
        return "bg-purple-100 text-purple-800"
      case "entregado":
        return "bg-green-100 text-green-800"
      case "cancelado":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case "pendiente":
        return "Pendiente"
      case "en-proceso":
        return "En proceso"
      case "en-camino":
        return "En camino"
      case "entregado":
        return "Entregado"
      case "cancelado":
        return "Cancelado"
      default:
        return status
    }
  }

  if (isLoading) {
    return <div className="container py-16 px-4">Cargando...</div>
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-6">
        <Link href="/account" className="flex items-center text-sm text-gray-500 hover:text-gray-900">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Volver a Mi Cuenta
        </Link>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Historial de Pedidos</CardTitle>
          <CardDescription>Visualiza todos tus pedidos y su estado actual</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <Input
                placeholder="Buscar por número de pedido..."
                className="pl-8"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>

          <div className="rounded-md border">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="px-4 py-3 text-left text-sm font-medium">Pedido #</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Fecha</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Total</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">Estado</th>
                  <th className="px-4 py-3 text-right text-sm font-medium">Acciones</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {filteredOrders.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="px-4 py-6 text-center text-gray-500">
                      No se encontraron pedidos
                    </td>
                  </tr>
                ) : (
                  filteredOrders.map((order) => (
                    <tr key={order.id}>
                      <td className="px-4 py-4 text-sm font-medium">#{order.id}</td>
                      <td className="px-4 py-4 text-sm text-gray-500">{order.date}</td>
                      <td className="px-4 py-4 text-sm">${order.total.toFixed(2)}</td>
                      <td className="px-4 py-4 text-sm">
                        <span className={`px-2 py-1 rounded-full text-xs ${getStatusBadgeClass(order.status)}`}>
                          {getStatusText(order.status)}
                        </span>
                      </td>
                      <td className="px-4 py-4 text-sm text-right">
                        <Link href={`/account/orders/${order.id}`}>
                          <Button variant="outline" size="sm">
                            Ver Detalles
                          </Button>
                        </Link>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
