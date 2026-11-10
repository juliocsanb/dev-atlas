"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { onAuthStateChanged, signOut, type User } from "firebase/auth";
import { firebaseAuth } from "@/lib/firebaseConfig";

export default function SiteHeader() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [listo, setListo] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(firebaseAuth, (currentUser) => {
      setUser(currentUser);
      setListo(true);
    });
    return () => unsubscribe();
  }, []);

  async function cerrarSesion() {
    await signOut(firebaseAuth);
    router.push("/");
  }

  const nombreMostrado = user?.displayName || user?.email || "";
  const inicial = nombreMostrado.charAt(0).toUpperCase();

  return (
    <header className="docked full-width top-0 sticky z-50 bg-surface-dim/80 dark:bg-surface-dim/80 backdrop-blur-md border-b border-outline-variant/30 dark:border-outline-variant/30 shadow-sm dark:shadow-none">
      <div className="w-full max-w-[1440px] mx-auto px-margin flex items-center justify-between h-16">
        {/* Logo + Brand Anchor */}
        <div className="flex items-center gap-space-lg">
          <a className="flex items-center gap-space-sm group" href="#">
            <img
              alt="DevAtlas Logo"
              className="h-8 w-auto object-contain transition-opacity group-hover:opacity-90"
              src="https://lh3.googleusercontent.com/aida/AEtjO1W1Tw-x1O40sqPh9vuv_QWbM4Ammun6q4_B3PD_mnhfxrWJg6YdH1-oKm6wnXSqbDi7tZ1D6lSjjw8UlJTdhqGwvNUZtnmv9aiTM_v6Fa_mC2izX4NAhHJI3YrrQp412k6fIs-YeqLFspefXGiH5fNv3gHerDZxV1Rue29-6yUfPNMfrdo9bRmskFaOUIjyB5Ae4ex_FRORdO2gMtjYj7l2Sr0LtXLGoYVAQK2h0GTi"
            />
          </a>
          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-space-lg">
            <a
              className="text-primary dark:text-primary font-medium border-b-2 border-primary dark:border-primary pb-1 text-label-ui font-label-ui transition-colors"
              href="#"
            >
              Inicio
            </a>
            <a
              className="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface font-normal transition-colors text-label-ui font-label-ui"
              href="#lenguajes"
            >
              Lenguajes
            </a>
            <a
              className="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface font-normal transition-colors text-label-ui font-label-ui"
              href="#categorias"
            >
              Categorías
            </a>
            <a
              className="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface font-normal transition-colors text-label-ui font-label-ui"
              href="#comparar"
            >
              Comparar
            </a>
            <a
              className="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface font-normal transition-colors text-label-ui font-label-ui"
              href="#filosofia"
            >
              Acerca de
            </a>
          </nav>
        </div>
        {/* Right cluster: Fast Search & Trailing Actions */}
        <div className="flex items-center gap-space-md">
          {/* Search Bar with Kbd */}
          <div className="hidden sm:flex items-center bg-surface-container-lowest border border-outline-variant/40 rounded-lg px-3 py-1.5 gap-2 text-on-surface-variant focus-within:border-primary transition-colors cursor-pointer group">
            <span className="material-symbols-outlined text-[18px] text-outline">
              search
            </span>
            <span className="text-body-sm font-body-sm text-outline pr-4">
              Buscar lenguajes...
            </span>
            <kbd className="text-label-code font-label-code bg-surface-container px-1.5 py-0.5 rounded border border-outline-variant/50 text-on-surface-variant text-[10px]">
              Ctrl+K
            </kbd>
          </div>
          {/* Trailing Terminal Icon Action */}
          <button
            aria-label="Terminal interactivo"
            className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50 rounded-lg transition-colors duration-150"
            type="button"
          >
            <span className="material-symbols-outlined text-[20px]">
              terminal
            </span>
          </button>

          {/* Trailing Primary Action: sesión activa vs. invitado */}
          {listo && user ? (
            <div className="flex items-center gap-2 bg-surface-container border border-outline-variant/50 pl-1.5 pr-1.5 py-1 rounded-lg">
              <div className="w-7 h-7 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center text-label-ui font-label-ui font-semibold shrink-0">
                {inicial || "?"}
              </div>
              <span className="text-on-surface text-label-ui font-label-ui font-medium max-w-[140px] truncate">
                {nombreMostrado}
              </span>
              <button
                aria-label="Cerrar sesión"
                className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container-high/50 rounded-md transition-colors duration-150"
                onClick={cerrarSesion}
                type="button"
              >
                <span className="material-symbols-outlined text-[18px]">
                  logout
                </span>
              </button>
            </div>
          ) : (
            <a
              className="bg-surface-container border border-outline-variant/50 hover:border-primary/50 text-on-surface hover:text-primary px-3.5 py-1.5 rounded-lg text-label-ui font-label-ui transition-all duration-150 ease-out active:scale-[0.98] flex items-center gap-1.5"
              href="/login"
            >
              <span className="material-symbols-outlined text-[16px]">
                login
              </span>
              <span>Iniciar sesión</span>
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
