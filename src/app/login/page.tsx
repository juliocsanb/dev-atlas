"use client";

import AuthForm from "@/components/AuthForm";
import AuthLayout from "@/components/AuthLayout";
import Link from "next/link";
import React from "react";
import { useState } from "react";
export default function LoginPage() {
   const [showPassword, setShowPassword] = useState(false);

  return (
   <AuthLayout mode="login" title="Iniciar Sesión" description="Ingresa tus credenciales para sincronizar tus contraseñas">
    <AuthForm mode="login"/>
   </AuthLayout>
  );
}