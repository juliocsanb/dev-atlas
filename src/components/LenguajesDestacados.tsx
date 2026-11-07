type Lenguaje = {
  sigla: string;
  nombre: string;
  area: string;
  descripcion: string;
  etiquetas: string[];
  version: string;
  colorSigla: string;
};

const lenguajes: Lenguaje[] = [
  {
    sigla: "JS",
    nombre: "JavaScript",
    area: "Frontend & Backend",
    descripcion:
      "El motor universal de la web y Node.js. Dinámico, asíncrono con Event Loop y el repositorio de paquetes más extenso del mundo (npm).",
    etiquetas: ["Web interactiva", "APIs REST", "Full-Stack"],
    version: "vES2024 / Node 22",
    colorSigla: "text-amber-300 border-amber-400/30",
  },
  {
    sigla: "PY",
    nombre: "Python",
    area: "AI, Data & Backend",
    descripcion:
      "Sintaxis clara y expresiva. Estándar indiscutible para Machine Learning, procesamiento científico y prototipado ágil con FastAPI y Django.",
    etiquetas: ["Inteligencia Artificial", "APIs REST", "Data Science"],
    version: "v3.12.3 / PyTorch",
    colorSigla: "text-sky-400 border-sky-400/30",
  },
  {
    sigla: "JV",
    nombre: "Java",
    area: "Enterprise & Cloud",
    descripcion:
      "Pilar robusto de la ingeniería empresarial y sistemas bancarios. JVM ultra optimizada con Spring Boot y hilos virtuales en Project Loom.",
    etiquetas: ["Sistemas Bancarios", "Microservicios", "APIs REST"],
    version: "v21 LTS / Spring 3.2",
    colorSigla: "text-red-400 border-red-400/30",
  },
  {
    sigla: "KT",
    nombre: "Kotlin",
    area: "Android & Multiplatform",
    descripcion:
      "Lenguaje preferido de Google para Android. Conciso, seguro frente a nulos y con corrutinas de concurrencia nativa en Kotlin Multiplatform.",
    etiquetas: ["Android Nativo", "Multiplataforma", "APIs REST"],
    version: "v2.0 / Compose Multi",
    colorSigla: "text-purple-400 border-purple-400/30",
  },
  {
    sigla: "C#",
    nombre: "C#",
    area: "Enterprise, Cloud & Gaming",
    descripcion:
      "Evolución formidable bajo .NET moderna y el motor Unity para videojuegos. Tipado robusto, Async/Await refinado y alto rendimiento.",
    etiquetas: ["Videojuegos Unity", "APIs REST", "Cloud Azure"],
    version: "v12.0 / .NET 8",
    colorSigla: "text-violet-400 border-violet-400/30",
  },
  {
    sigla: "GO",
    nombre: "Go",
    area: "Cloud Infrastructure & Backend",
    descripcion:
      "Diseñado por Google para la era de la nube (Docker, Kubernetes). Compilación estática ultrarrápida, goroutines ligeras y APIs estables.",
    etiquetas: ["Microservicios", "APIs REST", "DevOps Tooling"],
    version: "v1.22 / Goroutines",
    colorSigla: "text-cyan-400 border-cyan-400/30",
  },
];

function TarjetaLenguaje({ lenguaje }: { lenguaje: Lenguaje }) {
  return (
    <div className="bg-surface-container-low border border-outline-variant/40 rounded-xl p-space-lg flex flex-col justify-between hover:border-primary/50 transition-all duration-200 group">
      <div>
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center font-label-code font-bold border ${lenguaje.colorSigla}`}
            >
              {lenguaje.sigla}
            </div>
            <div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                {lenguaje.nombre}
              </h3>
              <span className="text-label-code font-label-code text-outline text-[11px]">
                {lenguaje.area}
              </span>
            </div>
          </div>
          <span className="bg-tertiary-container/30 border border-tertiary/40 text-tertiary px-2 py-0.5 rounded text-[10px] font-label-code">
            Preparado para API REST
          </span>
        </div>
        <p className="text-body-sm font-body-sm text-on-surface-variant mb-4">
          {lenguaje.descripcion}
        </p>
        <div className="flex flex-wrap gap-1.5 mb-6">
          {lenguaje.etiquetas.map((etiqueta) => (
            <span
              key={etiqueta}
              className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-[11px] font-label-ui border border-outline-variant/30"
            >
              {etiqueta}
            </span>
          ))}
        </div>
      </div>
      <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
        <span className="text-label-code font-label-code text-outline">
          {lenguaje.version}
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
  );
}

export default function LenguajesDestacados() {
  return (
    <section
      className="py-16 md:py-24 border-b border-outline-variant/20"
      id="lenguajes"
    >
      <div className="max-w-[1440px] mx-auto px-margin">
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
              <span className="w-2 h-2 rounded-full bg-tertiary"></span>
              {lenguajes.length} seleccionados de 45+
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {lenguajes.map((lenguaje) => (
            <TarjetaLenguaje key={lenguaje.nombre} lenguaje={lenguaje} />
          ))}
        </div>
      </div>
    </section>
  );
}
