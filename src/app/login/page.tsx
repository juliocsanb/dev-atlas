"use client";

import Link from "next/link";
import { useState } from "react";
import AuthLayout from "@/components/AuthLayout";
import AuthForm from "@/components/AuthForm";
export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <AuthLayout
      mode="login"
      title="Inicar sesión"
      description="Ingresa tus credenciales para sincronizar tus comparaciones y hojas de rutas tecnológicas."
    >
      <AuthForm mode="login" />
    </AuthLayout>
  );
}
