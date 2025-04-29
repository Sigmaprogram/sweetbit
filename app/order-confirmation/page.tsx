"use client"

import { Button } from "@/components/ui/button"
import { CheckCircle2, Package, Truck } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function OrderConfirmationPage() {
  const [orderNumber, setOrderNumber] = useState("")

  useEffect(() => {
    // Generate a random order number
    const randomOrderNumber = Math.floor(10000000 + Math.random() * 90000000).toString()
    setOrderNumber(randomOrderNumber)
  }, [])

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <CheckCircle2 className="h-16 w-16 text-green-500" />
        </div>

        <h1 className="text-3xl font-bold mb-2">Thank You for Your Order!</h1>
        <p className="text-gray-500 mb-6">Your order has been received and is being processed.</p>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <div className="text-left space-y-4">
            <div className="flex justify-between">
              <span className="font-medium">Order Number:</span>
              <span>{orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Order Date:</span>
              <span>{new Date().toLocaleDateString()}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Estimated Delivery:</span>
              <span>{new Date(Date.now() + 86400000).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Track Your Order</h2>
          <div className="relative">
            <div className="flex items-center justify-between mb-2">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm mt-1">Confirmed</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <Package className="h-5 w-5 text-gray-500" />
                </div>
                <span className="text-sm mt-1">Preparing</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <Truck className="h-5 w-5 text-gray-500" />
                </div>
                <span className="text-sm mt-1">On the way</span>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-gray-500" />
                </div>
                <span className="text-sm mt-1">Delivered</span>
              </div>
            </div>
            <div className="absolute top-5 left-0 right-0 h-1 bg-gray-200 -z-10">
              <div className="h-full bg-green-500 w-[15%]"></div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/products">
            <Button variant="outline">Continue Shopping</Button>
          </Link>
          <Link href="/account/orders">
            <Button>View Order History</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
