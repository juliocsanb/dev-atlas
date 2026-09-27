export default function Hero() {
  return (
   <section className="flex flex-col min-h-[70vh] items-center justify-center px-6 text-center bg-slate-50 py-16">
   <div className="absolute inset-0 bg-cover bg-center"
   style={{
          backgroundImage:
            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDIQPOcFOMTOnkAvtR1crHpjoeq9EmGhVWpecnyfD7m-HEQEc0O0ooShOMIcnO1I0Xw5c-9WNaDjdaZfYK7xGxM7f4FldYUTEtbhu_GKZONtVQ5NEQ3RVfraixo4GT3XpwgRbXN9qPTyZRNNYCUxWuKGLKbC2N8Pc-r-0q18uP7rqUktekY-kOgAG2ERL1xX3yHtWQeqAFq00VfKrP83-kP3xjGqWtqboa-U2u4hkll5XQFsTtQf-1WMRgYHRL0NAB8zA')",
        }}>  
   </div>
   <div className="absolute inset-0 bg-white/80"> </div>
   <div className="relative z-10 flex flex-col items-center">  
   <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-800 shadow-sm">
   <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
        Sistema Oficial de Préstamo ITTOL
   </div>
   <h1 className="max-w-4xl text-4xl font-bold md:text-6xl text-slate-900 tracking-tight leading-tight">
    Prestamo Ágil de Equipo <br/>
    <span className="text-blue-700">
        Audiovisual y Cómputo
    </span>
     </h1>
    <p className="mt-6 max-w-2xl text-base md:text-lg text-slate-600">
   Gestión institucional simplificada para docentes y personal técnico del Instituto Tecnológico de Toluca. 
   Aparta material de aula en segundos y agiliza devoluciones en ventanilla
   </p>
  <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
  <a href="#solicitar" className="rounded-xl bg-blue-700 px-6 py-3.5 text-sm font-semibold text-white shadow-md transition-all hover:bg-blue-800">
   Solicitar prestamo 
  </a>
  <a href="#solicitar" className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:bg-slate-50">
   Ver proceso Paso a Paso
  </a>
  </div>
   </div>
   </section> 
  );
}
