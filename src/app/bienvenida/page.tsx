"use client";

import { signOut } from "firebase/auth";
import { useState } from "react";

export default function BienvenidaPage() {
  const [error, setError] = useState("");

  async function cerrarSesion() {
    setError("");

    try {
      const { firebaseAuth } = await import("@/lib/firebaseConfig");
      await signOut(firebaseAuth);
      window.location.href = "/";
    } catch {
      setError("No se pudo cerrar sesión. Intenta de nuevo.");
    }
  }

  return (
    <main className="grid min-h-screen grid-rows-[auto_1fr] bg-background px-6 py-5">
      <header className="text-right">
        <button
          type="button"
          onClick={cerrarSesion}
          className="cursor-pointer rounded-lg border border-outline-variant bg-surface-container-low px-3.5 py-2 text-sm font-medium text-primary transition-colors hover:bg-surface-container-high focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Cerrar sesión
        </button>
        <p role="alert" className="mt-2 text-sm text-error">
          {error}
        </p>
      </header>
      <div className="my-8 w-full max-w-xl place-self-center rounded-2xl border border-outline-variant/40 bg-surface-container-low px-6 py-12 text-center shadow-xl sm:py-16">
        <span
          aria-hidden="true"
          className="material-symbols-outlined mb-5 rounded-xl bg-primary/10 p-3 text-primary"
        >
          terminal
        </span>
        <h1 className="font-display-hero text-3xl font-bold tracking-tight text-primary sm:text-6xl">
          ¡BIENVENIDO!
        </h1>
        <p className="mt-3 text-on-surface-variant">DevAtlas</p>
      </div>
    </main>
  );
}
