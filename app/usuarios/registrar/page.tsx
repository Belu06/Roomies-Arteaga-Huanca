"use client"

import { useState } from "react"
import React from 'react'
import { Button } from "@/componentes/ui/button"
import { Input } from "@/componentes/ui/input"
import { Label } from "@/componentes/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/componentes/ui/card"
import { Alert, AlertDescription } from "@/componentes/ui/alert"

export default function Page() {
 const [nombre, setNombre] = useState("")
 const [email, setEmail] = useState("")
 const [password, setPassword] = useState("")
 const [mensaje, setMensaje] = useState("")


 const manejarEnvio = (e: React.FormEvent) => {
   e.preventDefault()
   // Aquí iría la lógica para enviar los datos al servidor
   // Por ahora, solo mostraremos un mensaje de éxito
   setMensaje("Registro exitoso!")
   // Limpiamos los campos del formulario
   setNombre("")
   setEmail("")
   setPassword("")
 }

 return (
   <Card className="w-full max-w-md mx-auto">
     <CardHeader>
       <CardTitle>Registro</CardTitle>
       <CardDescription>Crea una nueva cuenta</CardDescription>
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
         <Button type="submit" className="w-full">Registrarse</Button>
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
 )
}
