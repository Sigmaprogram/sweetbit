import { Card, CardContent } from "@/components/ui/card"
import { Check, Clock, Truck, Package } from "lucide-react"

export const metadata = {
  title: "Envío y Entrega | Sweetbit",
  description: "Información sobre nuestras políticas de envío y entrega.",
}

export default function ShippingPage() {
  const shippingMethods = [
    {
      title: "Entrega Estándar",
      icon: Truck,
      description: "Entrega en 1-2 días hábiles",
      price: "$5.99",
      freeOver: "$50",
      details:
        "El servicio estándar está disponible de lunes a viernes. Los pedidos realizados antes de las 6 PM serán procesados el mismo día.",
    },
    {
      title: "Entrega Express",
      icon: Clock,
      description: "Entrega el mismo día",
      price: "$9.99",
      details:
        "Disponible para pedidos realizados antes de las 2 PM. Servicio disponible de lunes a viernes en horario laboral.",
    },
    {
      title: "Recogida en Tienda",
      icon: Package,
      description: "Recoge tu pedido en nuestra tienda",
      price: "Gratis",
      details:
        "Puedes recoger tu pedido en nuestra tienda 2 horas después de realizarlo. Te notificaremos cuando esté listo para recoger.",
    },
  ]

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Envío y Entrega</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Información sobre nuestras opciones de envío, tiempos de entrega y costos
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {shippingMethods.map((method, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-pink-100 text-pink-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <method.icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{method.title}</h2>
                  <p className="text-gray-500 mb-4">{method.description}</p>
                  <div className="bg-gray-50 w-full py-2 px-4 rounded-md mb-4">
                    <span className="font-medium">Precio: </span>
                    <span>{method.price}</span>
                    {method.freeOver && (
                      <span className="block text-sm text-green-600">
                        Gratis en pedidos superiores a {method.freeOver}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{method.details}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Área de Cobertura</h2>
              <div className="space-y-2">
                <p className="text-gray-600">Actualmente ofrecemos entregas en las siguientes áreas:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Ciudad de México - Todas las alcaldías</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Estado de México - Zona metropolitana</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>Cuernavaca - Área central</span>
                  </li>
                </ul>
                <p className="text-sm text-gray-500 mt-4">
                  Para otras ubicaciones, por favor contáctanos para verificar disponibilidad y costos adicionales.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Información Importante</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-1">Horarios de Entrega</h3>
                  <p className="text-sm text-gray-600">
                    Nuestras entregas se realizan de lunes a viernes de 9:00 AM a 7:00 PM, y sábados de 10:00 AM a 2:00
                    PM.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Seguimiento de Pedidos</h3>
                  <p className="text-sm text-gray-600">
                    Recibirás actualizaciones por correo electrónico sobre el estado de tu pedido. También puedes
                    consultar el estado en tu cuenta.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Pedidos Especiales</h3>
                  <p className="text-sm text-gray-600">
                    Para pedidos grandes o eventos especiales, contáctanos con al menos 48 horas de anticipación para
                    garantizar disponibilidad.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Preguntas Frecuentes sobre Envíos</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-medium mb-1">¿Qué pasa si no estoy en casa durante la entrega?</h3>
                <p className="text-sm text-gray-600">
                  Si no estás en casa, intentaremos contactarte. Si no podemos comunicarnos, dejaremos el pedido con un
                  vecino o en un lugar seguro, o programaremos una nueva entrega.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">
                  ¿Puedo cambiar mi dirección de entrega después de realizar el pedido?
                </h3>
                <p className="text-sm text-gray-600">
                  Sí, puedes cambiar la dirección siempre que el pedido no haya sido enviado. Contáctanos lo antes
                  posible.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">¿Qué sucede si mi pedido llega dañado?</h3>
                <p className="text-sm text-gray-600">
                  Si tu pedido llega dañado, toma una foto y contáctanos dentro de las 24 horas siguientes. Te
                  enviaremos un reemplazo o te reembolsaremos.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">¿Realizan entregas en días festivos?</h3>
                <p className="text-sm text-gray-600">
                  No realizamos entregas en días festivos oficiales. Te recomendamos planificar tus pedidos con
                  anticipación.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
