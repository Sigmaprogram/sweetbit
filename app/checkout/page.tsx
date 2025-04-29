"use client"

import { useCart } from "@/components/cart-provider"
import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { ArrowLeft, Truck } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function CheckoutPage() {
  const { cart, clearCart } = useCart()
  const { user } = useAuth()
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    deliveryOption: "standard",
    notes: "",
  })
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    setMounted(true)
    // Pre-fill form with user data if available
    if (user) {
      setFormData((prev) => ({
        ...prev,
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
      }))
    }
  }, [user])

  if (!mounted) {
    return <div className="container px-4 py-8 md:px-6 md:py-12">Loading...</div>
  }

  if (cart.length === 0) {
    router.push("/cart")
    return null
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const deliveryFee = formData.deliveryOption === "express" ? 9.99 : subtotal > 50 ? 0 : 5.99
  const total = subtotal + deliveryFee

  const handleSubmit = async (e) => {
    e.preventDefault()

    const orderData = {
      customer: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        userId: user?.id || null,
      },
      address: formData.address,
      deliveryOption: formData.deliveryOption,
      notes: formData.notes,
      items: cart,
      subtotal,
      deliveryFee,
      total,
      status: "pending",
      createdAt: new Date().toISOString(),
    }

    try {
      // Submit order to API
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(orderData),
      })

      if (!response.ok) {
        throw new Error("Failed to place order")
      }

      const data = await response.json()

      toast({
        title: "Order Placed Successfully!",
        description: "Your order has been placed and will be delivered soon.",
      })

      clearCart()
      router.push(`/order-confirmation/${data.id}`)
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem placing your order. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="mb-6">
        <Link href="/cart" className="flex items-center text-sm text-gray-500 hover:text-gray-900">
          <ArrowLeft className="mr-1 h-4 w-4" />
          Back to Cart
        </Link>
      </div>

      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="grid gap-8 lg:grid-cols-[1fr_400px]">
        <form onSubmit={handleSubmit} className="space-y-8">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(123) 456-7890"
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Delivery Information</h2>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="address">Full Address</Label>
                  <Textarea
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Street address, city, state, zip code"
                    rows={3}
                    required
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Delivery Options</h2>
              <RadioGroup
                defaultValue="standard"
                name="deliveryOption"
                value={formData.deliveryOption}
                onValueChange={(value) => setFormData((prev) => ({ ...prev, deliveryOption: value }))}
                className="space-y-4"
              >
                <div className="flex items-center space-x-2 rounded-md border p-4">
                  <RadioGroupItem value="standard" id="standard" />
                  <Label htmlFor="standard" className="flex-1 cursor-pointer">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Truck className="h-5 w-5 text-gray-500" />
                        <div>
                          <div className="font-medium">Standard Delivery</div>
                          <div className="text-sm text-gray-500">Delivery within 1-2 business days</div>
                        </div>
                      </div>
                      <div className="font-medium">
                        {subtotal > 50 ? <span className="text-green-600">Free</span> : `$5.99`}
                      </div>
                    </div>
                  </Label>
                </div>
                <div className="flex items-center space-x-2 rounded-md border p-4">
                  <RadioGroupItem value="express" id="express" />
                  <Label htmlFor="express" className="flex-1 cursor-pointer">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <Truck className="h-5 w-5 text-gray-500" />
                        <div>
                          <div className="font-medium">Express Delivery</div>
                          <div className="text-sm text-gray-500">Same-day delivery (order before 2 PM)</div>
                        </div>
                      </div>
                      <div className="font-medium">$9.99</div>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Additional Notes</h2>
              <div className="grid gap-2">
                <Label htmlFor="notes">Special Instructions (optional)</Label>
                <Textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Delivery instructions, preferences, etc."
                  rows={3}
                />
              </div>
            </CardContent>
          </Card>

          <div className="text-sm text-gray-500 mb-4">
            <p>
              By placing your order, you agree to our{" "}
              <Link href="/terms" className="text-primary underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="text-primary underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>

          <Button type="submit" className="w-full">
            Place Order
          </Button>
        </form>

        <div className="space-y-6">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

              <div className="max-h-[300px] overflow-y-auto space-y-4 pr-2">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-md flex-shrink-0">
                      <Image
                        src={item.image || "/placeholder.svg?height=64&width=64"}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <h3 className="font-medium">{item.name}</h3>
                        <p>${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Separator className="my-4" />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Delivery Fee</span>
                  <span>
                    {formData.deliveryOption === "express" ? (
                      "$9.99"
                    ) : deliveryFee === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `$5.99`
                    )}
                  </span>
                </div>
                {formData.deliveryOption !== "express" && deliveryFee > 0 && (
                  <div className="text-sm text-gray-500">Free delivery on orders over $50</div>
                )}
                <Separator />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
            <p className="font-medium mb-1">Note:</p>
            <p>Payment will be collected upon delivery. You can pay with cash or card when your order arrives.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
