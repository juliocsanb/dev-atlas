export default function Categorias() {
  return (
    <section
      className="py-16 md:py-24 border-b border-outline-variant/20 bg-surface-container-lowest/50"
      id="categorias"
    >
      {
        <section
          className="py-16 md:py-24 border-b border-outline-variant/20 bg-surface-container-lowest/50"
          id="categorias"
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
              <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5 hover:border-secondary/50 transition-all duration-150 cursor-pointer group flex flex-col justify-between">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-surface-container text-secondary group-hover:bg-secondary-container/20 transition-colors">
                    <span className="material-symbols-outlined text-[24px]">
                      language
                    </span>
                  </div>
                  <span className="text-label-code font-label-code text-secondary px-2 py-0.5 rounded bg-surface-container border border-outline-variant/20">
                    14 lenguajes
                  </span>
                </div>
                <div>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface mb-1">
                    Desarrollo Web
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Frameworks SPA, SSR, APIs y motores de renderizado de
                    browsers.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5 hover:border-secondary/50 transition-all duration-150 cursor-pointer group flex flex-col justify-between">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-surface-container text-primary group-hover:bg-primary-container/20 transition-colors">
                    <span className="material-symbols-outlined text-[24px]">
                      smartphone
                    </span>
                  </div>
                  <span className="text-label-code font-label-code text-primary px-2 py-0.5 rounded bg-surface-container border border-outline-variant/20">
                    8 lenguajes
                  </span>
                </div>
                <div>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface mb-1">
                    Aplicaciones Móviles
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Ecosistemas iOS y Android, multiplataforma y desarrollo
                    nativo.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5 hover:border-secondary/50 transition-all duration-150 cursor-pointer group flex flex-col justify-between">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-surface-container text-tertiary group-hover:bg-tertiary-container/20 transition-colors">
                    <span className="material-symbols-outlined text-[24px]">
                      dns
                    </span>
                  </div>
                  <span className="text-label-code font-label-code text-tertiary px-2 py-0.5 rounded bg-surface-container border border-outline-variant/20">
                    19 lenguajes
                  </span>
                </div>
                <div>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface mb-1">
                    Backend
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Sistemas distribuidos, servidores de alto rendimiento y
                    capas de persistencia.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5 hover:border-secondary/50 transition-all duration-150 cursor-pointer group flex flex-col justify-between">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-surface-container text-secondary-fixed-dim group-hover:bg-secondary-container/20 transition-colors">
                    <span className="material-symbols-outlined text-[24px]">
                      analytics
                    </span>
                  </div>
                  <span className="text-label-code font-label-code text-secondary-fixed-dim px-2 py-0.5 rounded bg-surface-container border border-outline-variant/20">
                    6 lenguajes
                  </span>
                </div>
                <div>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface mb-1">
                    Ciencia de Datos
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Modelado numérico, estadística, ETL masivo y pipelines de
                    visualización.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5 hover:border-secondary/50 transition-all duration-150 cursor-pointer group flex flex-col justify-between">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-surface-container text-primary-fixed-dim group-hover:bg-primary-container/20 transition-colors">
                    <span className="material-symbols-outlined text-[24px]">
                      psychology
                    </span>
                  </div>
                  <span className="text-label-code font-label-code text-primary-fixed-dim px-2 py-0.5 rounded bg-surface-container border border-outline-variant/20">
                    7 lenguajes
                  </span>
                </div>
                <div>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface mb-1">
                    Inteligencia Artificial
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Entrenamiento de LLMs, inferencia tensorial y agentes
                    autónomos.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5 hover:border-secondary/50 transition-all duration-150 cursor-pointer group flex flex-col justify-between">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-surface-container text-error group-hover:bg-error-container/20 transition-colors">
                    <span className="material-symbols-outlined text-[24px]">
                      memory
                    </span>
                  </div>
                  <span className="text-label-code font-label-code text-error px-2 py-0.5 rounded bg-surface-container border border-outline-variant/20">
                    5 lenguajes
                  </span>
                </div>
                <div>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface mb-1">
                    Sistemas de Bajo Nivel
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Kernels, drivers, hardware embebido y seguridad sin garbage
                    collector.
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-5 hover:border-secondary/50 transition-all duration-150 cursor-pointer group flex flex-col justify-between lg:col-span-2">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2.5 rounded-lg bg-surface-container text-tertiary-fixed-dim group-hover:bg-tertiary-container/20 transition-colors">
                    <span className="material-symbols-outlined text-[24px]">
                      sports_esports
                    </span>
                  </div>
                  <span className="text-label-code font-label-code text-tertiary-fixed-dim px-2 py-0.5 rounded bg-surface-container border border-outline-variant/20">
                    9 lenguajes
                  </span>
                </div>
                <div>
                  <h3 className="text-headline-sm font-headline-sm text-on-surface mb-1">
                    Videojuegos
                  </h3>
                  <p className="text-body-sm font-body-sm text-on-surface-variant">
                    Motores Unreal, Unity, Godot y pipelines de shaders 3D de
                    baja latencia gráfica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
    </section>
  );
}
