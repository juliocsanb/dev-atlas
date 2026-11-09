"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  createAccount,
  createSession,
  deleteSession,
  sessionCookie,
  verifyAccount,
} from "@/lib/local-auth";

function field(form: FormData, name: string) {
  const value = form.get(name);
  return typeof value === "string" ? value : "";
}

export async function register(_previousError: string, form: FormData): Promise<string> {
  const name = field(form, "nombre").trim();
  const email = field(form, "email").trim().toLowerCase();
  const password = field(form, "password");

  if (
    !name || name.length > 100 || email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return "Escribe tu nombre y un correo válido.";
  }
  if (password.length < 6 || password.length > 128) {
    return "La contraseña debe tener entre 6 y 128 caracteres.";
  }
  if (password !== field(form, "confirmPassword")) {
    return "Las contraseñas no coinciden.";
  }

  try {
    if (!(await createAccount({ name, email }, password))) {
      return "Ya hay una cuenta con ese correo.";
    }
  } catch {
    return "No se pudo crear la cuenta. Inténtalo de nuevo.";
  }

  return redirect("/login");
}

export async function login(_previousError: string, form: FormData): Promise<string> {
  const email = field(form, "email").trim().toLowerCase();
  const password = field(form, "password");
  const invalidCredentials = "Correo o contraseña incorrectos.";
  if (!email || email.length > 254 || !password || password.length > 128) {
    return invalidCredentials;
  }

  try {
    const user = await verifyAccount(email, password);
    if (!user) return invalidCredentials;

    const jar = await cookies();
    const remember = form.has("remember");
    const maxAge = remember ? 7 * 24 * 60 * 60 : 24 * 60 * 60;
    const previousToken = jar.get(sessionCookie)?.value;
    if (previousToken) await deleteSession(previousToken);

    jar.set(sessionCookie, await createSession(user, maxAge), {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: remember ? maxAge : undefined,
    });
  } catch {
    return "No se pudo iniciar sesión. Inténtalo de nuevo.";
  }

  return redirect("/dashboard");
}

export async function logout() {
  const jar = await cookies();
  const token = jar.get(sessionCookie)?.value;
  if (token) await deleteSession(token);
  jar.delete(sessionCookie);
  redirect("/login");
}
