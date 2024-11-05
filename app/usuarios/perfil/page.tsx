<<<<<<< HEAD
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { CheckCircle, XCircle, Eye, EyeOff } from "lucide-react";

// Simulación de una función de verificación
const verificarDatos = (datos: {
  username: string;
  email: string;
  phone: string;
}) => {
  // En una implementación real, esto se conectaría a un backend para verificar los datos
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      // Simulamos que los datos son válidos si el correo contiene '@' y el teléfono tiene al menos 8 dígitos
      const esValido =
        datos.email.includes("@") && datos.phone.replace(/\D/g, "").length >= 8;
      resolve(esValido);
    }, 1000); // Simulamos un retraso de red de 1 segundo
  });
};

export default function DatosPersonales() {
  const [datos, setDatos] = useState({
    username: "juanperez",
    password: "contraseña123",
    email: "juan@example.com",
    phone: "123-456-7890",
  });
  const [verificado, setVerificado] = useState<boolean | null>(null);
  const [cargando, setCargando] = useState(false);
  const [mostrarContraseña, setMostrarContraseña] = useState(false);

  const handleVerificar = async () => {
    setCargando(true);
    const esValido = await verificarDatos({
      username: datos.username,
      email: datos.email,
      phone: datos.phone,
    });
    setVerificado(esValido);
    setCargando(false);
  };

  const toggleMostrarContraseña = () => {
    setMostrarContraseña(!mostrarContraseña);
  };

=======
"use client"

import { useState } from 'react'
import { Button } from "@/componentes/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/componentes/ui/card"
import { Label } from "@/componentes/ui/label"
import { Input } from "@/componentes/ui/input"
import { CheckCircle, XCircle, Eye, EyeOff } from "lucide-react"

// Simulación de una función de verificación
const verificarDatos = (datos: {
  username: string,
  email: string,
  phone: string
}) => {
  // En una implementación real, esto se conectaría a un backend para verificar los datos
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      // Simulamos que los datos son válidos si el correo contiene '@' y el teléfono tiene al menos 8 dígitos
      const esValido = datos.email.includes('@') && datos.phone.replace(/\D/g, '').length >= 8
      resolve(esValido)
    }, 1000) // Simulamos un retraso de red de 1 segundo
  })
}

export default function DatosPersonales() {
  const [datos, setDatos] = useState({
    username: "juanperez",
    password: "contraseña123",
    email: "juan@example.com",
    phone: "123-456-7890"
  })
  const [verificado, setVerificado] = useState<boolean | null>(null)
  const [cargando, setCargando] = useState(false)
  const [mostrarContraseña, setMostrarContraseña] = useState(false)

  const handleVerificar = async () => {
    setCargando(true)
    const esValido = await verificarDatos({
      username: datos.username,
      email: datos.email,
      phone: datos.phone
    })
    setVerificado(esValido)
    setCargando(false)
  }

  const toggleMostrarContraseña = () => {
    setMostrarContraseña(!mostrarContraseña)
  }

>>>>>>> 6175b978474f0793c5ccb5c1f8619462d2370b30
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Datos Personales</CardTitle>
        <CardDescription>Información verificable del usuario</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="username">Nombre de Usuario</Label>
            <Input id="username" value={datos.username} readOnly />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="password">Contraseña</Label>
            <div className="relative">
              <Input
                id="password"
                type={mostrarContraseña ? "text" : "password"}
                value={datos.password}
                readOnly
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-0 top-0"
                onClick={toggleMostrarContraseña}
              >
                {mostrarContraseña ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                <span className="sr-only">
                  {mostrarContraseña ? "Ocultar contraseña" : "Mostrar contraseña"}
                </span>
              </Button>
            </div>
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="email">Correo Electrónico</Label>
            <Input id="email" type="email" value={datos.email} readOnly />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="phone">Teléfono</Label>
            <Input id="phone" type="tel" value={datos.phone} readOnly />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-center">
        <Button onClick={handleVerificar} disabled={cargando}>
          {cargando ? "Verificando..." : "Verificar Datos"}
        </Button>
        {verificado !== null && !cargando && (
          <div className="mt-2 flex items-center">
            {verificado ? (
              <>
                <CheckCircle className="mr-2 h-4 w-4 text-green-500" />
                <span className="text-green-500">Datos verificados</span>
              </>
            ) : (
              <>
                <XCircle className="mr-2 h-4 w-4 text-red-500" />
                <span className="text-red-500">Verificación fallida</span>
              </>
            )}
          </div>
        )}
      </CardFooter>
    </Card>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 6175b978474f0793c5ccb5c1f8619462d2370b30
}
