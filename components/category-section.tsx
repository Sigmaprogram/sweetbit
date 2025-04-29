import Link from "next/link"
import Image from "next/image"
import type { Category } from "@/lib/types"

export default function CategorySection({ categories }: { categories: Category[] }) {
  return (
    <div className="grid gap-6 grid-cols-2 md:grid-cols-5">
      {categories.map((category) => (
        <Link key={category.id} href={`/products?category=${category.slug}`}>
          <div className="group relative overflow-hidden rounded-lg">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3 className="text-white text-xl font-semibold">{category.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
