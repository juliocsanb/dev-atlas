export default function CategoriesSection() {
  const categories = [
    {
      title: "Desarrollo Web",
      count: "14 lenguajes",
      icon: "language",
      description: "Frameworks SPA, SSR, APIs y motores de renderizado de browsers.",
      color: "text-secondary",
      hoverBg: "group-hover:bg-secondary-container/20",
      spanClass: "",
    },
    {
      title: "Aplicaciones Móviles",
      count: "8 lenguajes",
      icon: "smartphone",
      description: "Ecosistemas iOS y Android, multiplataforma y desarrollo nativo.",
      color: "text-primary",
      hoverBg: "group-hover:bg-primary-container/20",
      spanClass: "",
    },
    {
      title: "Backend",
      count: "19 lenguajes",
      icon: "dns",
      description: "Sistemas distribuidos, servidores de alto rendimiento y capas de persistencia.",
      color: "text-tertiary",
      hoverBg: "group-hover:bg-tertiary-container/20",
      spanClass: "",
    },
    {
      title: "Ciencia de Datos",
      count: "6 lenguajes",
      icon: "analytics",
      description: "Modelado numérico, estadística, ETL masivo y pipelines de visualización.",
      color: "text-secondary-fixed-dim",
      hoverBg: "group-hover:bg-secondary-container/20",
      spanClass: "",
    },
    {
      title: "Inteligencia Artificial",
      count: "7 lenguajes",
      icon: "psychology",
      description: "Entrenamiento de LLMs, inferencia tensorial y agentes autónomos.",
      color: "text-primary-fixed-dim",
      hoverBg: "group-hover:bg-primary-container/20",
      spanClass: "",
    },
    {
      title: "Sistemas de Bajo Nivel",
      count: "5 lenguajes",
      icon: "memory",
      description: "Kernels, drivers, hardware embebido y seguridad sin garbage collector.",
      color: "text-error",
      hoverBg: "group-hover:bg-error-container/20",
      spanClass: "",
    },
    {
      title: "Videojuegos",
      count: "9 lenguajes",
      icon: "sports_esports",
      description: "Motores Unreal, Unity, Godot y pipelines de shaders 3D de baja latencia gráfica.",
      color: "text-tertiary-fixed-dim",
      hoverBg: "group-hover:bg-tertiary-container/20",
      spanClass: "lg:col-span-2",
    },
  ];

  return (
    <section
      className="py-16 md:py-24 border-b border-outline-variant/20 bg-surface-container-lowest/50"
      id="categorias"
    >
      <div className="max-w-[1440px] mx-auto px-margin">
        <div className="mb-12">
          <div className="flex items-center gap-2 text-secondary text-label-code font-label-code mb-2">
            <span className="material-symbols-outlined text-[16px]">category</span>
            <span>TAXONOMÍA TÉCNICA</span>
          </div>
          <h2 className="text-headline-lg font-headline-lg text-on-surface">
            Explorar por Categoría
          </h2>
          <p className="text-on-surface-variant text-body-md font-body-md max-w-xl mt-1">
            Navega por especialidad ingenieril y localiza las opciones tecnológicas líderes en cada dominio.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className={`bg-surface-container-low border border-outline-variant/30 rounded-xl p-5 hover:border-secondary/50 transition-all duration-150 cursor-pointer group flex flex-col justify-between ${cat.spanClass}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`p-2.5 rounded-lg bg-surface-container ${cat.color} ${cat.hoverBg} transition-colors`}
                >
                  <span className="material-symbols-outlined text-[24px]">
                    {cat.icon}
                  </span>
                </div>
                <span
                  className={`text-label-code font-label-code ${cat.color} px-2 py-0.5 rounded bg-surface-container border border-outline-variant/20`}
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