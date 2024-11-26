import { PrismaClient } from "@prisma/client"

(async () => {
    try {
        const db = new PrismaClient()
        await db.$connect()

        // Crear varias viviendas
        await db.viviendas.createMany({
            data: [
                { direccion: "Recoleta", locatario: "María", precioDeAlquiler: 25000, descripcion: "Cabaña con vista al rio" },
                { direccion: "Belgrano", locatario: "Carlos", precioDeAlquiler: 22000, descripcion:"hermosa casa en el centro"},
                { direccion: "Villa Crespo", locatario: "Lucía", precioDeAlquiler: 18000,descripcion:"hermoso y lindo" },
                { direccion: "San Telmo", locatario: "Fernando", precioDeAlquiler: 23000,descripcion:"bonita cabaña" },
                { direccion: "Caballito", locatario: "Ana", precioDeAlquiler: 21000,descripcion:"casa con vista al mar" }
            ]
        })

        console.log("Viviendas creadas exitosamente")
        await db.$disconnect()
    } catch (error) {
        console.log("No se pudieron crear las viviendas")
        console.table(error)
    }
})()
