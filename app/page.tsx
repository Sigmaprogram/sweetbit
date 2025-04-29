import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import FeaturedProducts from "@/components/featured-products"
import CategorySection from "@/components/category-section"
import { getCategories } from "@/lib/api"

export default async function Home() {
  const categories = await getCategories()

  return (
    <div className="flex flex-col gap-12 pb-8">
      {/* Hero Section */}
      <section className="relative">
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Deliciosos Dulces Entregados a tu Puerta
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Descubre nuestra selección artesanal de dulces, productos horneados y postres. Pide online y
                    disfruta de entrega rápida.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/products">
                    <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                      Ver Menú <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/about">
                    <Button size="lg" variant="outline">
                      Conocer más
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px]">
                  <Image
                    src="/placeholder.svg?height=450&width=450"
                    alt="Surtido de dulces"
                    fill
                    className="object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tight">Dulces Destacados</h2>
          <p className="text-gray-500">Nuestros productos más populares que encantan a los clientes</p>
          <FeaturedProducts />
        </div>
      </section>

      {/* Categories */}
      <section className="container px-4 md:px-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tight">Explorar por Categoría</h2>
          <p className="text-gray-500">Descubre nuestra deliciosa selección por categoría</p>
          <CategorySection categories={categories} />
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Lo Que Dicen Nuestros Clientes</h2>
            <p className="text-gray-500 mx-auto max-w-[700px]">
              No solo nos creas a nosotros - escucha a nuestros clientes satisfechos
            </p>
            <div className="grid gap-8 mt-8 md:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
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
                  </div>
                  <p className="text-gray-700 mb-4">
                    "Los postres de Sweetbit son absolutamente increíbles. Entrega rápida y todo llegó fresco y
                    delicioso."
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-full bg-gray-200"></div>
                    <div>
                      <p className="font-medium">Cliente {i}</p>
                      <p className="text-sm text-gray-500">Cliente Fiel</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container px-4 md:px-6">
        <div className="bg-pink-600 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="flex flex-col gap-4">
              <h2 className="text-3xl font-bold tracking-tight text-white">
                ¿Listo para satisfacer tu antojo de dulce?
              </h2>
              <p className="text-pink-100">Ordena ahora y recibe tus deliciosos dulces directamente en tu puerta.</p>
              <div>
                <Link href="/products">
                  <Button size="lg" className="bg-white text-pink-600 hover:bg-pink-50">
                    Ordenar Ahora <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:flex justify-end">
              <div className="relative h-[300px] w-[300px]">
                <Image
                  src="/placeholder.svg?height=300&width=300"
                  alt="Postre delicioso"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
