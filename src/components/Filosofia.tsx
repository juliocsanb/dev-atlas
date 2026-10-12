export default function Filosofia() {
  return (
    <section
      id="filosofia"
      className="py-16 md:py-24 border-b border-outline-variant/20 bg-surface-container-lowest/30"
    >
      <div className="max-w-[1440px] mx-auto px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-7 bg-surface-container-low border border-outline-variant/40 rounded-2xl p-8 md:p-12 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

            <div>
              <div className="flex items-center gap-2 text-primary text-label-code font-label-code mb-4">
                <span className="material-symbols-outlined text-[18px]">
                  menu_book
                </span>
                <span>MANIFIESTO DEVATLAS</span>
              </div>

              <blockquote className="text-headline-lg md:text-headline-xl font-headline-xl text-on-surface mb-6 leading-tight">
                «No existe el &quot;mejor&quot; lenguaje de programación, sino
                la herramienta adecuada para cada problema.»
              </blockquote>

              <p className="text-body-md font-body-md text-on-surface-variant leading-relaxed mb-6">
                En ingeniería de software profesional, las decisiones
                tecnológicas nunca se basan en dogmas ni fanatismos de
                comunidad. Cada elección es un intercambio deliberado: velocidad
                de compilación frente a tiempo de ejecución, tipado estricto
                frente a velocidad de iteración, y control manual de memoria
                frente a comodidad con recolector de basura.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-outline-variant/20">
              <div>
                <span className="text-label-code font-label-code text-secondary block mb-1">
                  01. PRAGMATISMO
                </span>
                <p className="text-body-sm font-body-sm text-outline">
                  Elige según el equipo y la escala real, no por tendencias
                  efímeras.
                </p>
              </div>

              <div>
                <span className="text-label-code font-label-code text-tertiary block mb-1">
                  02. ERGONOMÍA
                </span>
                <p className="text-body-sm font-body-sm text-outline">
                  El tooling, depuración y tipado previenen defectos a largo
                  plazo.
                </p>
              </div>

              <div>
                <span className="text-label-code font-label-code text-primary block mb-1">
                  03. COSTE TOTAL
                </span>
                <p className="text-body-sm font-body-sm text-outline">
                  Mantenibilidad y reclutamiento son variables críticas de
                  infraestructura.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-surface-container border border-outline-variant/40 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-headline-sm font-headline-sm text-on-surface mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[22px]">
                  balance
                </span>
                Reglas de Decisión Técnica
              </h3>

              <ul className="space-y-4 text-body-sm font-body-sm text-on-surface-variant">
                <li className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/20">
                  <strong className="text-on-surface block mb-1">
                    ¿Concurrencia masiva con miles de conexiones?
                  </strong>
                  Prefiere Go o Elixir sobre runtimes monolíticos bloqueantes.
                </li>

                <li className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/20">
                  <strong className="text-on-surface block mb-1">
                    ¿Cálculo numérico intensivo o modelos generativos?
                  </strong>
                  Python respaldado por bindings en C++ y kernels CUDA es el
                  estándar ineludible.
                </li>

                <li className="p-3 rounded-lg bg-surface-container-low border border-outline-variant/20">
                  <strong className="text-on-surface block mb-1">
                    ¿Sistemas críticos de misión sin margen de fallo de memoria?
                  </strong>
                  Rust proporciona seguridad matemática en tiempo de
                  compilación.
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between text-label-code font-label-code text-outline">
              <span>DevAtlas Architecture Board</span>
              <span className="text-tertiary">Verified Matrix</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
