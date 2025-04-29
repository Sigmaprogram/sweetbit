"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function EditProductPage({ params }) {
  const { id } = params
  const isNewProduct = id === "new"
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    image: "",
    featured: false,
    allergens: "",
  })
  const [isLoading, setIsLoading] = useState(!isNewProduct)
  const [isSaving, setIsSaving] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  useEffect(() => {
    if (!isNewProduct) {
      const fetchProduct = async () => {
        try {
          const response = await fetch(`/api/admin/products/${id}`)
          if (!response.ok) {
            throw new Error("Error al cargar el producto")
          }
          const data = await response.json()
          setProduct(data)
        } catch (error) {
          toast({
            title: "Error",
            description: "No se pudo cargar la información del producto",
            variant: "destructive",
          })
          router.push("/admin/products")
        } finally {
          setIsLoading(false)
        }
      }

      fetchProduct()
    }
  }, [id, isNewProduct, router, toast])

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (checked) => {
    setProduct((prev) => ({
      ...prev,
      featured: checked,
    }))
  }

  const handleSelectChange = (value) => {
    setProduct((prev) => ({
      ...prev,
      category: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSaving(true)

    try {
      const url = isNewProduct ? "/api/admin/products" : `/api/admin/products/${id}`

      const method = isNewProduct ? "POST" : "PUT"

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...product,
          price: Number.parseFloat(product.price),
        }),
      })

      if (!response.ok) {
        throw new Error("Error al guardar el producto")
      }

      toast({
        title: isNewProduct ? "Producto creado" : "Producto actualizado",
        description: isNewProduct
          ? "El producto ha sido creado correctamente"
          : "El producto ha sido actualizado correctamente",
      })

      router.push("/admin/products")
    } catch (error) {
      toast({
        title: "Error",
        description: "No se pudo guardar el producto",
        variant: "destructive",
      })
    } finally {
      setIsSaving(false)
    }
  }

  if (isLoading) {
    return <div className="container py-10">Cargando...</div>
  }

  return (
    <div className="container py-10">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-4">
            <Link href="/admin/products">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Volver</span>
              </Button>
            </Link>
            <div>
              <CardTitle>{isNewProduct ? "Crear Nuevo Producto" : "Editar Producto"}</CardTitle>
              <CardDescription>
                {isNewProduct ? "Añade un nuevo producto a tu catálogo" : "Modifica la información del producto"}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nombre del Producto</Label>
                <Input id="name" name="name" value={product.name} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Precio ($)</Label>
                <Input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  min="0"
                  value={product.price}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Descripción</Label>
              <Textarea
                id="description"
                name="description"
                value={product.description}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="category">Categoría</Label>
                <Select value={product.category} onValueChange={handleSelectChange}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona una categoría" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Cakes">Pasteles</SelectItem>
                    <SelectItem value="Cookies">Galletas</SelectItem>
                    <SelectItem value="Pastries">Pastelería</SelectItem>
                    <SelectItem value="Desserts">Postres</SelectItem>
                    <SelectItem value="Chocolates">Chocolates</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="allergens">Alérgenos</Label>
                <Input
                  id="allergens"
                  name="allergens"
                  value={product.allergens}
                  onChange={handleChange}
                  placeholder="Ej: Huevos, Lácteos, Gluten"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="image">URL de la Imagen</Label>
              <Input
                id="image"
                name="image"
                value={product.image}
                onChange={handleChange}
                placeholder="https://ejemplo.com/imagen.jpg"
              />
              {product.image && (
                <div className="mt-2">
                  <p className="text-sm text-muted-foreground mb-1">Vista previa:</p>
                  <div className="h-40 w-40 rounded-md bg-gray-100 overflow-hidden relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=160&width=160"
                      }}
                    />
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="featured" checked={product.featured} onCheckedChange={handleCheckboxChange} />
              <Label htmlFor="featured">Destacar este producto</Label>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/admin/products">
              <Button variant="outline" type="button">
                Cancelar
              </Button>
            </Link>
            <Button type="submit" disabled={isSaving}>
              {isSaving ? "Guardando..." : isNewProduct ? "Crear Producto" : "Guardar Cambios"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}
