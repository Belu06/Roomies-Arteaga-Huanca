import { PrismaClient } from "@prisma/client"
(async () => {
    try {
const db = new PrismaClient()
await db.$connect()
await db.viviendas.create({data:{
    direccion:"palermo",locatario:"Roberto",precioDeAlquiler:"20.000"
}})
await db.$disconnect()
    } catch (error) {
        console.log("no se pudo crear las viviendas")
    }
})()