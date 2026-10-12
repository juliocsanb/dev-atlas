export default function SeccionCategorias() {
  return (
    <section
        className="py-16 md:py-24 border-b border-outline-variant/20"
        id="comparar"
      >
        <div className="max-w-[1440px] mx-auto px-margin">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div
              className="inline-flex items-center gap-2 text-primary text-label-code font-label-code mb-2"
            >
              <span className="material-symbols-outlined text-[16px]"
                >compare_arrows</span
              >
              <span>EVALUADOR LADO A LADO</span>
            </div>
            <h2 className="text-headline-lg font-headline-lg text-on-surface">
              Comparación de Lenguajes
            </h2>
            <p className="text-on-surface-variant text-body-md font-body-md mt-1">
              Pondera los trade-offs de arquitectura en tiempo real con datos
              empíricos de rendimiento y mantenibilidad.
            </p>
          </div>
          {/* Side by Side Preview Container */}
          <div
            className="bg-surface-container-low border border-outline-variant/40 rounded-xl overflow-hidden shadow-xl"
          >
            {/* Matrix Top Bar Selector */}
            <div
              className="grid grid-cols-1 md:grid-cols-2 border-b border-outline-variant/30 bg-surface-dim"
            >
              <div
                className="p-4 md:p-6 flex items-center justify-between border-b md:border-b-0 md:border-r border-outline-variant/30"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center font-label-code font-bold text-sky-400 border border-sky-400/30"
                  >
                    PY
                  </div>
                  <div>
                    <div
                      className="text-headline-sm font-headline-sm text-on-surface"
                    >
                      Python
                    </div>
                    <span
                      className="text-label-code font-label-code text-outline text-[11px]"
                      >Interpretado / Tipado dinámico</span
                    >
                  </div>
                </div>
                <span
                  className="text-label-code font-label-code px-2.5 py-1 rounded bg-surface-container border border-outline-variant/30 text-on-surface-variant"
                  >Lado A</span
                >
              </div>
              <div className="p-4 md:p-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center font-label-code font-bold text-cyan-400 border border-cyan-400/30"
                  >
                    GO
                  </div>
                  <div>
                    <div
                      className="text-headline-sm font-headline-sm text-on-surface"
                    >
                      Go (Golang)
                    </div>
                    <span
                      className="text-label-code font-label-code text-outline text-[11px]"
                      >Compilado / Tipado estático</span
                    >
                  </div>
                </div>
                <span
                  className="text-label-code font-label-code px-2.5 py-1 rounded bg-surface-container border border-outline-variant/30 text-on-surface-variant"
                  >Lado B</span
                >
              </div>
            </div>
            {/* Metric Comparison Rows */}
            <div
              className="divide-y divide-outline-variant/20 font-body-sm text-body-sm"
            >
              {/* Row 1: Ventajas */}
              <div
                className="grid grid-cols-1 md:grid-cols-12 bg-surface-container-lowest/30"
              >
                <div
                  className="md:col-span-2 p-4 text-label-code font-label-code text-outline md:border-r border-outline-variant/20 flex items-center"
                >
                  VENTAJAS
                </div>
                <div
                  className="md:col-span-5 p-4 md:border-r border-outline-variant/20 text-on-surface space-y-1"
                >
                  <div className="flex items-start gap-2">
                    <span
                      className="text-tertiary font-bold text-body-md font-body-md"
                      >✓</span
                    >
                    <span
                      >Sintaxis hiper limpia y velocidad inigualable de
                      iteración.</span
                    >
                  </div>
                  <div className="flex items-start gap-2">
                    <span
                      className="text-tertiary font-bold text-body-md font-body-md"
                      >✓</span
                    >
                    <span
                      >Monopolio de facto en librerías de IA/ML (PyTorch,
                      TensorFlow).</span
                    >
                  </div>
                </div>
                <div className="md:col-span-5 p-4 text-on-surface space-y-1">
                  <div className="flex items-start gap-2">
                    <span
                      className="text-tertiary font-bold text-body-md font-body-md"
                      >✓</span
                    >
                    <span
                      >Ejecución nativa con huella de memoria minúscula y
                      compilación relámpago.</span
                    >
                  </div>
                  <div className="flex items-start gap-2">
                    <span
                      className="text-tertiary font-bold text-body-md font-body-md"
                      >✓</span
                    >
                    <span
                      >Concurrencia de primera clase mediante canales y
                      goroutines.</span
                    >
                  </div>
                </div>
              </div>
              {/* Row 2: Desventajas */}
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div
                  className="md:col-span-2 p-4 text-label-code font-label-code text-outline md:border-r border-outline-variant/20 flex items-center"
                >
                  DESVENTAJAS
                </div>
                <div
                  className="md:col-span-5 p-4 md:border-r border-outline-variant/20 text-on-surface-variant space-y-1"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-error font-bold text-body-md font-body-md"
                      >✗</span
                    >
                    <span
                      >Rendimiento de CPU moderado frente a binarios compilados
                      y GIL histórico.</span
                    >
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-error font-bold text-body-md font-body-md"
                      >✗</span
                    >
                    <span
                      >Gestión compleja de dependencias en proyectos
                      legacy.</span
                    >
                  </div>
                </div>
                <div
                  className="md:col-span-5 p-4 text-on-surface-variant space-y-1"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-error font-bold text-body-md font-body-md"
                      >✗</span
                    >
                    <span
                      >Manejo de errores explícito y repetitivo (<span
                        className="font-code-block text-[11px] text-on-surface"
                        >if err != nil</span
                      >).</span
                    >
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-error font-bold text-body-md font-body-md"
                      >✗</span
                    >
                    <span
                      >Poco adecuado para prototipado rápido de scripting
                      dinámico.</span
                    >
                  </div>
                </div>
              </div>
              {/* Row 3: Casos de Uso Ideales */}
              <div
                className="grid grid-cols-1 md:grid-cols-12 bg-surface-container-lowest/30"
              >
                <div
                  className="md:col-span-2 p-4 text-label-code font-label-code text-outline md:border-r border-outline-variant/20 flex items-center"
                >
                  CASOS DE USO
                </div>
                <div
                  className="md:col-span-5 p-4 md:border-r border-outline-variant/20"
                >
                  <div className="flex flex-wrap gap-1.5">
                    <span
                      className="px-2 py-0.5 rounded bg-surface-container text-[11px] text-on-surface"
                      >Machine Learning</span
                    >
                    <span
                      className="px-2 py-0.5 rounded bg-surface-container text-[11px] text-on-surface"
                      >Scripting y Automatización</span
                    >
                    <span
                      className="px-2 py-0.5 rounded bg-surface-container text-[11px] text-on-surface"
                      >APIs Científicas</span
                    >
                  </div>
                </div>
                <div className="md:col-span-5 p-4">
                  <div className="flex flex-wrap gap-1.5">
                    <span
                      className="px-2 py-0.5 rounded bg-surface-container text-[11px] text-on-surface"
                      >Microservicios Cloud</span
                    >
                    <span
                      className="px-2 py-0.5 rounded bg-surface-container text-[11px] text-on-surface"
                      >CLI Tools de Alta Velocidad</span
                    >
                    <span
                      className="px-2 py-0.5 rounded bg-surface-container text-[11px] text-on-surface"
                      >Infraestructura Distribuida</span
                    >
                  </div>
                </div>
              </div>
              {/* Row 4: Curva de Aprendizaje */}
              <div className="grid grid-cols-1 md:grid-cols-12">
                <div
                  className="md:col-span-2 p-4 text-label-code font-label-code text-outline md:border-r border-outline-variant/20 flex items-center"
                >
                  CURVA DE APRENDIZAJE
                </div>
                <div
                  className="md:col-span-5 p-4 md:border-r border-outline-variant/20"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-full bg-surface-container h-2 rounded-full overflow-hidden"
                    >
                      <div
                        className="bg-tertiary h-full w-[25%] rounded-full"
                      ></div>
                    </div>
                    <span
                      className="text-label-code font-label-code text-tertiary text-nowrap"
                      >Baja (Fácil)</span
                    >
                  </div>
                </div>
                <div className="md:col-span-5 p-4">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-full bg-surface-container h-2 rounded-full overflow-hidden"
                    >
                      <div
                        className="bg-secondary h-full w-[50%] rounded-full"
                      ></div>
                    </div>
                    <span
                      className="text-label-code font-label-code text-secondary text-nowrap"
                      >Media (Pragmática)</span
                    >
                  </div>
                </div>
              </div>
              {/* Row 5: Ecosistema & Package Manager */}
              <div
                className="grid grid-cols-1 md:grid-cols-12 bg-surface-container-lowest/30"
              >
                <div
                  className="md:col-span-2 p-4 text-label-code font-label-code text-outline md:border-r border-outline-variant/20 flex items-center"
                >
                  ECOSISTEMA
                </div>
                <div
                  className="md:col-span-5 p-4 md:border-r border-outline-variant/20 text-on-surface-variant"
                >
                  <div className="font-code-block text-[12px] text-on-surface">
                    pip, Poetry, uv, Conda
                  </div>
                  <div className="text-body-sm font-body-sm text-outline mt-0.5">
                    500,000+ paquetes en PyPI
                  </div>
                </div>
                <div className="md:col-span-5 p-4 text-on-surface-variant">
                  <div className="font-code-block text-[12px] text-on-surface">
                    go modules, GOPROXY
                  </div>
                  <div className="text-body-sm font-body-sm text-outline mt-0.5">
                    Descentralizado vía Git repos
                  </div>
                </div>
              </div>
            </div>
            {/* Bottom Action Bar inside Viewer */}
            <div
              className="p-4 bg-surface-dim border-t border-outline-variant/30 flex flex-col sm:flex-row items-center justify-between gap-4"
            >
              <span className="text-body-sm font-body-sm text-on-surface-variant">
                ¿Deseas comparar otros lenguajes como Rust, Kotlin o TypeScript?
              </span>
              <button
                className="px-4 py-2 bg-surface-container hover:bg-surface-container-high border border-outline-variant/40 rounded-lg text-label-ui font-label-ui text-on-surface flex items-center gap-2 transition-colors"
                type="button"
              >
                <span className="material-symbols-outlined text-[16px]">tune</span>
                <span>Abrir comparador completo (45+ lenguajes)</span>
              </button>
            </div>
          </div>
        </div>
      </section>
  );
}