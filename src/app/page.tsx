import Image from "next/image";
import FilosofiaEditorial from "../components/FilosofiaEditorial";
import ComparacionLenguaje from "@/components/ComparacionLenguaje";
import Categorias from "./Categorias";
import LenguajesDestacados from "@/components/LenguajesDestacados";
import Hero from "@/components/Hero";
import SiteHeader from "@/components/SiteHeader";

export default function Home() {
  return (
    <div className="bg-background text-on-surface antialiased min-h-screen flex flex-col font-body-md text-body-md">
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(rgba(192, 193, 255, 0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <SiteHeader />
      <main className="relative z-10 flex-grow">
        {/* Aquí se integrarán las secciones de los equipos:
            Hero, Lenguajes, Categorías, Comparador, Filosofía. */}
        <Hero />
        <LenguajesDestacados />
        <Categorias />
        <ComparacionLenguaje />
        <FilosofiaEditorial />
        {/* SECTION: CTA Final */}
        <section className="py-20 md:py-28 relative overflow-hidden">
          {/* Ambient Glow Spot */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/15 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-[1440px] mx-auto px-margin relative z-10 text-center">
            <div className="max-w-2xl mx-auto flex flex-col items-center">
              {/* Architectural badges */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
                <span className="px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/40 text-label-code font-label-code text-primary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">
                    api
                  </span>
                  REST API ready
                </span>
                <span className="px-3 py-1 rounded-full bg-surface-container-high border border-outline-variant/40 text-label-code font-label-code text-secondary flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[14px]">
                    school
                  </span>
                  Open Educational Platform
                </span>
              </div>
              <h2 className="text-headline-xl md:text-display-hero font-display-hero tracking-tight text-on-surface mb-4">
                Encuentra tu próximo lenguaje
              </h2>
              <p className="text-body-lg font-body-lg text-on-surface-variant mb-8 max-w-xl">
                Comienza a comparar sintaxis, ecosistemas de paquetes y
                benchmarks de rendimiento en menos de dos minutos.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
                <a
                  className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-gradient-to-r from-inverse-primary to-primary-container text-on-surface font-semibold text-body-md font-body-md shadow-lg shadow-indigo-950/60 hover:opacity-95 transition-all duration-150 active:scale-[0.98] flex items-center justify-center gap-2 border border-primary/20"
                  href="#lenguajes"
                >
                  <span>Explorar todos los lenguajes</span>
                  <span className="material-symbols-outlined text-[20px]">
                    explore
                  </span>
                </a>
                <a
                  className="w-full sm:w-auto px-6 py-3.5 rounded-lg bg-surface-container hover:bg-surface-container-high border border-outline-variant/60 text-on-surface font-medium text-body-md font-body-md transition-all duration-150 flex items-center justify-center gap-2"
                  href="/login"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    account_circle
                  </span>
                  <span>Crear cuenta gratuita</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="full-width bg-surface-container-lowest dark:bg-surface-container-lowest border-t border-outline-variant/20 dark:border-outline-variant/20 flat no shadows">
        <div className="w-full max-w-[1440px] mx-auto px-margin py-space-xl flex flex-col md:flex-row justify-between items-center gap-space-md">
          {/* Brand & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <a className="flex items-center gap-2" href="#">
              <img
                alt="DevAtlas Logo"
                className="h-6 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
                src="https://lh3.googleusercontent.com/aida/AEtjO1W1Tw-x1O40sqPh9vuv_QWbM4Ammun6q4_B3PD_mnhfxrWJg6YdH1-oKm6wnXSqbDi7tZ1D6lSjjw8UlJTdhqGwvNUZtnmv9aiTM_v6Fa_mC2izX4NAhHJI3YrrQp412k6fIs-YeqLFspefXGiH5fNv3gHerDZxV1Rue29-6yUfPNMfrdo9bRmskFaOUIjyB5Ae4ex_FRORdO2gMtjYj7l2Sr0LtXLGoYVAQK2h0GTi"
              />
            </a>
            <span className="text-body-sm font-body-sm text-on-surface-variant">
              © 2025 DevAtlas. Built for deterministic developer ergonomics.
            </span>
          </div>
          {/* Links Cluster */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6">
            <a
              className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors text-label-code font-label-code"
              href="#documentacion"
            >
              Documentación
            </a>
            <a
              className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors text-label-code font-label-code"
              href="#comunidad"
            >
              Comunidad
            </a>
            <a
              className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors text-label-code font-label-code"
              href="#roadmap"
            >
              Roadmap
            </a>
            <a
              className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors text-label-code font-label-code"
              href="#api"
            >
              API
            </a>
            <a
              className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors text-label-code font-label-code flex items-center gap-1"
              href="https://github.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span>GitHub</span>
              <span className="material-symbols-outlined text-[12px]">
                open_in_new
              </span>
            </a>
            <a
              className="text-on-surface-variant dark:text-on-surface-variant hover:text-primary dark:hover:text-primary transition-colors text-label-code font-label-code"
              href="#terminos"
            >
              Términos y Privacidad
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
