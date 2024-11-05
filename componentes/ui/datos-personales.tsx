"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { CheckCircle, XCircle, Eye, EyeOff } from "lucide-react"

// Simulación de una función para obtener datos del usuario
const obtenerDatosUsuario = () => {
  // En una implementación real, esto sería una llamada a tu API
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        username: "usuario_ejemplo",
        email: "usuario@ejemplo.com",
        phone: "123-456-7890"
      })
    }, 1000)
  })
}

// Simulación de una función de verificación
const verificarDatos = (datos: {
  username: string,
  email: string,
  phone: string
}) => {
  return new Promise<boolean>((resolve) => {
    setTimeout(() => {
      const esValido = datos.email.includes('@') && datos.phone.replace(/\D/g, '').length >= 8
      resolve(esValido)
    }, 1000)
  })
}

export default function DatosPersonales() {
  const [datos, setDatos] = useState({
    username: "",
    email: "",
    phone: ""
  })
  const [verificado, setVerificado] = useState<boolean | null>(null)
  const [cargando, setCargando] = useState(true)
  const [verificando, setVerificando] = useState(false)

  useEffect(() => {
    obtenerDatosUsuario().then((datosUsuario: any) => {
      setDatos(datosUsuario)
      setCargando(false)
    })
  }, [])

  const handleVerificar = async () => {
    setVerificando(true)
    const esValido = await verificarDatos(datos)
    setVerificado(esValido)
    setVerificando(false)
  }

  if (cargando) {
    return <div>Cargando datos...</div>
  }

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
        <Button onClick={handleVerificar} disabled={verificando}>
          {verificando ? "Verificando..." : "Verificar Datos"}
        </Button>
        {verificado !== null && !verificando && (
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
  )
}