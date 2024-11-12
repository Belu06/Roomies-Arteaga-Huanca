"use client";

import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
import React, { useState, useEffect, useCallback } from "react";

type Vivienda = {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  ubicacion: string;
};

const obtenerViviendas = async (
  inicio: number,
  cantidad: number
): Promise<Vivienda[]> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const viviendas = [
    {
      id: 1,
      titulo: "Casa en la playa",
      descripcion: "Hermosa casa con vista al mar",
      precio: 200000,
      ubicacion: "Playa",
    },
    {
      id: 2,
      titulo: "Departamento en la ciudad",
      descripcion: "Céntrico y bien comunicado",
      precio: 150000,
      ubicacion: "Ciudad",
    },
    {
      id: 3,
      titulo: "Casa de campo",
      descripcion: "Amplia y tranquila",
      precio: 120000,
      ubicacion: "Campo",
    },
    {
      id: 4,
      titulo: "Loft moderno",
      descripcion: "Espacio abierto con diseño contemporáneo",
      precio: 180000,
      ubicacion: "Centro urbano",
    },
    {
      id: 5,
      titulo: "Cabaña en el bosque",
      descripcion: "Refugio tranquilo rodeado de naturaleza",
      precio: 100000,
      ubicacion: "Bosque",
    },
    {
      id: 6,
      titulo: "Penthouse de lujo",
      descripcion: "Vistas panorámicas y acabados de alta gama",
      precio: 500000,
      ubicacion: "Centro de la ciudad",
    },
  ];
  return viviendas.slice(inicio, inicio + cantidad);
};

export default function ViviendasComponent() {
  const [viviendas, setViviendas] = useState<Vivienda[]>([]);
  const [cargando, setCargando] = useState<boolean>(false);
  const [pagina, setPagina] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  const cargarViviendas = useCallback(async () => {
    try {
      setCargando(true);
      setError(null);
      const nuevasViviendas = await obtenerViviendas(pagina * 5, 5);
      setViviendas((prevViviendas) => [...prevViviendas, ...nuevasViviendas]);
      setPagina((prevPagina) => prevPagina + 1);
    } catch (err) {
      setError("Error al cargar las viviendas. Por favor, intente de nuevo.");
    } finally {
      setCargando(false);
    }
  }, [pagina]);

  useEffect(() => {
    cargarViviendas();
  }, [cargarViviendas]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">
        Viviendas disponibles
      </h1>
      {error && (
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4"
          role="alert"
        >
          <p>{error}</p>
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {viviendas.map((vivienda) => (
          <div
            key={vivienda.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {vivienda.titulo}
              </h2>
              <p className="text-gray-600 mb-2">{vivienda.descripcion}</p>
              <p className="font-semibold text-gray-800">
                Precio: ${vivienda.precio.toLocaleString()}
              </p>
              <p className="text-gray-600">Ubicación: {vivienda.ubicacion}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        {cargando ? (
          <p className="text-gray-600">Cargando...</p>
        ) : (
          <button
            onClick={cargarViviendas}
            disabled={cargando}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 transition duration-300 ease-in-out"
          >
            Cargar más
          </button>
        )}
      </div>
    </div>
  );
}
