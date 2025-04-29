import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Política de Privacidad | Sweetbit",
  description: "Información sobre cómo recopilamos, utilizamos y protegemos tu información personal.",
}

export default function PrivacyPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Política de Privacidad</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">Última actualización: 1 de enero de 2023</p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="prose max-w-none">
              <p>
                En Sweetbit, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. Esta política
                de privacidad te informará sobre cómo cuidamos tus datos personales cuando visitas nuestro sitio web y
                te informará sobre tus derechos de privacidad y cómo la ley te protege.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-3">1. Información que recopilamos</h2>
              <p>
                Podemos recopilar, usar, almacenar y transferir diferentes tipos de datos personales sobre ti, que hemos
                agrupado de la siguiente manera:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Datos de identidad:</strong> incluye nombre, apellido, nombre de usuario o identificador
                  similar.
                </li>
                <li>
                  <strong>Datos de contacto:</strong> incluye dirección de facturación, dirección de entrega, dirección
                  de correo electrónico y números de teléfono.
                </li>
                <li>
                  <strong>Datos financieros:</strong> incluye detalles de tarjetas de pago.
                </li>
                <li>
                  <strong>Datos de transacción:</strong> incluye detalles sobre pagos hacia y desde ti, y otros detalles
                  de productos y servicios que has comprado de nosotros.
                </li>
                <li>
                  <strong>Datos técnicos:</strong> incluye dirección de protocolo de Internet (IP), datos de inicio de
                  sesión, tipo y versión del navegador, configuración de zona horaria y ubicación, tipos y versiones de
                  complementos del navegador, sistema operativo y plataforma, y otra tecnología en los dispositivos que
                  utilizas para acceder a este sitio web.
                </li>
                <li>
                  <strong>Datos de perfil:</strong> incluye tu nombre de usuario y contraseña, compras o pedidos
                  realizados por ti, tus intereses, preferencias, comentarios y respuestas a encuestas.
                </li>
                <li>
                  <strong>Datos de uso:</strong> incluye información sobre cómo utilizas nuestro sitio web, productos y
                  servicios.
                </li>
                <li>
                  <strong>Datos de marketing y comunicaciones:</strong> incluye tus preferencias para recibir marketing
                  de nosotros y de nuestros terceros, y tus preferencias de comunicación.
                </li>
              </ul>

              <h2 className="text-xl font-semibold mt-6 mb-3">2. Cómo utilizamos tu información</h2>
              <p>
                Utilizamos tu información personal solo cuando la ley nos lo permite. Más comúnmente, utilizaremos tu
                información personal en las siguientes circunstancias:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Cuando necesitemos ejecutar el contrato que estamos a punto de celebrar o hemos celebrado contigo.
                </li>
                <li>
                  Cuando sea necesario para nuestros intereses legítimos (o los de un tercero) y tus intereses y
                  derechos fundamentales no anulen esos intereses.
                </li>
                <li>Cuando necesitemos cumplir con una obligación legal o regulatoria.</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6 mb-3">3. Compartir tus datos personales</h2>
              <p>
                Podemos compartir tus datos personales con las partes que se indican a continuación para los fines
                establecidos en esta política de privacidad:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Proveedores de servicios que proporcionan servicios de TI y administración de sistemas.</li>
                <li>Asesores profesionales, incluidos abogados, banqueros, auditores y aseguradoras.</li>
                <li>Autoridades fiscales, reguladoras y otras autoridades.</li>
                <li>
                  Terceros a quienes podemos elegir vender, transferir o fusionar partes de nuestro negocio o nuestros
                  activos.
                </li>
              </ul>
              <p>
                Requerimos que todos los terceros respeten la seguridad de tus datos personales y los traten de acuerdo
                con la ley. No permitimos que nuestros proveedores de servicios externos utilicen tus datos personales
                para sus propios fines y solo les permitimos procesar tus datos personales para fines específicos y de
                acuerdo con nuestras instrucciones.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-3">4. Seguridad de datos</h2>
              <p>
                Hemos implementado medidas de seguridad apropiadas para evitar que tus datos personales se pierdan, usen
                o accedan de manera no autorizada, se modifiquen o divulguen. Además, limitamos el acceso a tus datos
                personales a aquellos empleados, agentes, contratistas y otros terceros que tienen una necesidad
                comercial de conocer. Solo procesarán tus datos personales según nuestras instrucciones y están sujetos
                a un deber de confidencialidad.
              </p>
              <p>
                Hemos implementado procedimientos para tratar cualquier sospecha de violación de datos personales y te
                notificaremos a ti y a cualquier regulador aplicable de una violación cuando estemos legalmente
                obligados a hacerlo.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-3">5. Retención de datos</h2>
              <p>
                Solo conservaremos tus datos personales durante el tiempo que sea necesario para cumplir con los fines
                para los que los recopilamos, incluso para satisfacer cualquier requisito legal, contable o de informes.
              </p>
              <p>
                Para determinar el período de retención apropiado para los datos personales, consideramos la cantidad,
                naturaleza y sensibilidad de los datos personales, el riesgo potencial de daño por uso o divulgación no
                autorizados de tus datos personales, los fines para los que procesamos tus datos personales y si podemos
                lograr esos fines a través de otros medios, y los requisitos legales aplicables.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-3">6. Tus derechos legales</h2>
              <p>
                Bajo ciertas circunstancias, tienes derechos bajo las leyes de protección de datos en relación con tus
                datos personales:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Solicitar acceso a tus datos personales.</li>
                <li>Solicitar la corrección de tus datos personales.</li>
                <li>Solicitar la eliminación de tus datos personales.</li>
                <li>Oponerse al procesamiento de tus datos personales.</li>
                <li>Solicitar la restricción del procesamiento de tus datos personales.</li>
                <li>Solicitar la transferencia de tus datos personales.</li>
                <li>Derecho a retirar el consentimiento.</li>
              </ul>
              <p>
                Si deseas ejercer cualquiera de los derechos establecidos anteriormente, contáctanos a través de nuestro
                formulario de contacto o enviando un correo electrónico a privacy@sweetbit.com.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-3">7. Cambios a esta política de privacidad</h2>
              <p>
                Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Cualquier
                cambio que hagamos a nuestra política de privacidad en el futuro se publicará en esta página.
              </p>
              <p>Esta política de privacidad fue actualizada por última vez el 1 de enero de 2023.</p>

              <h2 className="text-xl font-semibold mt-6 mb-3">8. Contacto</h2>
              <p>
                Si tienes alguna pregunta sobre esta política de privacidad o nuestras prácticas de privacidad,
                contáctanos en:
              </p>
              <p>
                Email: privacy@sweetbit.com
                <br />
                Teléfono: +52 (55) 1234-5678
                <br />
                Dirección: Calle Principal 123, Ciudad de México, 12345, México
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Sweetbit. Todos los derechos reservados.</p>
        </div>
      </div>
    </div>
  )
}
