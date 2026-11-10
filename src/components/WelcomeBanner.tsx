"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { onAuthStateChanged, type User } from "firebase/auth";
import { firebaseAuth } from "@/lib/firebaseConfig";

export default function WelcomeBanner() {
  const searchParams = useSearchParams();
  const bienvenida = searchParams.get("bienvenida");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  if (!bienvenida) {
    return null;
  }

  const nombreMostrado = user?.displayName || user?.email || "desarrollador";
  const esCuentaNueva = bienvenida === "cuenta";

  return (
    <div className="w-full max-w-[1440px] mx-auto px-margin pt-6 relative z-10">
      <div className="flex items-start gap-3 bg-tertiary-container/20 border border-tertiary/40 rounded-xl px-5 py-4">
        <span className="material-symbols-outlined text-tertiary mt-0.5">
          check_circle
        </span>
        <div>
          <p className="font-body-md text-body-md text-on-surface font-semibold">
            {esCuentaNueva
              ? "¡Cuenta creada exitosamente!"
              : "¡Bienvenido de nuevo!"}
          </p>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
            {esCuentaNueva
              ? `Bienvenido a DevAtlas, ${nombreMostrado}. Ya puedes explorar la plataforma.`
              : `Qué bueno verte de nuevo, ${nombreMostrado}.`}
          </p>
        </div>
      </div>
    </div>
  );
}
