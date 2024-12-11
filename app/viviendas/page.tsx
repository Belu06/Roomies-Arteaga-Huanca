
import db from "@/db"
import vivendasList from './viviendas-list'
import  SearchBar from

export default async function ViviendasComponent() {
  const viviendas=await db.viviendas.findMany({})
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Viviendas disponibles
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {viviendas.map((vivienda) => (
          <div
            key={vivienda.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {vivienda.imagenes}
              </h2>
              <p className="text-gray-600 mb-2">{vivienda.descripcion}</p>
              <p className="font-semibold text-gray-800">
                Precio: ${vivienda.precioDeAlquiler.toLocaleString()}
              </p>
              <p className="text-gray-600">Ubicación: {vivienda.direccion}</p>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  );
}
