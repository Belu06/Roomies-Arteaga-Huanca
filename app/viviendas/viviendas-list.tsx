import { Suspense, useState, useEffect } from 'react'
import db from "@/db"
import ViviendaCard from './vivienda-card'
import { Skeleton } from "@/components/ui/skeleton"

// Función para obtener viviendas, con filtro de búsqueda
async function getViviendas(searchTerm: string) {
  // Simula un retraso en la carga de datos
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Obtiene todas las viviendas de la base de datos
  let viviendas = await db.viviendas.findMany({})

  // Filtra las viviendas si se pasa un término de búsqueda
  if (searchTerm) {
    viviendas = viviendas.filter(vivienda =>
      vivienda.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
      vivienda.direccion.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }

  return viviendas
}

// Componente principal que maneja la lista de viviendas y el estado de búsqueda
export default function ViviendasList({ searchParams }: { searchParams: { search?: string } }) {
  const [searchTerm, setSearchTerm] = useState(searchParams.search || '') // Estado para almacenar el término de búsqueda

  // Actualiza el término de búsqueda cuando el usuario escribe en el campo
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  return (
    <div>
      {/* Campo de búsqueda */}
      <div className="mb-4">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Buscar vivienda..."
          className="p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* Suspense para mostrar el esqueleto de carga mientras se obtienen los datos */}
      <Suspense fallback={<ViviendasSkeleton />}>
        <AsyncViviendasList searchTerm={searchTerm} />
      </Suspense>
    </div>
  )
}

// Componente que maneja la carga de viviendas de manera asíncrona y filtrada
async function AsyncViviendasList({ searchTerm }: { searchTerm: string }) {
  const viviendas = await getViviendas(searchTerm)

  if (viviendas.length === 0) {
    return <p className="text-center text-gray-500">No se encontraron viviendas que coincidan con tu búsqueda.</p>
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {viviendas.map((vivienda) => (
        <ViviendaCard key={vivienda.id} vivienda={vivienda} searchTerm={searchTerm} />
      ))}
    </div>
  )
}

// Componente para mostrar el esqueleto de carga mientras se espera la respuesta
function ViviendasSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white shadow-md rounded-lg overflow-hidden">
          <Skeleton className="h-48 w-full" />
          <div className="p-4 space-y-2">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      ))}
    </div>
  )
}

