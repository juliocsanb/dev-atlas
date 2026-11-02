import React from "react";

export default function LenguajesCards() {
  return (
    <section
      className="py-16 md:py-24 border-b border-outline-variant/20"
      id="lenguajes"
    >
      <div className="max-w-[1440px] mx-auto px-margin">
        {/* Encabezado de la sección */}
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
        </div>

        {/* Grid con las tarjetas de Kotlin y C# */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {/* Kotlin */}
          <div className="bg-surface-container-low border border-outline-variant/40 rounded-xl p-space-lg flex flex-col justify-between hover:border-primary/50 transition-all duration-200 group">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center font-label-code font-bold text-purple-400 border border-purple-400/30">
                    KT
                  </div>
                  <div>
                    <h3 className="text-headline-sm font-headline-sm text-on-surface">
                      Kotlin
                    </h3>
                    <span className="text-label-code font-label-code text-outline text-[11px]">
                      Android &amp; Multiplatform
                    </span>
                  </div>
                </div>
                <span className="bg-tertiary-container/30 border border-tertiary/40 text-tertiary px-2 py-0.5 rounded text-[10px] font-label-code">
                  Preparado para API REST
                </span>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-4">
                Lenguaje preferido de Google para Android. Conciso, seguro
                frente a nulos y con corrutinas de concurrencia nativa en Kotlin
                Multiplatform.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-[11px] font-label-ui border border-outline-variant/30">
                  Android Nativo
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-[11px] font-label-ui border border-outline-variant/30">
                  Multiplataforma
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-[11px] font-label-ui border border-outline-variant/30">
                  APIs REST
                </span>
              </div>
            </div>
            <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
              <span className="text-label-code font-label-code text-outline">
                v2.0 / Compose Multi
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

          {/* C# */}
          <div className="bg-surface-container-low border border-outline-variant/40 rounded-xl p-space-lg flex flex-col justify-between hover:border-primary/50 transition-all duration-200 group">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center font-label-code font-bold text-violet-400 border border-violet-400/30">
                    C#
                  </div>
                  <div>
                    <h3 className="text-headline-sm font-headline-sm text-on-surface">
                      C#
                    </h3>
                    <span className="text-label-code font-label-code text-outline text-[11px]">
                      Enterprise, Cloud &amp; Gaming
                    </span>
                  </div>
                </div>
                <span className="bg-tertiary-container/30 border border-tertiary/40 text-tertiary px-2 py-0.5 rounded text-[10px] font-label-code">
                  Preparado para API REST
                </span>
              </div>
              <p className="text-body-sm font-body-sm text-on-surface-variant mb-4">
                Evolución formidable bajo .NET moderna y el motor Unity para
                videojuegos. Tipado robusto, Async/Await refinado y alto
                rendimiento.
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-[11px] font-label-ui border border-outline-variant/30">
                  Videojuegos Unity
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-[11px] font-label-ui border border-outline-variant/30">
                  APIs REST
                </span>
                <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface text-[11px] font-label-ui border border-outline-variant/30">
                  Cloud Azure
                </span>
              </div>
            </div>
            <div className="pt-4 border-t border-outline-variant/20 flex items-center justify-between">
              <span className="text-label-code font-label-code text-outline">
                v12.0 / .NET 8
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
        </div>
      </div>
    </section>
  );
}
