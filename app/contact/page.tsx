import type { Metadata } from "next"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Contacto | Sweetbit",
  description: "Ponte en contacto con nosotros para pedidos especiales, consultas o comentarios.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-5xl">
          Contáctanos
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          ¿Tienes alguna pregunta o comentario? Estamos aquí para ayudarte. Completa el formulario a continuación o
          utiliza cualquiera de nuestros canales de contacto.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <form className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="first-name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Nombre
                </label>
                <Input id="first-name" placeholder="Tu nombre" />
              </div>
              <div className="space-y-2">
                <label htmlFor="last-name" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Apellido
                </label>
                <Input id="last-name" placeholder="Tu apellido" />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Correo Electrónico
              </label>
              <Input id="email" type="email" placeholder="tu@ejemplo.com" />
            </div>
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Teléfono
              </label>
              <Input id="phone" type="tel" placeholder="+34 600 000 000" />
            </div>
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Asunto
              </label>
              <Input id="subject" placeholder="¿En qué podemos ayudarte?" />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-gray-700 dark:text-gray-300">
                Mensaje
              </label>
              <Textarea id="message" placeholder="Escribe tu mensaje aquí..." rows={5} />
            </div>
            <Button type="submit" className="w-full">
              Enviar Mensaje
            </Button>
          </form>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Información de Contacto</CardTitle>
              <CardDescription>Puedes contactarnos a través de los siguientes medios</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">Dirección</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Calle Dulce 123
                    <br />
                    28001 Madrid, España
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">Teléfono</h3>
                  <p className="text-gray-600 dark:text-gray-400">+34 910 000 000</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="h-5 w-5 text-pink-600 dark:text-pink-400" />
                <div>
                  <h3 className="font-medium text-gray-900 dark:text-gray-100">Correo Electrónico</h3>
                  <p className="text-gray-600 dark:text-gray-400">info@sweetbit.es</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Horario de Atención</CardTitle>
              <CardDescription>Estamos disponibles en los siguientes horarios</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Lunes - Viernes</span>
                  <span>9:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Sábado</span>
                  <span>10:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Domingo</span>
                  <span>Cerrado</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="relative h-[300px] w-full overflow-hidden rounded-xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12147.354030289067!2d-3.6881197387939453!3d40.42052249999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42289ff511827b%3A0x9e6c2716b524a3ae!2sRetiro%20Park!5e0!3m2!1sen!2ses!4v1651234567890!5m2!1sen!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
