import { Card, CardContent } from "@/components/ui/card"

export const metadata = {
  title: "Términos y Condiciones | Sweetbit",
  description: "Términos y condiciones de uso de nuestro sitio web y servicios.",
}

export default function TermsPage() {
  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <div className="flex flex-col gap-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Términos y Condiciones</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Última actualización: 1 de enero de 2023
          </p>
        </div>

        <Card>
          <CardContent className="pt-6">
            <div className="prose max-w-none">
              <p>
                Bienvenido a Sweetbit. Estos términos y condiciones describen las reglas y regulaciones para el uso del sitio web de Sweetbit.
              </p>
              <p>
                Al acceder a este sitio web, asumimos que aceptas estos términos y condiciones en su totalidad. No continúes usando el sitio web de Sweetbit si no aceptas todos los términos y condiciones establecidos en esta página.
              </p>

              <h2 className="text-xl font-semibold mt-6 mb-3">1. Definiciones</h2>
              <p>
                Los siguientes términos se aplican a estos Términos y Condiciones, Declaración de Privacidad y Aviso de Descargo de Responsabilidad y todos los Acuerdos:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>"Cliente", "Tú" y "Tu"</strong> se refiere a ti, la persona que accede a este sitio web y acepta los términos y condiciones de la Compañía.</li>
                <li><strong>"La Compañía", "Nosotros", "Nuestro"</strong> se refiere a Sweetbit.</li>
                <li><strong>"Parte", "Partes"</strong> se refiere tanto al Cliente como a nosotros, o al Cliente o a nosotros.</li>
                <li><strong>"Sitio web"</strong> se refiere al sitio web de Sweetbit.</li>
                <li><strong>"Servicio"</strong> se refiere a los servicios y/o productos que proporcionamos.</li>
              </ul>

              <h2 className="text-xl font-semibold mt-6 mb-3">2. Uso del Sitio</h2>
              <p>
                El uso de este sitio web está sujeto a las siguientes condiciones de uso:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>La información contenida en este sitio web se proporciona únicamente como información general. Nos reservamos el derecho de modificar o retirar cualquier parte de este sitio web sin previo aviso.</li>
                <li>Este sitio web puede contener enlaces a otros sitios web. A menos que se indique lo contrario, no tenemos control sobre estos sitios web ni sobre su contenido, y no aceptamos responsabilidad por ellos.</li>
                <li>El uso de cualquier información o materiales en este sitio web es bajo su propio riesgo, por lo cual no nos hacemos responsables.</li>\
