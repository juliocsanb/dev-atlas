export default function Navbar() {
  return (
   <section className="flex flex-col min-h-[70vh] items-center justify-center px-6 text-center bg-slate-50 py-16">
    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-800 border border-blue-100">
        Sistema Oficial de Préstamo ITTOL
   </div>
   <h1 className="max-w-4xl text-4xl font-bold md:text-6xl text-slate-900 tracking-tight leading-tight">
    Prestamo Ágil de Equipo <br/>
    <span className="text-blue-600">
        Audiovisual y Cómputo
    </span>
     </h1>
   <p className="mt-6 max-w-2xl text-base md:text-lg text-slate-600">
   Gestión institucional simplificada para docentes y personal técnico del Instituto Tecnológico de Toluca. 
   Aparta material de aula en segundos y agiliza devoluciones en ventanilla
   </p>
   <div className="mt-8 flex flex-col sm:flex-row gap-4 items-center justify-center">
   <button className="rounded-xl bg-blue-900 hover:bg-blue-800 text-white px-6 py-3.5 text-sm font-medium shadow-md transition-all flex items-center gap-2">
Solicitar prestamo 
</button>
<button className="rounded-xl bg-white hover:bg-slate-100 text-slate-700 px-6 py-3.5 text-sm font-medium border border-slate-200 transition-all flex items-center gap-2">
Ver prestamo paso a paso 
</button>
</div>
   </section>
  )
}
