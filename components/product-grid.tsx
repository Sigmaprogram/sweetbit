"use client"

import { Card, CardContent } from "@/components/ui/card"
import type { Product } from "@/lib/types"
import Image from "next/image"
import Link from "next/link"
import { useMemo } from "react"

export default function ProductGrid({
  products,
  category,
  sort,
}: {
  products: Product[]
  category?: string
  sort?: string
}) {
  const filteredProducts = useMemo(() => {
    let result = [...products]

    // Filter by category if provided
    if (category) {
      result = result.filter((product) => product.category.toLowerCase() === category.toLowerCase())
    }

    // Sort products
    if (sort) {
      switch (sort) {
        case "price-low":
          result.sort((a, b) => a.price - b.price)
          break
        case "price-high":
          result.sort((a, b) => b.price - a.price)
          break
        case "newest":
          result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
          break
        case "featured":
        default:
          result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
          break
      }
    }

    return result
  }, [products, category, sort])

  if (filteredProducts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-lg font-medium">No products found</h3>
        <p className="text-gray-500 mt-2">Try changing your filters or check back later.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {filteredProducts.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <Card className="overflow-hidden h-full transition-all hover:shadow-md">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg?height=400&width=400"}
                alt={product.name}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
              {product.featured && (
                <div className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-1 rounded">Featured</div>
              )}
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{product.category}</p>
              <div className="flex justify-between items-center mt-2">
                <p className="font-semibold">${product.price.toFixed(2)}</p>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-yellow-400"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                  <span className="text-sm ml-1">{product.rating || "4.5"}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
