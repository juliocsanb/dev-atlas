"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
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
  const [isLoading, setIsLoading] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const labelClass =
    "block font-label-ui text-label-ui text-on-surface-variant font-medium";
  const inputClass =
    "w-full pl-10 pr-3.5 py-2.5 bg-surface-container-lowest border border-outline-variant/50 rounded-lg text-on-surface placeholder-outline font-code-inline text-code-inline focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors";

  async function sendForm(event: React.FormEvent<HTMLFormElement>) {
    setError("");
    event.preventDefault();
    if (esRegistro && password !== confirmPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    } else if (password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    setIsLoading(true);

    try {
      if (esRegistro) {
        const resultado = await createUserWithEmailAndPassword(
          firebaseAuth,
          email.trim(),
          password,
        );
        await updateProfile(resultado.user, {
          displayName: name.trim(),
        });
        setSignupSuccess(true);
      } else {
        await signInWithEmailAndPassword(firebaseAuth, email.trim(), password);
        setLoginSuccess(true);
        setTimeout(() => {
          router.push("/dashboard");
        }, 1600);
      }
    } catch (error) {
      console.log("Error de Firebase Auth: ", error);
      setError(
        esRegistro
          ? "No se pudo crear la cuenta. Revisa los datos o el correo."
          : "No se pudo iniciar sesión. Revisa tus credenciales.",
      );
    } finally {
      setIsLoading(false);
    }

    console.log({
      modo: mode,
      name: esRegistro ? name : undefined,
      email: email,
      password: password,
    });
  }

  if (signupSuccess) {
    return (
      <div
        className="animate-auth-pop bg-surface-container-lowest border border-tertiary/40 flex flex-col gap-4 h-[286px] items-center justify-center overflow-hidden p-6 relative rounded-lg w-full text-center"
        data-node-id="2:786"
      >
        <div
          className="relative shrink-0 size-16 flex items-center justify-center rounded-full bg-tertiary/10 border border-tertiary/30"
          data-node-id="2:787"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4edea3"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <div
          className="flex flex-col gap-2.5 items-center text-center w-full"
          data-node-id="2:790"
        >
          <h2
            className="font-headline-sm text-[20px] leading-[28px] font-semibold text-on-surface w-full"
            data-node-id="2:791"
          >
            ¡Cuenta creada correctamente!
          </h2>
          <p
            className="font-body-sm text-[13px] leading-[20px] text-on-surface-variant w-full"
            data-node-id="2:792"
          >
            Tu perfil ha sido registrado en DevAtlas. Ya puedes iniciar sesión
            con tus credenciales.
          </p>
        </div>
        <Link
          href="/login"
          className="bg-primary-container hover:bg-primary-container/90 flex gap-2.5 h-12 items-center justify-center px-4 rounded-lg w-full text-on-primary font-label-ui text-[12px] font-semibold transition-all duration-150 active:scale-[0.98]"
          data-node-id="2:793"
        >
          <span>Ir a Iniciar sesión</span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
            <polyline points="10 17 15 12 10 7" />
            <line x1="15" x2="3" y1="12" y2="12" />
          </svg>
        </Link>
      </div>
    );
  }

  if (loginSuccess) {
    return (
      <div
        className="animate-auth-pop bg-surface-container-lowest border border-tertiary/40 flex flex-col gap-4 h-[286px] items-center justify-center overflow-hidden p-6 relative rounded-lg w-full text-center"
        data-node-id="2:742"
      >
        <div
          className="relative shrink-0 size-16 flex items-center justify-center my-2"
          data-node-id="2:743"
        >
          <span
            className="absolute -inset-[10px] rounded-full border border-tertiary/25 animate-auth-ring"
            data-node-id="2:744"
          />
          <span
            className="absolute -inset-[19px] rounded-full border border-tertiary/15 animate-auth-ring"
            style={{ animationDelay: "0.45s" }}
            data-node-id="2:745"
          />
          <div
            className="relative size-16 rounded-full bg-tertiary/15 border border-tertiary flex items-center justify-center"
            data-node-id="2:746"
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4edea3"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <polyline points="16 11 18 13 22 9" />
            </svg>
          </div>
        </div>
        <div
          className="flex flex-col gap-3 items-center pt-2 text-center w-full"
          data-node-id="2:748"
        >
          <h2
            className="font-headline-sm text-[20px] leading-[28px] font-semibold text-on-surface w-full"
            data-node-id="2:749"
          >
            Inicio de sesión correcto
          </h2>
          <p
            className="font-label-code text-[12px] leading-[20px] font-medium text-tertiary tracking-[0.04em] uppercase w-full"
            data-node-id="2:750"
          >
            REDIRIGIENDO AL PANEL DE CONTROL...
          </p>
        </div>
        <div
          className="bg-tertiary/10 flex flex-col h-1 items-start overflow-hidden relative rounded-full w-full mt-1"
          data-node-id="2:751"
        >
          <div
            className="bg-gradient-to-r from-tertiary to-secondary h-1 rounded-full animate-auth-progress"
            data-node-id="2:752"
          />
        </div>
      </div>
    );
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
      <div className="pt-2 space-y-4">
        {error && (
          <p role="alert" className="text-error text-sm">
            {error}
          </p>
        )}
        <button
          className="w-full h-12 flex items-center justify-center gap-2.5 bg-primary-container hover:bg-primary-container/90 disabled:opacity-90 cursor-pointer text-on-primary font-label-ui text-[12px] font-semibold px-4 rounded-lg shadow-sm transition-all duration-150 active:scale-[0.98] border border-white/10"
          type="submit"
          disabled={isLoading}
          data-node-id="2:703"
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin size-5 text-on-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
              <span>Procesando...</span>
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
        {isLoading && (
          <div
            className="flex gap-2 items-center justify-center w-full animate-pulse"
            data-node-id="2:706"
          >
            <span
              className="size-[5px] rounded-full bg-primary shrink-0"
              data-node-id="2:707"
            />
            <span
              className="font-body-sm text-[13px] text-on-surface-variant"
              data-node-id="2:708"
            >
              Validando credenciales
            </span>
          </div>
        )}
      </div>
    </form>
  );
}
