import Link from "next/link";
import { ReactNode } from "react";

type AuthLAyoutProps = {
  title: string;
  description: string;
  mode: "login" | "signup";
  children: ReactNode;
};

export default function AuthLayout({
  title,
  description,
  mode,
  children,
}: AuthLAyoutProps) {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-6 py-12 textn-on-surface">
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl " />
      <div className="relative z-10 w-full max-w-md">
        <Link href="/" className="mb-10 flex items-center justify-center gap-3">
          <span className="material-symbols-outlined text-4xl text-primary">
            Terminal
          </span>
          <span className="font-mono text2xl font-bold tracking-tight">
            Dev<span className="text-primary ">Atlas</span>
          </span>
        </Link>
        <div className="rounded-2xl border border-outline-variant/20 bg-surface-container p-8 shadow-2xl">
          <div className="mb-8 text-center">
            <h1 className="text-3xl font-bold tracking-light">{title}</h1>
            <p className="mt-3 text-sm text-on-surface-variant">
              {description}
            </p>
          </div>
          {children}
        </div>
        <p className="mt-8 text-center text-xs text-on-surface-vaiante">
          {new Date().getFullYear()} DevAtlas
        </p>
      </div>
    </main>
  );
}
