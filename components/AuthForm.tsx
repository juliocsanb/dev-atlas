"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { firebaseAuth } from "@/lib/firebaseConfig";
import { getAuthErrorMessage, type AuthMode } from "@/lib/authErrors";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

type AuthFormProps = { mode: AuthMode };

// Qué se muestra: el formulario o una de las dos pantallas de éxito.
type View = "form" | "signup-success" | "login-success";

// Tiempo (en milisegundos) que se muestra cada pantalla de éxito antes de redirigir.
const SIGNUP_REDIRECT_MS = 2500;
const LOGIN_REDIRECT_MS = 2000;

// Formato básico de correo: algo@algo.algo, sin espacios.
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 6;

export default function AuthForm({ mode }: AuthFormProps) {
  const esRegistro = mode === "signup";
  const router = useRouter();
  const [view, setView] = useState<View>("form");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const labelClass =
    "block font-label-ui text-label-ui text-on-surface-variant font-medium";
  const inputClass =
    "w-full pl-10 pr-3.5 py-2.5 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface placeholder-outline font-code-inline text-code-inline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors disabled:opacity-60";
  const passwordInputClass = inputClass.replace("pr-3.5", "pr-10");

  /** Revisa los datos antes de llamar a Firebase. Devuelve un mensaje si algo está mal. */
  function validate(cleanName: string, cleanEmail: string): string | null {
    if (esRegistro && !cleanName) return "Ingresa tu nombre.";
    if (!cleanEmail) return "Ingresa tu correo electrónico.";
    if (!EMAIL_REGEX.test(cleanEmail))
      return "El correo electrónico no tiene un formato válido.";
    if (!password) return "Ingresa tu contraseña.";
    if (password.length < MIN_PASSWORD_LENGTH)
      return `La contraseña debe tener al menos ${MIN_PASSWORD_LENGTH} caracteres.`;
    if (esRegistro && password !== confirmPassword)
      return "Las contraseñas no coinciden.";
    return null;
  }

  async function sendForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return; // Ya hay un envío en curso.

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const validationError = validate(cleanName, cleanEmail);
    if (validationError) {
      setError(validationError);
      return;
    }

    setError("");
    setLoading(true);

    try {
      if (esRegistro) {
        const resultado = await createUserWithEmailAndPassword(
          firebaseAuth,
          cleanEmail,
          password,
        );
        try {
          await updateProfile(resultado.user, { displayName: cleanName });
        } catch (profileError) {
          // La cuenta ya existe; si falla guardar el nombre no bloqueamos el registro.
          console.warn("No se pudo guardar el nombre:", profileError);
        }
        // Firebase inicia sesión automáticamente al crear la cuenta. La cerramos
        // para que el usuario entre desde /login con sus nuevas credenciales.
        await signOut(firebaseAuth);

        setView("signup-success");
        setTimeout(() => router.push("/login"), SIGNUP_REDIRECT_MS);
      } else {
        await signInWithEmailAndPassword(firebaseAuth, cleanEmail, password);

        setView("login-success");
        setTimeout(() => router.push("/dashboard"), LOGIN_REDIRECT_MS);
      }
    } catch (firebaseError) {
      console.error("Error de Firebase Auth:", firebaseError);
      setError(getAuthErrorMessage(firebaseError, mode));
      setLoading(false);
    }
  }

  if (view === "signup-success") {
    return (
      <div className="auth-fade-in flex flex-col items-center text-center py-4">
        <div className="auth-pop w-20 h-20 mb-6 rounded-full bg-tertiary-container/20 border border-tertiary/50 flex items-center justify-center text-tertiary">
          <span className="material-symbols-outlined text-[40px]">how_to_reg</span>
        </div>
        <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
          ¡Cuenta creada correctamente!
        </h2>
      </div>
    );
  }

  if (view === "login-success") {
    return (
      <div className="auth-fade-in flex flex-col items-center text-center py-4">
        <div className="relative w-20 h-20 mb-6">
          <span className="auth-ring absolute inset-0 rounded-full border-2 border-tertiary/60"></span>
          <div className="auth-pop relative w-20 h-20 rounded-full bg-tertiary-container/20 border border-tertiary/50 flex items-center justify-center text-tertiary">
            <span className="material-symbols-outlined text-[40px]">check</span>
          </div>
        </div>
        <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-6">
          Inicio de sesión correcto
        </h2>
        <div className="w-full h-1.5 rounded-full bg-surface-container-high overflow-hidden">
          <div className="auth-progress h-full rounded-full bg-tertiary"></div>
        </div>
      </div>
    );
  }

  return (
    <form className="space-y-4" onSubmit={sendForm} noValidate>
      {esRegistro && (
        <div className="space-y-1.5">
          <label htmlFor="nombre" className={labelClass}>
            Nombre completo
          </label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline pointer-events-none">
              person
            </span>
            <input
              id="nombre"
              name="nombre"
              type="text"
              autoComplete="name"
              placeholder="Tu nombre completo"
              className={inputClass}
              value={name}
              disabled={loading}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
      )}
      <div className="space-y-1.5">
        <label className={labelClass} htmlFor="email">
          Correo electrónico
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
            type="email"
            autoComplete="email"
            value={email}
            disabled={loading}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <div className="flex items-center justify-between">
          <label className={labelClass} htmlFor="password">
            Contraseña
          </label>
          {!esRegistro && (
            <Link
              className="font-label-ui text-label-ui text-primary hover:text-primary-fixed transition-colors underline-offset-2 hover:underline"
              href="#"
            >
              Recuperar contraseña
            </Link>
          )}
        </div>
        <div className="relative rounded-lg">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
            <span className="material-symbols-outlined">lock</span>
          </div>
          <input
            className={passwordInputClass}
            id="password"
            name="password"
            placeholder="••••••••••••"
            type={showPassword ? "text" : "password"}
            autoComplete={esRegistro ? "new-password" : "current-password"}
            value={password}
            disabled={loading}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-outline hover:text-on-surface-variant focus:outline-none transition-colors"
            type="button"
            aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
            onClick={() => setShowPassword((currentValue) => !currentValue)}
          >
            <span className="material-symbols-outlined">
              {showPassword ? "visibility_off" : "visibility"}
            </span>
          </button>
        </div>
        {esRegistro && (
          <p className="font-label-ui text-label-ui text-outline">
            Mínimo {MIN_PASSWORD_LENGTH} caracteres.
          </p>
        )}
      </div>
      {esRegistro && (
        <div className="space-y-1.5">
          <label className={labelClass} htmlFor="confirmPassword">
            Confirmar contraseña
          </label>
          <div className="relative rounded-lg">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-outline">
              <span className="material-symbols-outlined">lock</span>
            </div>
            <input
              className={passwordInputClass}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="••••••••••••"
              type={showConfirmPassword ? "text" : "password"}
              autoComplete="new-password"
              value={confirmPassword}
              disabled={loading}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-outline hover:text-on-surface-variant focus:outline-none transition-colors"
              type="button"
              aria-label={
                showConfirmPassword ? "Ocultar contraseña" : "Mostrar contraseña"
              }
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
        {error && (
          <div
            role="alert"
            className="auth-fade-in flex items-start gap-2 rounded-lg border border-error/30 bg-error-container/20 px-3 py-2 text-error font-body-sm text-body-sm"
          >
            <span className="material-symbols-outlined text-[18px]">error</span>
            <span>{error}</span>
          </div>
        )}
        <button
          className="w-full flex items-center justify-center gap-2 bg-primary-container cursor-pointer text-on-primary font-label-ui text-label-ui font-semibold py-2.5 px-4 rounded-lg shadow-sm transition-all duration-150 active:scale-[0.98] border border-white/10 hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
          type="submit"
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? (
            <>
              <span
                className="w-4 h-4 rounded-full border-2 border-on-primary/30 border-t-on-primary motion-safe:animate-spin"
                aria-hidden="true"
              ></span>
              <span>Validando credenciales...</span>
            </>
          ) : (
            <>
              <span>{esRegistro ? "Crear cuenta" : "Acceder a DevAtlas"}</span>
              <span className="material-symbols-outlined">
                {esRegistro ? "person_add" : "arrow_forward"}
              </span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
