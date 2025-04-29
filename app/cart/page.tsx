"use client"

import { useCart } from "@/components/cart-provider"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Trash2, Plus, Minus, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="container px-4 py-8 md:px-6 md:py-12">Cargando...</div>
  }

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const deliveryFee = subtotal > 50 ? 0 : 5.99
  const total = subtotal + deliveryFee

  if (cart.length === 0) {
    return (
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <h1 className="text-3xl font-bold mb-6">Tu Carrito</h1>
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <div className="mb-4 text-5xl">🛒</div>
          <h2 className="text-2xl font-semibold mb-2">Tu carrito está vacío</h2>
          <p className="text-gray-500 mb-6 max-w-md">
            Parece que aún no has añadido productos a tu carrito. Explora nuestros deliciosos dulces y empieza a
            comprar.
          </p>
          <Link href="/products">
            <Button>Ver Productos</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <h1 className="text-3xl font-bold mb-6">Tu Carrito</h1>

      <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
        <div className="flex flex-col gap-4">
          <div className="rounded-lg border shadow-sm">
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Productos ({cart.length})</h2>
                <Button variant="ghost" size="sm" onClick={clearCart}>
                  Vaciar Carrito
                </Button>
              </div>

              <div className="divide-y">
                {cart.map((item) => (
                  <div key={item.id} className="py-4 flex gap-4">
                    <div className="relative h-20 w-20 overflow-hidden rounded-md">
                      <Image
                        src={item.image || "/placeholder.svg?height=80&width=80"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="flex flex-1 flex-col gap-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center rounded-md border">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-none"
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        >
                          <Minus className="h-3 w-3" />
                          <span className="sr-only">Disminuir cantidad</span>
                        </Button>
                        <div className="w-8 text-center text-sm">{item.quantity}</div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-none"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                          <span className="sr-only">Aumentar cantidad</span>
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-500"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Eliminar producto</span>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg border shadow-sm h-fit">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Resumen del Pedido</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Costo de Envío</span>
                <span>
                  {deliveryFee === 0 ? <span className="text-green-600">Gratis</span> : `$${deliveryFee.toFixed(2)}`}
                </span>
              </div>

              {deliveryFee > 0 && <div className="text-sm text-gray-500">Envío gratis en pedidos superiores a $50</div>}

              <Separator />

              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <Link href="/checkout" className="w-full">
                <Button className="w-full">
                  Proceder al Pago <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>

              <div className="text-center text-sm text-gray-500">Impuestos calculados al finalizar la compra</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
