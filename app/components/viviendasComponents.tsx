import { prisma } from '../../lib/prisma'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default async function ViviendasComponent() {
  try {
    const viviendas = await prisma.viviendas.findMany()
    
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Viviendas</h1>
        {viviendas.length === 0 ? (
          <p className="text-gray-600">No hay viviendas disponibles en este momento.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {viviendas.map((vivienda) => (
              <Card key={vivienda.id} className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl">{vivienda.direccion}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600"><span className="font-semibold">Precio de Alquiler:</span> €{vivienda.precioDeAlquiler}</p>
                  <p className="text-gray-600"><span className="font-semibold">Locatario:</span> {vivienda.locatario}</p>
                  <p className="text-gray-600"><span className="font-semibold">Descripción:</span> {vivienda.descripcion}</p>
                  <p className="text-gray-600"><span className="font-semibold">Creado:</span> {vivienda.createdAt.toLocaleDateString()}</p>
                  <p className="text-gray-600"><span className="font-semibold">Actualizado:</span> {vivienda.updatedAt.toLocaleDateString()}</p>
                  {vivienda.imagenes && (
                    <img src={vivienda.imagenes} alt={vivienda.direccion} className="mt-2 rounded-md w-full h-48 object-cover" />
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    )
  } catch (error) {
    console.error('Failed to fetch viviendas:', error)
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Viviendas</h1>
        <p className="text-red-500">Error al cargar las viviendas. Por favor, inténtelo de nuevo más tarde.</p>
      </div>
    )
  }
}



