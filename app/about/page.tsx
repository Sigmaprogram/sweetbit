import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Sobre Nosotros | Sweetbit",
  description: "Conoce más sobre Sweetbit, nuestra historia, misión y valores.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="mb-16 text-center">
        <h1 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl">
          Sobre Sweetbit
        </h1>
        <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600 dark:text-gray-400">
          Somos una pastelería artesanal dedicada a crear experiencias dulces inolvidables con ingredientes de la más
          alta calidad.
        </p>
        <div className="relative mx-auto h-[400px] w-full max-w-5xl overflow-hidden rounded-xl">
          <Image
            src="/placeholder.svg?height=800&width=1600"
            alt="El equipo de Sweetbit"
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Our Story */}
      <section className="mb-16">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
              Nuestra Historia
            </h2>
            <p className="mb-4 text-gray-600 dark:text-gray-400">
              Sweetbit nació en 2015 de la pasión de María Rodríguez, una repostera con más de 15 años de experiencia.
              Lo que comenzó como un pequeño negocio en su cocina, rápidamente se convirtió en una de las pastelerías
              más queridas de la ciudad.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              A lo largo de los años, hemos crecido pero mantenemos el mismo compromiso con la calidad y la atención
              personalizada que nos caracterizó desde el primer día. Cada producto que sale de nuestra cocina está hecho
              con amor y dedicación.
            </p>
          </div>
          <div className="relative h-[300px] w-full overflow-hidden rounded-xl md:h-[400px]">
            <Image
              src="/placeholder.svg?height=800&width=800"
              alt="Fundadora de Sweetbit"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="mb-16 bg-pink-50 dark:bg-pink-950/20 p-8 rounded-xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">Nuestra Misión</h2>
          <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
            En Sweetbit, nuestra misión es endulzar la vida de nuestros clientes a través de productos artesanales de
            alta calidad, elaborados con ingredientes naturales y técnicas tradicionales que respetan el medio ambiente.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">Calidad</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Utilizamos solo los mejores ingredientes para crear productos excepcionales.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">Innovación</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Constantemente exploramos nuevas recetas y técnicas para ofrecer experiencias únicas a nuestros
                clientes.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-gray-100">Sostenibilidad</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Nos comprometemos con prácticas sostenibles y empaques eco-amigables.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Nuestro Equipo
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              name: "María Rodríguez",
              role: "Fundadora y Chef Pastelera",
              image: "/placeholder.svg?height=400&width=400",
            },
            {
              name: "Carlos Méndez",
              role: "Chef de Repostería",
              image: "/placeholder.svg?height=400&width=400",
            },
            {
              name: "Laura Torres",
              role: "Gerente de Tienda",
              image: "/placeholder.svg?height=400&width=400",
            },
          ].map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative mx-auto mb-4 h-64 w-64 overflow-hidden rounded-full">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="mb-1 text-xl font-semibold text-gray-900 dark:text-gray-100">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="rounded-xl bg-pink-600 px-8 py-12 text-center text-white dark:bg-pink-800">
        <h2 className="mb-4 text-3xl font-bold">¿Listo para probar nuestros productos?</h2>
        <p className="mx-auto mb-6 max-w-2xl text-lg">
          Descubre nuestra selección de pasteles, galletas y postres artesanales. Entregamos en toda la ciudad.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild size="lg" variant="secondary">
            <Link href="/products">Ver Productos</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent text-white hover:bg-white/10">
            <Link href="/contact">Contáctanos</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
