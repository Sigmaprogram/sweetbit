import { getProduct } from "@/lib/api"
import { notFound } from "next/navigation"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import AddToCartButton from "@/components/add-to-cart-button"
import ProductQuantity from "@/components/product-quantity"
import RelatedProducts from "@/components/related-products"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  if (!product) {
    return {
      title: "Product Not Found | Sweetbit",
    }
  }

  return {
    title: `${product.name} | Sweetbit`,
    description: product.description,
  }
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id)

  if (!product) {
    notFound()
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={product.image || "/placeholder.svg?height=600&width=600"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {product.stockQuantity <= 0 && (
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                <Badge variant="destructive" className="text-lg py-1.5">
                  Out of Stock
                </Badge>
              </div>
            )}
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={product.image || `/placeholder.svg?height=150&width=150&text=Image${i}`}
                  alt={`${product.name} - Image ${i}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="outline">{product.category}</Badge>
              {product.stockQuantity <= 5 && product.stockQuantity > 0 && (
                <Badge variant="secondary">Low Stock: {product.stockQuantity} left</Badge>
              )}
            </div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-2xl font-semibold mt-2">${product.price.toFixed(2)}</p>
          </div>

          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <svg
                key={star}
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-yellow-400"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
            <span className="text-sm text-gray-500">(24 reviews)</span>
          </div>

          <p className="text-gray-700">{product.description}</p>

          <Separator className="my-4" />

          {product.stockQuantity > 0 ? (
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Quantity</h3>
                <ProductQuantity maxQuantity={product.stockQuantity} />
              </div>

              <AddToCartButton product={product} />
            </div>
          ) : (
            <div className="bg-red-50 border border-red-200 rounded-md p-4 text-red-800">
              <p className="font-medium">Currently Out of Stock</p>
              <p className="text-sm mt-1">Please check back later or browse similar products below.</p>
            </div>
          )}

          <Separator className="my-4" />

          <div className="space-y-4">
            <div>
              <h3 className="font-medium">Details</h3>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1">
                <li>Freshly made daily</li>
                <li>Contains: {product.allergens || "No allergens listed"}</li>
                <li>Shelf life: 3-5 days</li>
                <li>Store in a cool, dry place</li>
              </ul>
            </div>

            <div>
              <h3 className="font-medium">Delivery Information</h3>
              <p className="text-gray-700 mt-2">
                Orders placed before 2 PM are eligible for same-day delivery. Standard delivery takes 1-2 business days.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
        <Suspense fallback={<RelatedProductsSkeleton />}>
          <RelatedProducts productId={params.id} />
        </Suspense>
      </div>
    </div>
  )
}

function RelatedProductsSkeleton() {
  return (
    <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
      {Array(4)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <Skeleton className="h-[200px] w-full rounded-lg" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        ))}
    </div>
  )
}
