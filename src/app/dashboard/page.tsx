"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { firebaseAuth } from "@/lib/firebaseConfig";
import { onAuthStateChanged, signOut, User } from "firebase/auth";

export default function DashboardPage() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        router.push("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [router]);

  async function handleSignOut() {
    await signOut(firebaseAuth);
    router.push("/login");
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b0f19] flex items-center justify-center text-slate-400">
        <span className="material-symbols-outlined animate-spin text-3xl text-indigo-400">
          progress_activity
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col">
      {/* Encabezado */}
      <header className="border-b border-slate-800/80 bg-[#111827]/60 backdrop-blur-md px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold">
            DA
          </div>
          <div>
            <h1 className="font-bold text-lg leading-none tracking-tight text-white">
              DevAtlas
            </h1>
            <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Sesión activa:{" "}
              <strong className="text-indigo-300 font-medium">
                {user?.displayName || user?.email}
              </strong>
            </p>
          </div>
        </div>

        <button
          onClick={handleSignOut}
          className="flex items-center gap-2 px-3.5 py-2 text-xs font-medium text-red-400 bg-red-950/30 border border-red-900/50 rounded-lg hover:bg-red-900/40 hover:text-red-300 transition-all duration-150 active:scale-[0.97]"
        >
          <span className="material-symbols-outlined text-sm">logout</span>
          Cerrar sesión
        </button>
      </header>

      {/* Contenido Principal */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-6 md:p-8 flex items-center justify-center">
        <div className="w-full bg-[#1E1E24]/60 border border-slate-800/80 rounded-2xl p-8 md:p-10 shadow-xl backdrop-blur-sm text-center space-y-4 relative overflow-hidden">
          {/* Resplandor decorativo de fondo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="w-14 h-14 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl text-indigo-400 mx-auto flex items-center justify-center">
            <span className="material-symbols-outlined text-3xl">task_alt</span>
          </div>

          <div className="space-y-2 relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold text-white tracking-tight">
              ¡Has ingresado a DevAtlas!
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto">
              Bienvenido/a,{" "}
              <span className="text-indigo-300 font-medium">
                {user?.displayName || user?.email}
              </span>
              . Tu cuenta ha sido autenticada correctamente y ya tienes acceso a
              la plataforma.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
