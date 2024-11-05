"use client"
import React, { useState, useEffect } from "react";

type Vivienda = {
  id: number;
  titulo: string;
  descripcion: string;
  precio: number;
  ubicacion: string;
};

// Suponemos que esta es la función que obtiene los datos de un API o alguna fuente de datos
const obtenerViviendas = (inicio: number, cantidad: number): Vivienda[] => {
  // Este es un ejemplo de datos ficticios
  const viviendas = [
    { id: 1, titulo: "Casa en la playa", descripcion: "Hermosa casa con vista al mar", precio: 200000, ubicacion: "Playa" },
    { id: 2, titulo: "Departamento en la ciudad", descripcion: "Céntrico y bien comunicado", precio: 150000, ubicacion: "Ciudad" },
    { id: 3, titulo: "Casa de campo", descripcion: "Amplia y tranquila", precio: 120000, ubicacion: "Campo" },
    // ... más viviendas
  ];

  return viviendas.slice(inicio, inicio + cantidad);
};

const ViviendasComponent = () => {
  const [viviendas, setViviendas] = useState<Vivienda[]>([]); // Estado para las viviendas que se mostrarán
  const [cargando, setCargando] = useState<boolean>(false); // Estado para saber si estamos cargando más viviendas
  const [pagina, setPagina] = useState<number>(0); // Página o cuántas viviendas se han cargado

  useEffect(() => {
    // Llamamos a obtenerViviendas para cargar las primeras 5 viviendas al inicio
    cargarViviendas();
  }, []);

  const cargarViviendas = async () => {
    setCargando(true);

    // Supongamos que cargamos 5 viviendas por vez
    const nuevasViviendas = obtenerViviendas(pagina * 5, 5);

    setViviendas((prevViviendas) => [...prevViviendas, ...nuevasViviendas]); // Añadimos las nuevas viviendas a las existentes
    setPagina((prevPagina) => prevPagina + 1); // Incrementamos el contador de la página
    setCargando(false);
  };

  return (
    <div>
      <h1>Viviendas disponibles</h1>

      <div>
        {viviendas.map((vivienda) => (
          <div key={vivienda.id} className="vivienda-card">
            <h3>{vivienda.titulo}</h3>
            <p>{vivienda.descripcion}</p>
            <p>Precio: ${vivienda.precio}</p>
            <p>Ubicación: {vivienda.ubicacion}</p>
          </div>
        ))}
      </div>

      <div>
        {cargando ? (
          <p>Cargando...</p>
        ) : (
          <button onClick={cargarViviendas}>Cargar más</button>
        )}
      </div>
    </div>
  );
};

export default ViviendasComponent;