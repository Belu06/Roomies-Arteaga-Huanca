import { PrismaClient } from "@prisma/client";

(async () => {
  try {
    const db = new PrismaClient();
    await db.$connect();
    await db.usuarios.create({
      data: {
        email: "beluh065@gmail.com",
        nombreCompleto: "Belen Huanca",
        numeroDeTelefono: "1128459271",
        contrasennia: "1234",
      },
    });
    await db.$disconnect();
  } catch (error) {
    console.log("no se pudieron crear los usuarios");
    console.table(error);
  }
})();
