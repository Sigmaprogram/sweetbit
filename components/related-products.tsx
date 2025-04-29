import { getRelatedProducts } from "@/lib/api"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default async function RelatedProducts({ productId }: { productId: string }) {
  const products = await getRelatedProducts(productId)

  return (
    <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <Card className="overflow-hidden h-full transition-all hover:shadow-md">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={product.image || "/placeholder.svg?height=200&width=200"}
                alt={product.name}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="font-medium text-sm">{product.name}</h3>
              <p className="font-semibold text-sm mt-1">${product.price.toFixed(2)}</p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}
