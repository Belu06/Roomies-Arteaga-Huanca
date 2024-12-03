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
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      const esValido =
        datos.email.includes("@") && datos.phone.replace(/\D/g, "").length >= 8;
      resolve(esValido);
    }, 1000);
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

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-2">
          <CardTitle className="text-3xl font-bold text-center">
            Datos Personales
          </CardTitle>
          <CardDescription className="text-center text-lg">
            Información verificable del usuario
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-lg font-medium">
                Nombre de Usuario
              </Label>
              <Input
                id="username"
                value={datos.username}
                readOnly
                className="text-lg p-3"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password" className="text-lg font-medium">
                Contraseña
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={mostrarContraseña ? "text" : "password"}
                  value={datos.password}
                  readOnly
                  className="text-lg p-3"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-0 top-0 h-full"
                  onClick={toggleMostrarContraseña}
                >
                  {mostrarContraseña ? (
                    <EyeOff className="h-6 w-6" />
                  ) : (
                    <Eye className="h-6 w-6" />
                  )}
                  <span className="sr-only">
                    {mostrarContraseña
                      ? "Ocultar contraseña"
                      : "Mostrar contraseña"}
                  </span>
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-lg font-medium">
                Correo Electrónico
              </Label>
              <Input
                id="email"
                type="email"
                value={datos.email}
                readOnly
                className="text-lg p-3"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone" className="text-lg font-medium">
                Teléfono
              </Label>
              <Input
                id="phone"
                type="tel"
                value={datos.phone}
                readOnly
                className="text-lg p-3"
              />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col items-center space-y-4">
          <Button
            onClick={handleVerificar}
            disabled={cargando}
            className="w-full text-lg py-6"
          >
            {cargando ? "Verificando..." : "Verificar Datos"}
          </Button>
          {verificado !== null && !cargando && (
            <div className="flex items-center text-lg">
              {verificado ? (
                <>
                  <CheckCircle className="mr-2 h-6 w-6 text-green-500" />
                  <span className="text-green-500 font-medium">
                    Datos verificados
                  </span>
                </>
              ) : (
                <>
                  <XCircle className="mr-2 h-6 w-6 text-red-500" />
                  <span className="text-red-500 font-medium">
                    Verificación fallida
                  </span>
                </>
              )}
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
