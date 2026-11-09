"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut, User } from "firebase/auth";
import { firebaseAuth } from "@/lib/firebaseConfig";

export default function DashboardPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (!currentUser) {
        router.push("/login");
      } else {
        setUser(currentUser);
        setLoading(false);
      }
    });
    return () => unsubscribe();
  }, [router]);

  async function handleLogout() {
    await signOut(firebaseAuth);
    router.push("/");
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <span className="material-symbols-outlined animate-spin text-primary text-4xl">
          progress_activity
        </span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-on-surface relative flex flex-col">
      <div className="absolute top-6 right-6 md:top-8 md:right-8">
        <button
          onClick={handleLogout}
          className="inline-flex items-center gap-2 text-error hover:text-error-container hover:bg-error-container/10 transition-colors font-label-ui px-4 py-2 rounded-lg border border-error/20 shadow-sm"
        >
          <span className="material-symbols-outlined text-[18px]">logout</span>
          <span>Cerrar sesión</span>
        </button>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <div className="w-16 h-16 rounded-xl bg-surface-container-low border border-outline-variant/40 flex items-center justify-center text-primary mb-6 shadow-sm">
          <span className="material-symbols-outlined text-3xl">waving_hand</span>
        </div>
        <h1 className="font-headline-xl text-headline-xl text-on-surface font-semibold tracking-tight">
          Bienvenido {user?.displayName || "Desarrollador"}, iniciaste sesión en devatlas
        </h1>
        <p className="text-body-md font-body-md text-outline mt-2">
          {user?.email}
        </p>
      </div>
    </div>
  );
}