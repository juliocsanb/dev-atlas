import React from "react";

// Estructura de tipos para las tarjetas de lenguajes
interface LanguageItem {
  code: string;
  codeColorClass: string;
  codeBorderClass: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  version: string;
}

// Datos extraídos del HTML para JavaScript y Python
const featuredLanguagesData: LanguageItem[] = [
  {
    code: "JS",
    codeColorClass: "text-amber-300",
    codeBorderClass: "border-amber-400/30",
    name: "JavaScript",
    category: "Frontend & Backend",
    description:
      "El motor universal de la web y Node.js. Dinámico, asíncrono con Event Loop y el repositorio de paquetes más extenso del mundo (npm).",
    tags: ["Web interactiva", "APIs REST", "Full-Stack"],
    version: "vES2024 / Node 22",
  },
  {
    code: "PY",
    codeColorClass: "text-sky-400",
    codeBorderClass: "border-sky-400/30",
    name: "Python",
    category: "AI, Data & Backend",
    description:
      "Sintaxis clara y expresiva. Estándar indiscutible para Machine Learning, procesamiento científico y prototipado ágil con FastAPI y Django.",
    tags: ["Inteligencia Artificial", "APIs REST", "Data Science"],
    version: "v3.12.3 / PyTorch",
  },
];

// Componente reutilizable para la sección de lenguajes
export const FeaturedLanguagesSection: React.FC = () => {
  return (
    <section
      className="py-16 md:py-24 border-b border-outline-variant/20"
      id="lenguajes"
    >
      <div className="max-w-[1440px] mx-auto px-margin">
        {/* Cabecera de la sección */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-space-md">
          <div>
            <div className="flex items-center gap-2 text-primary text-label-code font-label-code mb-2">
              <span className="material-symbols-outlined text-[16px]">
                code
              </span>
              <span>CATÁLOGO PRINCIPAL</span>
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Lenguajes Destacados
            </h2>
            <p className="text-on-surface-variant text-body-md font-body-md max-w-2xl mt-1">
              Explora las tecnologías que impulsan la industria moderna, con
              perfiles detallados, arquitectura de runtime y aplicabilidad.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded bg-surface-container border border-outline-variant/30 text-label-code font-label-code text-on-surface-variant flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>2
              seleccionados de 45+
            </span>
          </div>
        </div>

        {/* Cuadrícula de tarjetas de lenguajes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-gutter">
          {featuredLanguagesData.map((lang) => (
            <div
              key={lang.name}
              className="bg-surface-container-low border border-outline-variant/40 rounded-xl p-space-lg flex flex-col justify-between hover:border-primary/50 transition-all duration-200 group"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center font-label-code font-bold ${lang.codeColorClass} border ${lang.codeBorderClass}`}
                    >
                      {lang.code}
                    </div>
                    <div>
                      <h3 className="text-headline-sm font-headline-sm text-on-surface">
                        {lang.name}
                      </h3>
                      <span className="text-label-code font-label-code text-outline text-[11px]">
                        {lang.category}
                      </span>
                    </div>
                  </div>
                  {/* Badge de compatibilidad */}
                  <span className="bg-tertiary-container/30 border border-tertiary/40 text-tertiary px-2 py-0.5 rounded text-[10px] font-label-code">
                    Preparado para API REST
                  </span>
                </div>
                <p className="text-body-sm font-body-sm text-on-surface-variant mb-4">
                  {lang.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {lang.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-[11px] font-label-ui border border-outline-variant/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
                <span className="text-label-code font-label-code text-outline">
                  {lang.version}
                </span>
                <button
                  className="text-label-ui font-label-ui text-primary group-hover:text-primary-fixed flex items-center gap-1 font-medium transition-colors"
                  type="button"
                >
                  <span>Ver detalles</span>
                  <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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
      <header className="docked full-width top-0 sticky z-50 bg-surface-dim/80 dark:bg-surface-dim/80 backdrop-blur-md border-b border-outline-variant/30 dark:border-outline-variant/30 shadow-sm dark:shadow-none">
        <div className="w-full max-w-[1440px] mx-auto px-margin flex items-center justify-between h-16">
          {/* Logo + Brand Anchor */}
          <div className="flex items-center gap-space-lg">
            <a className="flex items-center gap-space-sm group" href="#">
              <img
                alt="DevAtlas Logo"
                className="h-8 w-auto object-contain transition-opacity group-hover:opacity-90"
                src="https://lh3.googleusercontent.com/aida/AEtjO1W1Tw-x1O40sqPh9vuv_QWbM4Ammun6q4_B3PD_mnhfxrWJg6YdH1-oKm6wnXSqbDi7tZ1D6lSjjw8UlJTdhqGwvNUZtnmv9aiTM_v6Fa_mC2izX4NAhHJI3YrrQp412k6fIs-YeqLFspefXGiH5fNv3gHerDZxV1Rue29-6yUfPNMfrdo9bRmskFaOUIjyB5Ae4ex_FRORdO2gMtjYj7l2Sr0LtXLGoYVAQK2h0GTi"
              />
            </a>
            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-space-lg">
              <a
                className="text-primary dark:text-primary font-medium border-b-2 border-primary dark:border-primary pb-1 text-label-ui font-label-ui transition-colors"
                href="#"
              >
                Inicio
              </a>
              <a
                className="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface font-normal transition-colors text-label-ui font-label-ui"
                href="#lenguajes"
              >
                Lenguajes
              </a>
              <a
                className="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface font-normal transition-colors text-label-ui font-label-ui"
                href="#categorias"
              >
                Categorías
              </a>
              <a
                className="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface font-normal transition-colors text-label-ui font-label-ui"
                href="#comparar"
              >
                Comparar
              </a>
              <a
                className="text-on-surface-variant dark:text-on-surface-variant hover:text-on-surface dark:hover:text-on-surface font-normal transition-colors text-label-ui font-label-ui"
                href="#filosofia"
              >
                Acerca de
              </a>
            </nav>
          </div>
          {/* Right cluster: Fast Search & Trailing Actions */}
          <div className="flex items-center gap-space-md">
            {/* Search Bar with Kbd */}
            <div className="hidden sm:flex items-center bg-surface-container-lowest border border-outline-variant/40 rounded-lg px-3 py-1.5 gap-2 text-on-surface-variant focus-within:border-primary transition-colors cursor-pointer group">
              <span className="material-symbols-outlined text-[18px] text-outline">
                search
              </span>
              <span className="text-body-sm font-body-sm text-outline pr-4">
                Buscar lenguajes...
              </span>
              <kbd className="text-label-code font-label-code bg-surface-container px-1.5 py-0.5 rounded border border-outline-variant/50 text-on-surface-variant text-[10px]">
                Ctrl+K
              </kbd>
            </div>
            {/* Trailing Terminal Icon Action */}
            <button
              aria-label="Terminal interactivo"
              className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high/50 rounded-lg transition-colors duration-150"
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">
                terminal
              </span>
            </button>
            {/* Trailing Primary Action (Login button) */}
            <a
              className="bg-surface-container border border-outline-variant/50 hover:border-primary/50 text-on-surface hover:text-primary px-3.5 py-1.5 rounded-lg text-label-ui font-label-ui transition-all duration-150 ease-out active:scale-[0.98] flex items-center gap-1.5"
              href="/login"
            >
              <span className="material-symbols-outlined text-[16px]">
                login
              </span>
              <span>Iniciar sesión</span>
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex-grow">
        {/* SECCIÓN MIGRADA: Lenguajes Destacados (JS y Python) */}
        <FeaturedLanguagesSection />

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
