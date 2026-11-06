"use client";

import AuthForm from "@/components/AuthForm";
import AuthLayout from "@/components/AuthLayout";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout
      mode="login"
      title="Iniciar sesión"
      description="Ingresa tus credenciales para sincronizar tus comparaciones y hojas de rutas tecnológicas"
    >
      <AuthForm mode="login" />
    </AuthLayout>
  );
}
