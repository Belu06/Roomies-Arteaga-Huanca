import Image from 'next/image'
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface Vivienda {
  id: string
  imagenes: string
  descripcion: string
  precioDeAlquiler: number
  direccion: string
}

interface ViviendaCardProps {
  vivienda: Vivienda
  searchTerm: string
}

function highlightText(text: string, highlight: string) {
  if (!highlight.trim()) {
    return <span>{text}</span>
  }
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'))
  return (
    <span>
      {parts.map((part, i) => 
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span key={i} className="bg-yellow-200">{part}</span>
        ) : (
          part
        )
      )}
    </span>
  )
}

export default function ViviendaCard({ vivienda, searchTerm }: ViviendaCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-48">
        <Image
          src={vivienda.imagenes[0] || '/placeholder.svg?height=192&width=384'}
          alt={vivienda.descripcion}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-1">
          {highlightText(vivienda.descripcion, searchTerm)}
        </h2>
        <p className="text-gray-600 mb-2 line-clamp-2">
          {highlightText(vivienda.descripcion, searchTerm)}
        </p>
        <p className="font-semibold text-gray-800">
          Precio: ${vivienda.precioDeAlquiler.toLocaleString()}
        </p>
        <p className="text-gray-600">
          Ubicación: {highlightText(vivienda.direccion, searchTerm)}
        </p>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Ver detalles</Button>
      </CardFooter>
    </Card>
  )
}

