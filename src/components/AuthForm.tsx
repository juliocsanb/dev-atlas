"use client";
import Link from "next/link";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { firebaseAuth } from "@/lib/firebaseConfig";

type AuthFormProps = { mode: "login" | "signup" };
export default function AuthForm({ mode }: AuthFormProps) {
  const esRegistro = mode === "signup";
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [emial, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [mostrarCuadroBienvenida, setMostrarCuadroBienvenida] = useState(false);

  const labelClass =
    "block font-label-ui text-label-ui text-on-surface-variant font-medium";
  const inputClass =
    "w-full pl-10 pr-3.5 py-2.5 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface placeholder-outline font-code-inline text-code-inline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors";

  async function sendForm(event: React.FormEvent<HTMLFormElement>) {
    setError("");
    event.preventDefault();
    if (esRegistro && password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    try {
      if (esRegistro) {
        const resultado = await createUserWithEmailAndPassword(
          firebaseAuth,
          emial.trim(),
          password,
        );
        await updateProfile(resultado.user, {
          displayName: name.trim(),
        });

        setMostrarCuadroBienvenida(true);
      }
    } catch (error) {
      console.log("Error de Firebase Auth: ", error);
      setError(
        esRegistro
          ? "No se pudo crear la cuenta. Revisa los datos o el correo electrónico"
          : "No se pudo iniciar sesión. Revsa tus credenciales.",
      );
    }

    console.log({
      modo: mode,
      nombre: esRegistro ? name : undefined,
      email: emial,
      password: password,
    });
  }

  return (
    <form className="space-y-4" onSubmit={sendForm}>
      {esRegistro && (
        <div className="space-y-1.5">
          <label htmlFor="nombre" className={labelClass}>
            Nombre completo
          </label>
          <div className="relative">
            <span
              className="material-symbols-outlined absolute 
                left-3 top-1/2 -translate-y-1/2 text-outline"
            >
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
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
      )}
      <div className="space-y-1.5">
        <label className={labelClass} htmlFor="email">
          Correo Electrónico
        </label>
        <div className="relative rounded-lg">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
            <span className="material-symbols-outlined">mail</span>
          </div>
          <input
            className={inputClass}
            id="email"
            name="email"
            placeholder="alex.dev@empresa.io"
            required
            type="email"
            value={emial}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label
            className="block font-label-ui text-label-ui text-on-surface-variant font-medium"
            htmlFor="password"
          >
            Contraseña
          </label>
          <Link
            className="font-label-ui text-label-ui text-primary hover:text-primary-fixed transition-colors underline-offset-2 hover:underline"
            href="#"
          >
            Recuperar contraseña
          </Link>
        </div>
        <div className="relative rounded-lg">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
            <span className="material-symbols-outlined">lock</span>
          </div>
          <input
            className="w-full pl-10 pr-10 py-2.5 bg-surface-container-lowest border border-outline-variant/50 
                      rounded-lg text-on-surface placeholder-outline font-code-inline text-code-inline focus:outline-none 
                      focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
            id="password"
            name="password"
            placeholder="••••••••••••"
            required
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-outline hover:text-on-surface-variant focus:outline-none transition-colors"
            type="button"
            onClick={() => setShowPassword((currentValue) => !currentValue)}
          >
            <span className="material-symbols-outlined">
              {showPassword ? "visibility_off" : "visibility"}
            </span>
          </button>
        </div>
      </div>
      {esRegistro && (
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label
              className="block font-label-ui text-label-ui text-on-surface-variant font-medium"
              htmlFor="password"
            >
              Confirmar contraseña
            </label>
          </div>
          <div className="relative rounded-lg">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
              <span className="material-symbols-outlined">lock</span>
            </div>
            <input
              className="w-full pl-10 pr-10 py-2.5 bg-surface-container-lowest border border-outline-variant/50 
                      rounded-lg text-on-surface placeholder-outline font-code-inline text-code-inline focus:outline-none 
                      focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              id="password"
              name="password"
              placeholder="••••••••••••"
              required
              type={showConfirmPassword ? "text" : "password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-outline hover:text-on-surface-variant focus:outline-none transition-colors"
              type="button"
              onClick={() =>
                setShowConfirmPassword((currentValue) => !currentValue)
              }
            >
              <span className="material-symbols-outlined">
                {showConfirmPassword ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>
        </div>
      )}
      {!esRegistro && (
        <div className="flex items-center justify-between pt-1">
          <label className="flex items-center gap-2 cursor-pointer select-none">
            <input
              className="w-4 h-4 rounded bg-surface-container-lowest border border-outline-variant/80 text-primary-container focus:ring-0 focus:ring-offset-0 checked:bg-primary-container checked:border-primary-container cursor-pointer transition-colors"
              id="remember"
              name="remember"
              type="checkbox"
            />
            <span className="font-label-ui text-label-ui text-on-surface-variant hover:text-on-surface transition-colors">
              Mantener sesión activa
            </span>
          </label>
          <span className="font-label-code text-label-code text-outline hidden sm:inline-block"></span>
        </div>
      )}
      <div className="pt-2">
        {error && (
          <p role="alert" className="text-error text-sm">
            {error}
          </p>
        )}
        <button
          className="cursor-pointer w-full flex items-center justify-center gap-2 bg-primary-container opacity-70 text-on-primary font-label-ui text-label-ui font-semibold py-2.5 px-4 rounded-lg shadow-sm transition-all duration-150 active:scale-[0.98] border border-white/10"
          type="submit"
          title="La autenticación se integrará después"
        >
          <span>{esRegistro ? "Crear cuenta" : "Acceder a DevAtlas"}</span>
          <span className="material-symbols-outlined">
            {esRegistro ? "person_add" : "arrow_forward"}
          </span>
        </button>
      </div>

      {mostrarCuadroBienvenida && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/70 z-50">
          <div className="bg-[#121824] border border-gray-800 p-8 rounded-xl max-w-md text-center shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-3">
              ¡BIENVENIDO !!!
            </h3>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Gracias por registrarte en{" "}
              <span className="font-semibold text-white">DevAtlas</span>, por
              favor <strong>inicia sesión</strong> con tu correo y contraseña
              para seguir navegando.
            </p>
            <div className="mt-6 pt-5 border-t border-outline-variant/20 text-center">
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                <Link
                  className="font-semibold text-primary hover:text-primary-fixed underline-offset-4 hover:underline transition-colors ml-1"
                  href={"/login"}
                  onClick={() => setMostrarCuadroBienvenida(false)}
                >
                  Iniciar sesión
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </form>
  );
}
