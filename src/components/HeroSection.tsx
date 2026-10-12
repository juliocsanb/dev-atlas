export default function HeroSection() {
  return (
    <section className="relative pt-12 md:pt-20 pb-16 md:pb-24 overflow-hidden border-b border-outline-variant/20">
      <div className="max-w-[1440px] mx-auto px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-6 flex flex-col items-start gap-space-lg">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-low border border-outline-variant/40 text-secondary text-label-code font-label-code">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
              <span>DevAtlas v2.5 • Compilador de decisiones técnicas</span>
            </div>
            <h1 className="text-headline-xl md:text-display-hero font-display-hero tracking-tight text-on-surface">
              Explora el mundo de la{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                programación
              </span>
            </h1>
            <p className="text-body-lg font-body-lg text-on-surface-variant max-w-xl">
              Descubre lenguajes, compara sus ventajas y desventajas y
              encuentra la tecnología adecuada para cada proyecto.
            </p>
            <div className="flex flex-wrap items-center gap-space-md pt-2 w-full sm:w-auto">
              <a
                className="w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-gradient-to-r from-inverse-primary to-primary-container text-on-surface font-semibold text-body-md font-body-md shadow-lg shadow-indigo-950/40 hover:opacity-95 transition-all duration-150 active:scale-[0.98] flex items-center justify-center gap-2 border border-primary/20"
                href="#lenguajes"
              >
                <span>Explorar lenguajes</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </a>
              <a
                className="w-full sm:w-auto text-center px-6 py-3 rounded-lg bg-surface-container-low/80 hover:bg-surface-container border border-outline-variant/60 text-on-surface font-medium text-body-md font-body-md transition-all duration-150 active:scale-[0.98] flex items-center justify-center gap-2"
                href="#filosofia"
              >
                <span className="material-symbols-outlined text-[18px]">
                  explore
                </span>
                <span>Conocer la plataforma</span>
              </a>
            </div>
            <div className="grid grid-cols-3 gap-space-lg pt-6 border-t border-outline-variant/20 w-full max-w-lg">
              <div>
                <div className="text-headline-sm font-headline-sm text-on-surface">
                  45+
                </div>
                <div className="text-label-code font-label-code text-on-surface-variant">
                  LENGUAJES
                </div>
              </div>
              <div>
                <div className="text-headline-sm font-headline-sm text-tertiary">
                  120+
                </div>
                <div className="text-label-code font-label-code text-on-surface-variant">
                  BENCHMARKS
                </div>
              </div>
              <div>
                <div className="text-headline-sm font-headline-sm text-secondary">
                  REST API
                </div>
                <div className="text-label-code font-label-code text-on-surface-variant">
                  READY
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/10 via-secondary/10 to-tertiary/10 blur-xl opacity-60" />
            <div className="relative bg-surface-container-lowest border border-outline-variant/40 rounded-xl overflow-hidden shadow-2xl">
              <div className="flex items-center justify-between px-4 py-2.5 bg-surface-dim border-b border-outline-variant/30">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-error-container/80 border border-error" />
                  <div className="w-3 h-3 rounded-full bg-outline-variant" />
                  <div className="w-3 h-3 rounded-full bg-tertiary-container/80 border border-tertiary" />
                  <span className="ml-2 text-label-code font-label-code text-outline text-[11px]">
                    devatlas-runtime-eval.sh
                  </span>
                </div>
                <div className="flex items-center gap-1 text-label-code font-label-code text-[11px]">
                  <span className="px-2 py-0.5 rounded bg-surface-container-high text-primary border border-primary/30">
                    Go
                  </span>
                  <span className="px-2 py-0.5 rounded text-outline hover:text-on-surface">
                    Python
                  </span>
                  <span className="px-2 py-0.5 rounded text-outline hover:text-on-surface">
                    Rust
                  </span>
                  <span className="px-2 py-0.5 rounded text-outline hover:text-on-surface">
                    JS
                  </span>
                </div>
              </div>
              <div className="p-4 md:p-5 font-code-block text-code-block overflow-x-auto space-y-3">
                <div className="text-outline flex items-center justify-between pb-2 border-b border-outline-variant/20">
                  <span>Concurrencia de alto rendimiento en Go</span>
                  <span className="text-tertiary text-label-code font-label-code text-[10px]">
                    Latency: 1.4ms
                  </span>
                </div>
                <div className="text-on-surface-variant leading-relaxed">
                  <span className="text-primary font-medium">package</span> main
                  <br />
                  <br />
                  <span className="text-primary font-medium">import</span> (
                  <br />
                  <span className="text-tertiary pl-4">&quot;fmt&quot;</span>
                  <br />
                  <span className="text-tertiary pl-4">&quot;sync&quot;</span>
                  <br />
                  )
                  <br />
                  <br />
                  <span className="text-secondary font-medium">func</span>{" "}
                  <span className="text-on-surface font-semibold">worker</span>
                  (id <span className="text-secondary-fixed-dim">int</span>, wg
                  *sync.WaitGroup) &#123;
                  <br />
                  <span className="text-primary pl-4">defer</span> wg.Done()
                  <br />
                  <span className="pl-4">
                    fmt.Printf(
                    <span className="text-tertiary">
                      &quot;Worker %d dispatching jobs\n&quot;
                    </span>
                    , id)
                  </span>
                  <br />
                  &#125;
                </div>
                <div className="mt-4 pt-3 border-t border-outline-variant/25 grid grid-cols-3 gap-2 bg-surface-dim/70 p-2.5 rounded-lg border border-outline-variant/20">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-outline font-label-code">
                      THROUGHPUT
                    </span>
                    <span className="text-on-surface font-semibold text-body-sm">
                      48,200 req/s
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-outline font-label-code">
                      MEMORY USAGE
                    </span>
                    <span className="text-tertiary font-semibold text-body-sm">
                      18.4 MB (Min)
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-outline font-label-code">
                      COMPILATION
                    </span>
                    <span className="text-secondary font-semibold text-body-sm">
                      0.31s Native
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-4 py-2 bg-surface-dim/90 border-t border-outline-variant/25 flex items-center justify-between text-[11px] font-label-code text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-tertiary" />
                  <span>Ecosistema activo &amp; Benchmarks verificados</span>
                </div>
                <span className="text-outline">UTF-8 • go1.22.4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}