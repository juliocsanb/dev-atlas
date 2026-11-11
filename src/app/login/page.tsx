"use client";

import AuthLayout from "../../../components/AuthLayout";
import AuthForm from "../../../components/AuthForm";

export default function LoginPage() {
  return (
    <AuthLayout
      mode="login"
      title="Iniciar sesión"
      description="Ingresa tus credenciales para acceder a tu cuenta de desarrollador."
    >
      <AuthForm mode="login" />
    </AuthLayout>
  );
}
