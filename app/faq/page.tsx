import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export const metadata = {
  title: "Preguntas Frecuentes | Sweetbit",
  description: "Respuestas a las preguntas más frecuentes sobre nuestros productos y servicios.",
}

export default function FAQPage() {
  const faqCategories = [
    {
      title: "Pedidos y Entregas",
      questions: [
        {
          question: "¿Cuál es el tiempo de entrega estimado?",
          answer:
            "Nuestro tiempo de entrega estándar es de 1-2 días hábiles. Para pedidos urgentes, ofrecemos entrega express el mismo día si realizas tu pedido antes de las 2 PM.",
        },
        {
          question: "¿Cuál es el pedido mínimo para entrega a domicilio?",
          answer:
            "El pedido mínimo para entrega a domicilio es de $20. Los pedidos superiores a $50 tienen envío gratuito.",
        },
        {
          question: "¿Qué hago si mi pedido llega dañado?",
          answer:
            "Si tu pedido llega en malas condiciones, toma una foto y contáctanos dentro de las 24 horas siguientes a la entrega. Te enviaremos un reemplazo o te reembolsaremos el importe.",
        },
        {
          question: "¿Puedo cambiar mi dirección de entrega después de realizar el pedido?",
          answer:
            "Sí, puedes cambiar la dirección de entrega siempre que el pedido no haya sido enviado. Contáctanos lo antes posible para realizar el cambio.",
        },
      ],
    },
    {
      title: "Productos y Alérgenos",
      questions: [
        {
          question: "¿Sus productos contienen alérgenos comunes?",
          answer:
            "Sí, muchos de nuestros productos contienen huevos, lácteos, gluten y frutos secos. Cada producto tiene detallada la información de alérgenos en su descripción.",
        },
        {
          question: "¿Ofrecen opciones para dietas especiales?",
          answer:
            "Ofrecemos una selección de productos sin gluten y veganos. Estos están claramente etiquetados en nuestra tienda.",
        },
        {
          question: "¿Cuánto tiempo se mantienen frescos sus productos?",
          answer:
            "La mayoría de nuestros productos tienen una vida útil de 3-5 días si se almacenan correctamente en un lugar fresco y seco o en el refrigerador.",
        },
        {
          question: "¿Usan conservantes en sus productos?",
          answer:
            "No utilizamos conservantes artificiales. Todos nuestros productos son elaborados diariamente con ingredientes frescos y naturales.",
        },
      ],
    },
    {
      title: "Pagos y Facturación",
      questions: [
        {
          question: "¿Qué métodos de pago aceptan?",
          answer: "Aceptamos pagos en efectivo contra entrega y tarjetas de débito/crédito.",
        },
        {
          question: "¿Puedo solicitar factura de mi compra?",
          answer:
            "Sí, puedes solicitar factura al momento de realizar tu pedido seleccionando la opción correspondiente en el checkout, o posteriormente contactando a nuestro equipo de atención al cliente.",
        },
        {
          question: "¿Ofrecen descuentos para pedidos grandes o eventos?",
          answer:
            "Sí, ofrecemos descuentos especiales para pedidos grandes y eventos como bodas o fiestas corporativas. Contáctanos para obtener una cotización personalizada.",
        },
      ],
    },
    {
      title: "Cuenta y Privacidad",
      questions: [
        {
          question: "¿Cómo puedo recuperar mi contraseña?",
          answer:
            "En la página de inicio de sesión, haz clic en '¿Olvidaste tu contraseña?' y sigue las instrucciones para restablecerla.",
        },
        {
          question: "¿Qué información almacenan sobre mí?",
          answer:
            "Almacenamos tu información de contacto, historial de pedidos y preferencias para mejorar tu experiencia de compra. No compartimos tu información con terceros sin tu consentimiento.",
        },
        {
          question: "¿Puedo eliminar mi cuenta?",
          answer:
            "Sí, puedes solicitar la eliminación de tu cuenta y datos personales en cualquier momento contactando a nuestro servicio de atención al cliente.",
        },
      ],
    },
  ]

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Preguntas Frecuentes</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Encuentra respuestas a las preguntas más comunes sobre nuestros productos, entregas y servicios
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="col-span-2">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-64 flex-shrink-0 pb-6 md:pb-0">
                  <div className="sticky top-6 space-y-1">
                    {faqCategories.map((category, index) => (
                      <a
                        key={index}
                        href={`#category-${index}`}
                        className="block py-2 text-sm font-medium hover:text-pink-600"
                      >
                        {category.title}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="flex-1 md:pl-6 md:border-l">
                  <div className="space-y-10">
                    {faqCategories.map((category, categoryIndex) => (
                      <div key={categoryIndex} id={`category-${categoryIndex}`}>
                        <h2 className="text-2xl font-semibold mb-4">{category.title}</h2>
                        <Accordion type="single" collapsible className="space-y-4">
                          {category.questions.map((item, itemIndex) => (
                            <AccordionItem
                              key={itemIndex}
                              value={`item-${categoryIndex}-${itemIndex}`}
                              className="border rounded-md px-4"
                            >
                              <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                              <AccordionContent className="text-gray-600">{item.answer}</AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="col-span-2">
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4 text-center">¿No encuentras lo que buscas?</h2>
              <p className="text-center text-gray-500 mb-4">
                Si tienes alguna otra pregunta o necesitas ayuda, no dudes en contactarnos.
              </p>
              <div className="flex justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-pink-600 px-4 py-2 text-sm font-medium text-white hover:bg-pink-700"
                >
                  Contactar Soporte
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
