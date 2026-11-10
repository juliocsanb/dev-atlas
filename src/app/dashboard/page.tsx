"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { firebaseAuth } from "@/lib/firebaseConfig";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const cancelar = onAuthStateChanged(firebaseAuth, (usuarioActual) => {
      if (!usuarioActual) {
        router.push("/login");
      } else {
        setUser(usuarioActual);
        setCargando(false);
      }
    });
    return () => cancelar();
  }, [router]);

  async function cerrarSesion() {
    await signOut(firebaseAuth);
    router.push("/login");
  }

  if (cargando) {
    return <p className="p-8 text-on-surface">Cargando...</p>;
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 bg-background text-on-surface">
      <h1 className="text-2xl font-semibold">
        Bienvenido, {user?.displayName || "Desarrollador"}
      </h1>
      <p>Iniciaste sesión correctamente.</p>
      <p className="text-outline">{user?.email}</p>
      <button
        onClick={cerrarSesion}
        className="px-4 py-2 rounded-lg border border-outline-variant/50 hover:bg-surface-container-low transition-colors"
      >
        Cerrar sesión
      </button>
    </main>
  );
}