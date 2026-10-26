"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showPass, setShowPass] = useState(false);
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-12 textn-on-surface">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl " />
      <div className="relative z-10 w-full max-w-md">
        <Link href="/" className="mb-10 flex items-center justify-center gap-3">
          <span className="material-symbols-outlined text-4xl text-primary">
            Terminal
          </span>
          <span className="font-mono text2xl font-bold tracking-tight">
            Dev<span className="text-primary ">Atlas</span>
          </span>
        </Link>
        <div className="rounded-2xl border border-outline-variant/20 bg-surface-container p-8 shadow-2xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-light">
              Bienvenido de nuevo
            </h1>
            <p className="mt-3 text-sm text-on-surface-variant">
              Inicia sesión para continuar explorando DevAtlas.
            </p>
          </div>
          <form className="space-y-5">
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                placeholder="ejemplo@correo.com"
                autoComplete="email"
                required
                className="w-full rounded-lg border-outline-variant/30 bg-background px-4 py-3 text-sm text-on-surface-outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
              />
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium">
                  Contraseña
                </label>
                <Link href="#" className="text-xs text-primary hover:underline">
                  ¿Olvidaste tu contraseña?
                </Link>
              </div>
              <div className="relative rounded-lg">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
                  <span className="material-symbols-outlined">lock</span>
                </div>
                <input
                  id="password"
                  type={showPass ? "text" : "password"}
                  placeholder="**********"
                  autoComplete="current-password"
                  required
                  className="w-full pl-10 pr-10 py-2.5 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface placeholder-outline font-code-inline text-code-inline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
                <button
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-outline hover:text-on-surface-variant focus: outline-none transition-colors"
                  type="button"
                  onClick={() => setShowPass((currentValue) => !currentValue)}
                >
                  <span className="material-symbols-outlined">
                    {showPass ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>
            <button
              type="submit"
              className="flext w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-semibold text-on-primary trasnistion hover:opacity-90"
            >
              Iniciar sesión
              <span className="material-symbols-outlined text-xl">
                arrow_forward
              </span>
            </button>
          </form>
        </div>
        <p className="mt-8 text-center text-xs text-on-surface-vaiante">
          {new Date().getFullYear()} DevAtlas
        </p>
      </div>
    </main>
  );
}
