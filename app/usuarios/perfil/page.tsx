import DatosPersonales from "../components/perfil";

export default function DatosPersonalesPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Mis Datos Personales</h1>
      <DatosPersonales />
    </main>
  );
}
