"use client"

import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Package, Truck, CheckCircle2 } from "lucide-react"
import Image from "next/image"

export default function OrderDetailPage({ params }) {
  const { id } = params
  const { user, isLoading } = useAuth()
  const router = useRouter()
  const [isOrderLoading, setIsOrderLoading] = useState(true)

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    } else {
      // Simular carga de datos del pedido
      setTimeout(() => {
        setIsOrderLoading(false)
      }, 500)
    }
  }, [user, isLoading, router])

  // Datos simulados del pedido
  const order = {
    id,
    date: "01/12/2023",
    total: 58.97,
    subtotal: 52.98,
    deliveryFee: 5.99,
    status: "entregado",
    address: "Calle Principal 123, Col. Centro, Ciudad de México, 12345",
    items: [
      {
        id: "1",
        name: "Pastel de Chocolate",
        price: 32.99,
        quantity: 1,
        image: "/placeholder.svg?height=64&width=64&text=Pastel",
      },
      {
        id: "3",
        name: "Galletas de Chocolate",
        price: 9.99,
        quantity: 2,
        image: "/placeholder.svg?height=64&width=64&text=Galletas",
      },
    ],
  }

  if (isLoading || isOrderLoading) {
    return <div className="container py-16 px-4">Cargando...</div>
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-6">
        <Link href="/account/orders" className="flex items-center text-sm text-gray-500 hover:text-gray-900">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Volver a Mis Pedidos
        </Link>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold">Pedido #{order.id}</h1>
            <p className="text-gray-500">Realizado el {order.date}</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <ExternalLink className="h-4 w-4 mr-2" />
              Factura
            </Button>
            <Button size="sm">Repetir Pedido</Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Productos</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                {order.items.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-md">
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <h3 className="font-medium">{item.name}</h3>
                      <div className="flex justify-between mt-1">
                        <div className="text-sm text-gray-500">Cantidad: {item.quantity}</div>
                        <div>${(item.price * item.quantity).toFixed(2)}</div>
                      </div>
                    </div>
                  </div>
                ))}

                <Separator className="my-4" />

                <div className="space-y-1.5">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal</span>
                    <span>${order.subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Costo de envío</span>
                    <span>${order.deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2">
                    <span>Total</span>
                    <span>${order.total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Estado del Pedido</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span className="font-medium">Pedido confirmado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Package className="h-5 w-5 text-green-500" />
                      <span className="font-medium">Pedido preparado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="h-5 w-5 text-green-500" />
                      <span className="font-medium">Pedido enviado</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500" />
                      <span className="font-medium">Pedido entregado</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Dirección de Entrega</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">{order.address}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>¿Necesitas ayuda?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-gray-500">
                    Si tienes alguna pregunta o problema con tu pedido, no dudes en contactarnos.
                  </p>
                  <Link href="/contact">
                    <Button variant="outline" className="w-full">
                      Contactar Soporte
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
