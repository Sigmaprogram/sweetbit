"use client"

import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"
import { useLanguage } from "@/lib/language"

export default function Footer() {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    {
      title: t("footer.about"),
      links: [
        { label: t("footer.about"), href: "/about" },
        { label: t("footer.contact"), href: "/contact" },
        { label: t("footer.careers"), href: "/careers" },
        { label: t("footer.blog"), href: "/blog" },
      ],
    },
    {
      title: t("footer.help"),
      links: [
        { label: t("footer.faq"), href: "/faq" },
        { label: t("footer.shipping"), href: "/shipping" },
        { label: t("footer.returns"), href: "/returns" },
      ],
    },
    {
      title: t("footer.legal"),
      links: [
        { label: t("footer.privacy"), href: "/privacy" },
        { label: t("footer.terms"), href: "/terms" },
        { label: t("footer.cookies"), href: "/cookies" },
      ],
    },
  ]

  return (
    <footer className="bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-1 lg:col-span-2">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold text-pink-600 dark:text-pink-400">SweetBit</span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 max-w-md">
              Deliciosos dulces artesanales elaborados con los mejores ingredientes. Hacemos que cada momento sea
              especial con nuestros productos de alta calidad.
            </p>
            <div className="mt-6 flex space-x-4">
              <a
                href="#"
                className="rounded-full bg-gray-200 p-2 text-gray-700 transition-colors hover:bg-pink-100 hover:text-pink-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-pink-400"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-200 p-2 text-gray-700 transition-colors hover:bg-pink-100 hover:text-pink-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-pink-400"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="rounded-full bg-gray-200 p-2 text-gray-700 transition-colors hover:bg-pink-100 hover:text-pink-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-pink-400"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8 dark:border-gray-800">
          <p className="text-center text-xs text-gray-500 dark:text-gray-400">
            &copy; {currentYear} SweetBit. {t("footer.rights")}.
          </p>
        </div>
      </div>
    </footer>
  )
}
