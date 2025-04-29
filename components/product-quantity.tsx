"use client"

import { Button } from "@/components/ui/button"
import { Minus, Plus } from "lucide-react"
import { useState } from "react"

export default function ProductQuantity({ initialQuantity = 1, onChange }) {
  const [quantity, setQuantity] = useState(initialQuantity)

  const increment = () => {
    const newQuantity = quantity + 1
    setQuantity(newQuantity)
    if (onChange) onChange(newQuantity)
  }

  const decrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1
      setQuantity(newQuantity)
      if (onChange) onChange(newQuantity)
    }
  }

  return (
    <div className="flex items-center border rounded-md w-fit">
      <Button
        variant="ghost"
        size="icon"
        className="h-10 w-10 rounded-none"
        onClick={decrement}
        disabled={quantity <= 1}
      >
        <Minus className="h-4 w-4" />
        <span className="sr-only">Decrease quantity</span>
      </Button>
      <div className="w-12 text-center">{quantity}</div>
      <Button variant="ghost" size="icon" className="h-10 w-10 rounded-none" onClick={increment}>
        <Plus className="h-4 w-4" />
        <span className="sr-only">Increase quantity</span>
      </Button>
    </div>
  )
}
