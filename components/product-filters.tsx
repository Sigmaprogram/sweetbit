"use client"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, ChevronDown } from "lucide-react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"
import type { Category } from "@/lib/types"

export default function ProductFilters({ categories }: { categories: Category[] }) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const [categoryFilters, setCategoryFilters] = useState<string[]>([])
  const [sortOption, setSortOption] = useState("featured")
  const [isFilterOpen, setIsFilterOpen] = useState(true)

  // Initialize filters from URL on component mount
  useEffect(() => {
    const category = searchParams.get("category")
    const sort = searchParams.get("sort")

    if (category) {
      setCategoryFilters(category.split(","))
    }

    if (sort) {
      setSortOption(sort)
    }
  }, [searchParams])

  const handleCategoryChange = (category: string) => {
    setCategoryFilters((prev) => {
      if (prev.includes(category)) {
        return prev.filter((c) => c !== category)
      } else {
        return [...prev, category]
      }
    })
  }

  const handleSortChange = (value: string) => {
    setSortOption(value)
  }

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams)

    if (categoryFilters.length > 0) {
      params.set("category", categoryFilters.join(","))
    } else {
      params.delete("category")
    }

    if (sortOption && sortOption !== "featured") {
      params.set("sort", sortOption)
    } else {
      params.delete("sort")
    }

    router.push(`${pathname}?${params.toString()}`)
  }

  const resetFilters = () => {
    setCategoryFilters([])
    setSortOption("featured")
    router.push(pathname)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button variant="ghost" size="sm" onClick={() => setIsFilterOpen(!isFilterOpen)} className="lg:hidden">
          <ChevronDown className={`h-4 w-4 transition-transform ${isFilterOpen ? "rotate-180" : ""}`} />
        </Button>
      </div>

      <div className={`space-y-6 ${isFilterOpen ? "block" : "hidden lg:block"}`}>
        <div>
          <h3 className="font-medium mb-4">Categories</h3>
          <div className="space-y-3">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`category-${category.slug}`}
                  checked={categoryFilters.includes(category.slug)}
                  onCheckedChange={() => handleCategoryChange(category.slug)}
                />
                <Label htmlFor={`category-${category.slug}`} className="text-sm">
                  {category.name}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="font-medium mb-4">Sort By</h3>
          <RadioGroup value={sortOption} onValueChange={handleSortChange}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="featured" id="sort-featured" />
              <Label htmlFor="sort-featured" className="text-sm">
                Featured
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="newest" id="sort-newest" />
              <Label htmlFor="sort-newest" className="text-sm">
                Newest
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="price-low" id="sort-price-low" />
              <Label htmlFor="sort-price-low" className="text-sm">
                Price: Low to High
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="price-high" id="sort-price-high" />
              <Label htmlFor="sort-price-high" className="text-sm">
                Price: High to Low
              </Label>
            </div>
          </RadioGroup>
        </div>

        <div className="flex flex-col gap-2">
          <Button onClick={applyFilters}>
            Apply Filters <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" onClick={resetFilters}>
            Reset Filters
          </Button>
        </div>
      </div>
    </div>
  )
}
