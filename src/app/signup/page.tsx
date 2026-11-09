import AuthForm from "@/components/AuthForm";
import AuthLayout from "@/components/AuthLayout";

export default function SignUpPage() {
  return (
    <AuthLayout
      mode="signup"
      title="Crear cuenta"
      description="Regístrate para comenzar a explirar DevAtlas."
    >
      <AuthForm mode="signup" />
    </AuthLayout>
  );
}
