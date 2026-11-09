"use client";

// Página de prueba: solo sirve para comprobar que el login funciona.
// Si hay sesión, muestra quién entró; si no, regresa a /login.

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { firebaseAuth } from "@/lib/firebaseConfig";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Firebase nos avisa si hay una sesión activa.
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.replace("/login");
      }
    });
    return unsubscribe;
  }, [router]);

  async function handleSignOut() {
    await signOut(firebaseAuth);
    router.push("/login");
  }

  if (!user) {
    return (
      <main className="min-h-screen flex items-center justify-center text-on-surface-variant font-label-ui text-label-ui">
        Cargando...
      </main>
    );
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-4 px-margin-mobile text-center">
      <h1 className="font-headline-md text-headline-md text-on-surface font-semibold">
        Hola, {user.displayName || user.email}
      </h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
        Iniciaste sesión correctamente.
      </p>
      <button
        className="bg-primary-container text-on-primary font-label-ui text-label-ui font-semibold py-2.5 px-6 rounded-lg cursor-pointer hover:opacity-90"
        type="button"
        onClick={handleSignOut}
      >
        Cerrar sesión
      </button>
    </main>
  );
}
