import { getProducts, getCategories } from "@/lib/api"
import ProductGrid from "@/components/product-grid"
import ProductFilters from "@/components/product-filters"
import { Suspense } from "react"
import { Skeleton } from "@/components/ui/skeleton"

export const metadata = {
  title: "Products | Sweetbit",
  description: "Browse our delicious selection of sweet treats and desserts.",
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string; sort?: string }
}) {
  const products = await getProducts()
  const categories = await getCategories()
  const { category, sort } = searchParams

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Our Menu</h1>
        <p className="text-gray-500 max-w-[800px]">
          Browse our delicious selection of sweet treats, baked goods, and desserts. Filter by category or sort to find
          exactly what you're craving.
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[240px_1fr]">
        <ProductFilters categories={categories} />
        <div>
          <Suspense fallback={<ProductGridSkeleton />}>
            <ProductGrid products={products} category={category} sort={sort} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

function ProductGridSkeleton() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {Array(6)
        .fill(0)
        .map((_, i) => (
          <div key={i} className="flex flex-col gap-2">
            <Skeleton className="h-[200px] w-full rounded-lg" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-1/4" />
          </div>
        ))}
    </div>
  )
}
