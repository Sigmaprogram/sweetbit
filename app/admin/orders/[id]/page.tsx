"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useToast } from "@/components/ui/use-toast"
import { ArrowLeft, Printer } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function OrderDetailPage({ params }) {
  const { id } = params
  const [order, setOrder] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(`/api/admin/orders/${id}`)
        if (!response.ok) {
          throw new Error("Error al cargar el pedido")
        }
        const data = await response.json()
        setOrder(data)
      } catch (error) {
        toast({
          title: "Error",
          description: "No se pudo cargar la información del pedido",
          variant: "destructive",
        })
        router.push("/admin/orders")
      } finally {
        setIsLoading(false)
      }
    }

    fetchOrder()
  }, [id, router, toast])

  const handleStatusChange = async (newStatus) => {
    try {
      const response = await fetch(`/api/admin/orders/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status: newStatus }),
      })

      if (!response.ok) {
        throw new Error("Error al actualizar el estado del pedido")
      }

      setOrder({
        ...order,
        status: newStatus,
      })

      toast({
        title: "Estado actualizado",
        description: "El estado del pedido ha sido actualizado correctamente",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo actualizar el estado del pedido",
        variant: "destructive",
      })
    }
  }

  const getStatusBadgeClass = (status) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "processing":
        return "bg-blue-100 text-blue-800"
      case "shipped":
        return "bg-purple-100 text-purple-800"
      case "delivered":
        return "bg-green-100 text-green-800"
      case "cancelled":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const printOrder = () => {
    window.print()
  }

  if (isLoading) {
    return <div className="container py-10">Cargando...</div>
  }

  if (!order) {
    return (
      <div className="container py-10">
        <Card>
          <CardContent className="pt-6">
            <div className="text-center py-4">
              <p>No se encontró el pedido</p>
              <Link href="/admin/orders" className="mt-4 inline-block">
                <Button variant="outline">Volver a Pedidos</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="container py-10">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/admin/orders">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="sr-only">Volver</span>
                </Button>
              </Link>
              <div>
                <CardTitle>Detalles del Pedido #{order.id}</CardTitle>
                <CardDescription>
                  Realizado el {new Date(order.createdAt).toLocaleDateString()} a las{" "}
                  {new Date(order.createdAt).toLocaleTimeString()}
                </CardDescription>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Select value={order.status} onValueChange={handleStatusChange}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Estado" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pendiente</SelectItem>
                  <SelectItem value="processing">En proceso</SelectItem>
                  <SelectItem value="shipped">Enviado</SelectItem>
                  <SelectItem value="delivered">Entregado</SelectItem>
                  <SelectItem value="cancelled">Cancelado</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" size="icon" onClick={printOrder}>
                <Printer className="h-4 w-4" />
                <span className="sr-only">Imprimir</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-semibold text-lg mb-2">Estado del Pedido</h3>
              <span className={`px-3 py-1 rounded-full ${getStatusBadgeClass(order.status)}`}>
                {order.status === "pending" && "Pendiente"}
                {order.status === "processing" && "En proceso"}
                {order.status === "shipped" && "Enviado"}
                {order.status === "delivered" && "Entregado"}
                {order.status === "cancelled" && "Cancelado"}
              </span>
            </div>
            <div className="text-right">
              <h3 className="font-semibold text-lg mb-2">Total</h3>
              <p className="text-2xl font-bold">${order.total.toFixed(2)}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Información del Cliente</h3>
              <Card>
                <CardContent className="pt-6">
                  <p>
                    <span className="font-medium">Nombre:</span> {order.customer.name}
                  </p>
                  <p>
                    <span className="font-medium">Email:</span> {order.customer.email}
                  </p>
                  <p>
                    <span className="font-medium">Teléfono:</span> {order.customer.phone}
                  </p>
                </CardContent>
              </Card>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Dirección de Entrega</h3>
              <Card>
                <CardContent className="pt-6">
                  <p>{order.address}</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Productos</h3>
            <Card>
              <CardContent className="pt-6">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Producto</TableHead>
                      <TableHead className="text-right">Precio</TableHead>
                      <TableHead className="text-right">Cantidad</TableHead>
                      <TableHead className="text-right">Subtotal</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {order.items.map((item) => (
                      <TableRow key={item.id}>
                        <TableCell className="font-medium">{item.name}</TableCell>
                        <TableCell className="text-right">${item.price.toFixed(2)}</TableCell>
                        <TableCell className="text-right">{item.quantity}</TableCell>
                        <TableCell className="text-right">${(item.price * item.quantity).toFixed(2)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Separator className="my-4" />
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${(order.total - (order.deliveryFee || 0)).toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Costo de Envío</span>
                    <span>${(order.deliveryFee || 0).toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>Total</span>
                    <span>${order.total.toFixed(2)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {order.notes && (
            <div>
              <h3 className="font-semibold text-lg mb-2">Notas</h3>
              <Card>
                <CardContent className="pt-6">
                  <p>{order.notes}</p>
                </CardContent>
              </Card>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
