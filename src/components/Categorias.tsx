type Category = {
  id: string;
  icon: string;
  title: string;
  description: string;
  count: string;
  iconColor: string; // color del icono y de la etiqueta
  hoverBg: string; // fondo del icono al hacer hover
  wide?: boolean; // ocupa 2 columnas en pantallas grandes
};

const categories: Category[] = [
  {
    id: "web",
    icon: "language",
    title: "Desarrollo Web",
    description:
      "Frameworks SPA, SSR, APIs y motores de renderizado de browsers.",
    count: "14 lenguajes",
    iconColor: "text-secondary",
    hoverBg: "group-hover:bg-secondary-container/20",
  },
  {
    id: "mobile",
    icon: "smartphone",
    title: "Aplicaciones Móviles",
    description:
      "Ecosistemas iOS y Android, multiplataforma y desarrollo nativo.",
    count: "8 lenguajes",
    iconColor: "text-primary",
    hoverBg: "group-hover:bg-primary-container/20",
  },
  {
    id: "backend",
    icon: "dns",
    title: "Backend",
    description:
      "Sistemas distribuidos, servidores de alto rendimiento y capas de persistencia.",
    count: "19 lenguajes",
    iconColor: "text-tertiary",
    hoverBg: "group-hover:bg-tertiary-container/20",
  },
  {
    id: "data",
    icon: "analytics",
    title: "Ciencia de Datos",
    description:
      "Modelado numérico, estadística, ETL masivo y pipelines de visualización.",
    count: "6 lenguajes",
    iconColor: "text-secondary-fixed-dim",
    hoverBg: "group-hover:bg-secondary-container/20",
  },
  {
    id: "ai",
    icon: "psychology",
    title: "Inteligencia Artificial",
    description:
      "Entrenamiento de LLMs, inferencia tensorial y agentes autónomos.",
    count: "7 lenguajes",
    iconColor: "text-primary-fixed-dim",
    hoverBg: "group-hover:bg-primary-container/20",
  },
  {
    id: "low-level",
    icon: "memory",
    title: "Sistemas de Bajo Nivel",
    description:
      "Kernels, drivers, hardware embebido y seguridad sin garbage collector.",
    count: "5 lenguajes",
    iconColor: "text-error",
    hoverBg: "group-hover:bg-error-container/20",
  },
  {
    id: "games",
    icon: "sports_esports",
    title: "Videojuegos",
    description:
      "Motores Unreal, Unity, Godot y pipelines de shaders 3D de baja latencia gráfica.",
    count: "9 lenguajes",
    iconColor: "text-tertiary-fixed-dim",
    hoverBg: "group-hover:bg-tertiary-container/20",
    wide: true,
  },
];

export default function Categorias() {
  return (
    <section
      id="categorias"
      className="py-16 md:py-24 border-b border-outline-variant/20 bg-surface-container-lowest/50"
    >
      <div className="max-w-[1440px] mx-auto px-margin">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-secondary text-label-code font-label-code mb-2">
            <span className="material-symbols-outlined text-[16px]">
              category
            </span>
            <span>TAXONOMÍA TÉCNICA</span>
          </div>
          <h2 className="text-headline-lg font-headline-lg text-on-surface">
            Explorar por Categoría
          </h2>
          <p className="text-on-surface-variant text-body-md font-body-md max-w-xl mt-1">
            Navega por especialidad ingenieril y localiza las opciones
            tecnológicas líderes en cada dominio.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`bg-surface-container-low border border-outline-variant/30 rounded-xl p-5 hover:border-secondary/50 transition-all duration-150 cursor-pointer group flex flex-col justify-between ${
                cat.wide ? "lg:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-2.5 rounded-lg bg-surface-container ${cat.iconColor} ${cat.hoverBg} transition-colors`}
                >
                  <span className="material-symbols-outlined text-[24px]">
                    {cat.icon}
                  </span>
                </div>
                <span
                  className={`text-label-code font-label-code ${cat.iconColor} px-2 py-0.5 rounded bg-surface-container border border-outline-variant/20`}
                >
                  {cat.count}
                </span>
              </div>
              <div>
                <h3 className="text-headline-sm font-headline-sm text-on-surface mb-1">
                  {cat.title}
                </h3>
                <p className="text-body-sm font-body-sm text-on-surface-variant">
                  {cat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}