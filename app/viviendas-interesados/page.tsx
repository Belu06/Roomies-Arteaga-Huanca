import Link from "next/link";
import { housings } from "./lib/data";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Viviendas Disponibles</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {housings.map((housing) => (
          <Link
            href={`/housing/${housing.id}`}
            key={housing.id}
            className="block"
          >
            <div className="border rounded-lg p-4 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{housing.title}</h2>
              <p className="text-gray-600 mb-2">{housing.address}</p>
              <p className="text-lg font-bold">{housing.price}€ / mes</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
