"use client"

import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { ShoppingBag, UserRound, MapPin, Heart } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function AccountPage() {
  const { user, isLoading, logout } = useAuth()
  const router = useRouter()
  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  })
  const [isUpdating, setIsUpdating] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    if (!isLoading && !user) {
      router.push("/login")
    } else if (user) {
      setProfileData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
      })
    }
  }, [user, isLoading, router])

  const handleChange = (e) => {
    const { name, value } = e.target
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsUpdating(true)

    // Simular actualización del perfil
    setTimeout(() => {
      toast({
        title: "Perfil actualizado",
        description: "Tu información de perfil ha sido actualizada correctamente.",
      })
      setIsUpdating(false)
    }, 1000)
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  if (isLoading) {
    return <div className="container py-16 px-4">Cargando...</div>
  }

  return (
    <div className="container px-4 py-8 md:px-6 md:py-12">
      <h1 className="text-3xl font-bold mb-6">Mi Cuenta</h1>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">
            <UserRound className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Perfil</span>
          </TabsTrigger>
          <TabsTrigger value="orders">
            <ShoppingBag className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Pedidos</span>
          </TabsTrigger>
          <TabsTrigger value="addresses">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Direcciones</span>
          </TabsTrigger>
          <TabsTrigger value="favorites">
            <Heart className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Favoritos</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>Información del Perfil</CardTitle>
              <CardDescription>Actualiza tu información personal y datos de contacto</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre completo</Label>
                  <Input id="name" name="name" value={profileData.name} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={profileData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" name="phone" type="tel" value={profileData.phone} onChange={handleChange} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Dirección</Label>
                  <Textarea id="address" name="address" value={profileData.address} onChange={handleChange} rows={3} />
                </div>
                <div className="flex gap-4">
                  <Button type="submit" disabled={isUpdating}>
                    {isUpdating ? "Actualizando..." : "Guardar Cambios"}
                  </Button>
                  <Button type="button" variant="outline" onClick={handleLogout}>
                    Cerrar Sesión
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders">
          <Card>
            <CardHeader>
              <CardTitle>Mis Pedidos</CardTitle>
              <CardDescription>Visualiza y haz seguimiento de tus pedidos recientes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6">
                <div className="rounded-md border px-6 py-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">Pedido #1001</h3>
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Entregado</span>
                      </div>
                      <p className="text-sm text-gray-500">Realizado el 01/12/2023</p>
                    </div>
                    <div className="flex gap-2">
                      <Link href="/account/orders/1001">
                        <Button variant="outline" size="sm">
                          Ver Detalles
                        </Button>
                      </Link>
                      <Button variant="ghost" size="sm">
                        Repetir Pedido
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="rounded-md border px-6 py-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-medium">Pedido #1002</h3>
                        <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">En Camino</span>
                      </div>
                      <p className="text-sm text-gray-500">Realizado el 15/11/2023</p>
                    </div>
                    <div className="flex gap-2">
                      <Link href="/account/orders/1002">
                        <Button variant="outline" size="sm">
                          Ver Detalles
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                <Link href="/account/orders">
                  <Button variant="link" className="w-full">
                    Ver todos mis pedidos
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="addresses">
          <Card>
            <CardHeader>
              <CardTitle>Direcciones de Entrega</CardTitle>
              <CardDescription>Administra tus direcciones guardadas para una compra más rápida</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-6">
                <div className="rounded-md border p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium">Dirección Principal</h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Calle Principal 123
                        <br />
                        Col. Centro
                        <br />
                        Ciudad de México, 12345
                        <br />
                        México
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        Editar
                      </Button>
                    </div>
                  </div>
                </div>

                <Button>Añadir Nueva Dirección</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="favorites">
          <Card>
            <CardHeader>
              <CardTitle>Mis Favoritos</CardTitle>
              <CardDescription>Productos que has marcado como favoritos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <Heart className="h-12 w-12 mx-auto text-gray-300" />
                <h3 className="font-medium mt-4">Aún no tienes productos favoritos</h3>
                <p className="text-gray-500 mt-2">
                  Explora nuestra tienda y guarda tus productos favoritos para verlos aquí.
                </p>
                <Link href="/products">
                  <Button variant="link" className="mt-4">
                    Explorar productos
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
