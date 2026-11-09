import { getSessionUser, sessionCookie } from "@/lib/local-auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { logout } from "../auth/actions";

async function AccountPanel() {
  const token = (await cookies()).get(sessionCookie)?.value;
  const user = token ? await getSessionUser(token) : null;
  if (!user) return redirect("/login");

  return (
    <>
      <p role="status" className="text-body-md text-tertiary">
        Iniciaste sesión correctamente.
      </p>
      <p className="break-words text-body-md text-on-surface-variant">
        Cuenta activa: {user.name}
      </p>
      <form action={logout}>
        <button type="submit" className="rounded-lg bg-primary-container px-4 py-2 text-on-primary">
          Cerrar sesión
        </button>
      </form>
    </>
  );
}

export default function DashboardPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-background p-margin-mobile text-on-surface">
      <section className="w-full max-w-lg space-y-4 rounded-xl border border-outline-variant/50 bg-surface-container p-space-lg">
        <h1 className="text-headline-lg">Panel de DevAtlas</h1>
        <Suspense fallback={<p role="status">Verificando tu sesión…</p>}>
          <AccountPanel />
        </Suspense>
      </section>
    </main>
  );
}
