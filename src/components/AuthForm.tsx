"use client";

import Link from "next/link";
import { useState } from "react";

type AuthFormProps = { mode: "login" | "signup" };

export default function AuthForm({ mode }: AuthFormProps) {
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const esRegistro = mode === "signup";
  const [showPass, setShowPass] = useState(false);
  const lableClass =
    "block font-label-ui text-label-ui text-on-surface-variant font-medium";
  const inputClass =
    "w-full rounded-lg border-outline-variant/30 bg-background px-4 py-3 text-sm text-on-surface-outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20";
  return (
    <form className="space-y-4">
      {esRegistro && (
        <div className="space-y-1.5">
          <label htmlFor="nombre" className={lableClass}>
            Nombre completo
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outlined">
              person
            </span>
            <input
              id="nombre"
              name="nombre"
              type="text"
              autoComplete="name"
              required
              placeholder="Tu nombre completo"
              className={inputClass}
            />
          </div>
        </div>
      )}
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
          className={inputClass}
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

      {esRegistro && (
        <div>
          <div className="mb-2 flex items-center justify-between">
            <label htmlFor="password" className="text-sm font-medium">
              Confirmar contraseña
            </label>
          </div>
          <div className="relative rounded-lg">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
              <span className="material-symbols-outlined">lock</span>
            </div>
            <input
              id="password"
              type={showConfirmPass ? "text" : "password"}
              placeholder="**********"
              autoComplete="current-password"
              required
              className="w-full pl-10 pr-10 py-2.5 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface placeholder-outline font-code-inline text-code-inline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            />
            <button
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-outline hover:text-on-surface-variant focus: outline-none transition-colors"
              type="button"
              onClick={() =>
                setShowConfirmPass((currentValue) => !currentValue)
              }
            >
              <span className="material-symbols-outlined">
                {showConfirmPass ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>
        </div>
      )}
      <button
        type="submit"
        className="flext w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 font-semibold text-on-primary trasnistion hover:opacity-90"
      >
        <span> {esRegistro ? "Crear cuenta" : "Acceder a DevAtlas"}</span>
        <span className="material-symbols-outlined text-xl">arrow_forward</span>
      </button>
    </form>
  );
}
