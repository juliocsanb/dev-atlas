"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { firebaseAuth } from "@/lib/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

type AuthFormProps = { mode: "login" | "signup" };

export default function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter();
  const esRegistro = mode === "signup";

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [toast, setToast] = useState("");
  const [loading, setLoading] = useState(false);

  const labelClass =
    "block font-label-ui text-label-ui text-on-surface-variant font-medium";
  const inputClass =
    "w-full pl-10 pr-3.5 py-2.5 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface placeholder-outline font-code-inline text-code-inline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors";

  async function sendForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setToast("");

    if (esRegistro && password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setLoading(true);

    try {
      if (esRegistro) {
        const resultado = await createUserWithEmailAndPassword(
          firebaseAuth,
          email.trim(),
          password
        );
        await updateProfile(resultado.user, {
          displayName: name.trim(),
        });
        setToast("¡Cuenta creada con éxito! Redirigiendo a DevAtlas...");
      } else {
        await signInWithEmailAndPassword(
          firebaseAuth,
          email.trim(),
          password
        );
        setToast("¡Inicio de sesión exitoso! Redirigiendo a DevAtlas...");
      }

      console.log({
        modo: mode,
        name: esRegistro ? name : undefined,
        email: email,
      });

      // 2.5 segundos de espera para capturar la evidencia cómodamente
      setTimeout(() => {
        router.push("/");
      }, 2500);

    } catch (err: any) {
      console.error("Error de Firebase Auth:", err);
      setLoading(false);

      if (err.code === "auth/email-already-in-use") {
        setError("Este correo ya está registrado. Intenta iniciar sesión.");
      } else if (
        err.code === "auth/wrong-password" ||
        err.code === "auth/invalid-credential" ||
        err.code === "auth/user-not-found"
      ) {
        setError("Correo o contraseña incorrectos.");
      } else if (err.code === "auth/weak-password") {
        setError("La contraseña debe tener al menos 6 caracteres.");
      } else {
        setError(
          esRegistro
            ? "No se pudo crear la cuenta. Revisa tus datos."
            : "No se pudo iniciar sesión. Revisa tus credenciales."
        );
      }
    }
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
            value={email}
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
              htmlFor="confirmPassword"
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
              id="confirmPassword"
              name="confirmPassword"
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
        </div>
      )}

      <div className="pt-2 space-y-3">
        {/* Toast de éxito con diseño destacado */}
        {toast && (
          <div
            role="status"
            className="flex items-center gap-2.5 p-3 rounded-lg bg-emerald-500/15 border border-emerald-500/40 text-emerald-400 font-label-ui text-label-ui font-medium shadow-sm animate-fade-in"
          >
            <span className="material-symbols-outlined text-[20px] text-emerald-400 shrink-0">
              check_circle
            </span>
            <span>{toast}</span>
          </div>
        )}

        {/* Mensaje de error visual */}
        {error && (
          <div
            role="alert"
            className="flex items-center gap-2.5 p-3 rounded-lg bg-red-500/15 border border-red-500/40 text-red-400 font-label-ui text-label-ui font-medium shadow-sm"
          >
            <span className="material-symbols-outlined text-[20px] text-red-400 shrink-0">
              error
            </span>
            <span>{error}</span>
          </div>
        )}

        <button
          className="w-full flex items-center justify-center gap-2 bg-primary text-on-primary font-label-ui text-label-ui font-semibold py-2.5 px-4 rounded-lg shadow-sm transition-all duration-150 active:scale-[0.98] border border-white/10 disabled:opacity-50 cursor-pointer"
          type="submit"
          disabled={loading}
        >
          <span>
            {loading
              ? "Procesando..."
              : esRegistro
              ? "Crear cuenta"
              : "Acceder a DevAtlas"}
          </span>
          <span className="material-symbols-outlined">
            {esRegistro ? "person_add" : "arrow_forward"}
          </span>
        </button>
      </div>
    </form>
  );
}