import AuthLayout from "../../../components/AuthLayout";
import AuthForm from "../../../components/AuthForm";

export default function LoginPage() {
  return (
    <AuthLayout
      mode="login"
      title="Iniciar sesión"
      description="Ingresa tus credenciales para sincronizar tus comparaciones y hojas de rutas tecnológicas."
    >
      <AuthForm mode="login" />
    </AuthLayout>
  );
}
