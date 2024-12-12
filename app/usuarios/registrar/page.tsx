"use client";

import Link from "next/link";
import { useState } from "react";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function Page() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [numero, setNumero] = useState("");
  const [apellido, setApellido] = useState("");

  const manejarEnvio = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para enviar los datos al servidor
    // Por ahora, solo mostraremos un mensaje de éxito
    setMensaje("Registro exitoso!");
    // Limpiamos los campos del formulario
    setNombre("");
    setEmail("");
    setPassword("");
    setNumero("");
    setApellido("");
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Registro</CardTitle>
        <CardDescription>Crea una cuenta</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={manejarEnvio} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nombre">Nombre</Label>
            <Input
              id="nombre"
              type="text"
              placeholder="Tu nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="apellido">Apellido</Label>
            <Input
              id="apellido"
              type="text"
              placeholder="Tu apellido"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Numero de teléfono</Label>
            <Input
              id="numero"
              type="text"
              placeholder="Tu numero"
              value={numero}
              onChange={(e) => setNumero(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Correo electrónico</Label>
            <Input
              id="email"
              type="email"
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Contraseña</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <Link
            href="/viviendas"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
          >
            Registrarse
          </Link>
        </form>
      </CardContent>
      <CardFooter>
        {mensaje && (
          <Alert>
            <AlertDescription>{mensaje}</AlertDescription>
          </Alert>
        )}
      </CardFooter>
    </Card>
  );
}
