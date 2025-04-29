import { Card, CardContent } from "@/components/ui/card"
import { AlertCircle, ArrowLeftRight, Clock, CheckCircle } from "lucide-react"

export const metadata = {
  title: "Devoluciones y Reembolsos | Sweetbit",
  description: "Información sobre nuestra política de devoluciones y reembolsos.",
}

export default function ReturnsPage() {
  const returnSteps = [
    {
      icon: AlertCircle,
      title: "Reporta el problema",
      description: "Contáctanos dentro de las 24 horas siguientes a la recepción de tu pedido.",
    },
    {
      icon: ArrowLeftRight,
      title: "Evaluación",
      description: "Evaluaremos tu caso y te daremos instrucciones sobre cómo proceder.",
    },
    {
      icon: Clock,
      title: "Procesamiento",
      description: "Procesaremos tu devolución o reemplazo en un plazo de 1-3 días hábiles.",
    },
    {
      icon: CheckCircle,
      title: "Resolución",
      description: "Recibirás un reembolso o un producto de reemplazo según corresponda.",
    },
  ]

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Devoluciones y Reembolsos</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Información sobre nuestra política de devoluciones, reembolsos y cómo proceder si tienes algún problema con
            tu pedido
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-2xl font-semibold mb-6 text-center">Proceso de Devolución</h2>
            <div className="grid gap-6 md:grid-cols-4">
              {returnSteps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="relative">
                    <div className="bg-pink-100 text-pink-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                      <step.icon className="h-6 w-6" />
                    </div>
                    {index < returnSteps.length - 1 && (
                      <div
                        className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gray-200"
                        style={{ width: "calc(100% - 3rem)" }}
                      ></div>
                    )}
                  </div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Política de Devoluciones</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  En Sweetbit, nos esforzamos por garantizar que todos nuestros productos lleguen en perfectas
                  condiciones. Sin embargo, entendemos que pueden surgir problemas.
                </p>
                <div>
                  <h3 className="font-medium mb-1">Productos Dañados o Incorrectos</h3>
                  <p className="text-sm text-gray-600">
                    Si recibes un producto dañado o incorrecto, contáctanos dentro de las 24 horas siguientes a la
                    entrega con fotos del producto. Te ofreceremos un reemplazo o un reembolso completo.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Calidad del Producto</h3>
                  <p className="text-sm text-gray-600">
                    Si no estás satisfecho con la calidad de nuestros productos, contáctanos dentro de las 24 horas
                    siguientes a la entrega. Evaluaremos cada caso individualmente.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Cancelaciones</h3>
                  <p className="text-sm text-gray-600">
                    Puedes cancelar tu pedido sin cargo alguno si aún no ha sido preparado. Una vez que el pedido está
                    en preparación, aplicarán cargos por cancelación.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Política de Reembolsos</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-1">Tiempo de Procesamiento</h3>
                  <p className="text-sm text-gray-600">
                    Los reembolsos se procesan dentro de los 3-5 días hábiles posteriores a la aprobación de la
                    devolución. El tiempo que tarda en reflejarse en tu cuenta depende de tu entidad bancaria.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Métodos de Reembolso</h3>
                  <p className="text-sm text-gray-600">
                    Los reembolsos se realizarán utilizando el mismo método de pago que utilizaste para realizar la
                    compra. Para pagos en efectivo, ofreceremos un crédito en la tienda o una transferencia bancaria.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Reembolsos Parciales</h3>
                  <p className="text-sm text-gray-600">
                    En algunos casos, podemos ofrecer reembolsos parciales si solo una parte del pedido presenta
                    problemas o si se ha consumido parte del producto.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardContent className="pt-6">
            <h2 className="text-xl font-semibold mb-4">Preguntas Frecuentes</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-medium mb-1">¿Puedo devolver un producto si simplemente cambié de opinión?</h3>
                <p className="text-sm text-gray-600">
                  Debido a la naturaleza perecedera de nuestros productos, generalmente no aceptamos devoluciones por
                  cambio de opinión. Sin embargo, evaluamos cada caso individualmente.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">¿Qué información necesito proporcionar para una devolución?</h3>
                <p className="text-sm text-gray-600">
                  Necesitarás tu número de pedido, detalles del problema y, si es posible, fotos que muestren el
                  problema con el producto.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">¿Hay algún cargo por devolución?</h3>
                <p className="text-sm text-gray-600">
                  No hay cargos por devoluciones cuando el producto está dañado o es incorrecto. Para otros casos,
                  podría aplicarse un cargo de servicio.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-1">¿Qué sucede si mi pedido llega tarde?</h3>
                <p className="text-sm text-gray-600">
                  Si tu pedido llega fuera del tiempo estimado de entrega, contáctanos. Dependiendo de la situación,
                  podríamos ofrecerte un descuento en tu próxima compra.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="bg-pink-50 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-2">¿Necesitas ayuda con una devolución?</h2>
          <p className="text-gray-600 mb-4">
            Nuestro equipo de atención al cliente está listo para ayudarte con cualquier problema relacionado con tu
            pedido.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700"
            >
              Contactar Soporte
            </a>
            <a
              href="/faq"
              className="inline-flex items-center justify-center rounded-md border border-pink-600 px-4 py-2 text-sm font-medium text-pink-600 hover:bg-pink-50"
            >
              Ver FAQ
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
