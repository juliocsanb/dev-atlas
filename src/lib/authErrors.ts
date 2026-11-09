import { FirebaseError } from "firebase/app";

/**
 * Convierte un error de Firebase Authentication en un mensaje claro en español
 * para mostrarlo al usuario en el formulario de inicio de sesión.
 */
export function getLoginErrorMessage(error: unknown): string {
  if (!(error instanceof FirebaseError)) {
    return "Ocurrió un error inesperado. Inténtalo de nuevo.";
  }

  switch (error.code) {
    // Con la protección contra enumeración de correos (activa por defecto en
    // proyectos nuevos), Firebase devuelve este código tanto si la contraseña
    // es incorrecta como si el usuario no existe.
    case "auth/invalid-credential":
    case "auth/invalid-login-credentials":
    case "auth/wrong-password":
      return "Correo o contraseña incorrectos.";
    case "auth/user-not-found":
      return "No existe una cuenta con ese correo.";
    case "auth/invalid-email":
      return "El correo electrónico no es válido.";
    case "auth/user-disabled":
      return "Esta cuenta ha sido deshabilitada.";
    case "auth/too-many-requests":
      return "Demasiados intentos. Espera unos minutos e inténtalo de nuevo.";
    case "auth/network-request-failed":
      return "No hay conexión. Revisa tu internet e inténtalo de nuevo.";
    default:
      return "No se pudo iniciar sesión. Inténtalo de nuevo.";
  }
}
