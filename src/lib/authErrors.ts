import { FirebaseError } from "firebase/app";

export type AuthMode = "login" | "signup";

/**
 * Convierte un error de Firebase Authentication en un mensaje claro en español
 * para mostrarlo al usuario en el formulario de inicio de sesión o de registro.
 */
export function getAuthErrorMessage(error: unknown, mode: AuthMode): string {
  if (!(error instanceof FirebaseError)) {
    return "Ocurrió un error inesperado. Inténtalo de nuevo.";
  }

  switch (error.code) {
    // --- Inicio de sesión ---
    // Con la protección contra enumeración de correos (activa por defecto en
    // proyectos nuevos), Firebase devuelve este código tanto si la contraseña
    // es incorrecta como si el usuario no existe.
    case "auth/invalid-credential":
    case "auth/invalid-login-credentials":
    case "auth/wrong-password":
      return "Correo o contraseña incorrectos.";
    case "auth/user-not-found":
      return "No existe una cuenta con ese correo.";
    case "auth/user-disabled":
      return "Esta cuenta ha sido deshabilitada.";

    // --- Registro ---
    case "auth/email-already-in-use":
      return "Ya existe una cuenta con ese correo. Intenta iniciar sesión.";
    case "auth/weak-password":
      return "La contraseña es muy débil. Usa al menos 6 caracteres.";
    case "auth/operation-not-allowed":
      return "El registro con correo y contraseña no está habilitado en Firebase.";

    // --- Comunes ---
    case "auth/invalid-email":
      return "El correo electrónico no es válido.";
    case "auth/missing-password":
      return "Ingresa tu contraseña.";
    case "auth/too-many-requests":
      return "Demasiados intentos. Espera unos minutos e inténtalo de nuevo.";
    case "auth/network-request-failed":
      return "No hay conexión. Revisa tu internet e inténtalo de nuevo.";
    case "auth/invalid-api-key":
    case "auth/api-key-not-valid.-please-pass-a-valid-api-key.":
      return "La configuración de Firebase no es válida. Revisa las claves del proyecto.";

    default:
      return mode === "signup"
        ? "No se pudo crear la cuenta. Inténtalo de nuevo."
        : "No se pudo iniciar sesión. Inténtalo de nuevo.";
  }
}
