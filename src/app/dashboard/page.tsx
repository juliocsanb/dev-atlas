"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { firebaseAuth } from "@/lib/firebaseConfig";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [checking, setChecking] = useState(true);
  const [signingOut, setSigningOut] = useState(false);

  useEffect(() => {
    // Firebase avisa cuando sabe si hay una sesión activa (o cuando cambia).
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setChecking(false);
      } else {
        router.replace("/login");
      }
    });
    // Dejamos de escuchar cuando el componente se desmonta.
    return unsubscribe;
  }, [router]);

  async function handleSignOut() {
    setSigningOut(true);
    try {
      await signOut(firebaseAuth);
      router.push("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
      setSigningOut(false);
    }
  }

  if (checking || !user) {
    return (
      <div className="bg-background text-on-surface min-h-screen flex items-center justify-center font-body-md antialiased">
        <div className="flex items-center gap-2 text-on-surface-variant font-label-ui text-label-ui">
          <span className="material-symbols-outlined animate-spin">
            progress_activity
          </span>
          <span>Cargando...</span>
        </div>
      </div>
    );
  }

  const displayName = user.displayName || user.email;

  return (
    <div className="bg-background text-on-surface min-h-screen flex flex-col font-body-md antialiased selection:bg-primary-container selection:text-on-primary-container relative">
      <div className="pointer-events-none fixed inset-0 overflow-hidden flex justify-center z-0">
        <div className="w-[720px] h-[360px] bg-primary/5 blur-[120px] rounded-full -top-32 absolute"></div>
      </div>
      <header className="w-full bg-surface-dim/80 backdrop-blur-md border-b border-outline-variant/30 sticky top-0 z-50">
        <div className="w-full max-w-[1440px] mx-auto px-margin flex items-center justify-between h-16">
          <Link
            className="flex items-center gap-space-sm group focus:outline-none"
            href="/"
          >
            <div className="w-8 h-8 rounded-lg bg-surface-container-high border border-outline-variant flex items-center justify-center text-primary group-hover:border-primary transition-colors duration-150">
              <span className="material-symbols-outlined">terminal</span>
            </div>
            <span className="font-headline-sm text-headline-sm font-semibold text-on-surface tracking-tight group-hover:text-primary transition-colors duration-150">
              DevAtlas
            </span>
          </Link>
        </div>
      </header>
      <main className="flex-1 flex items-center justify-center px-margin-mobile md:px-margin py-space-xl relative z-10">
        <div className="w-full max-w-[480px] bg-surface-container-low/90 backdrop-blur-xl border border-outline-variant/40 rounded-xl shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent"></div>
          <div className="p-6 md:p-8 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-surface-container border border-outline-variant text-secondary font-label-code text-label-code mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-tertiary animate-pulse"></span>
              <span>Sesión activa</span>
            </div>
            <h1 className="font-headline-md text-headline-md text-on-surface font-semibold tracking-tight mb-2">
              Hola, {displayName}
            </h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-[380px] leading-relaxed mb-6">
              Bienvenido a tu panel de DevAtlas.
            </p>
            <button
              className="w-full flex items-center justify-center gap-2 bg-primary-container cursor-pointer text-on-primary font-label-ui text-label-ui font-semibold py-2.5 px-4 rounded-lg shadow-sm transition-all duration-150 active:scale-[0.98] border border-white/10 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
              type="button"
              onClick={handleSignOut}
              disabled={signingOut}
            >
              <span>{signingOut ? "Cerrando sesión..." : "Cerrar sesión"}</span>
              <span className="material-symbols-outlined">logout</span>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
