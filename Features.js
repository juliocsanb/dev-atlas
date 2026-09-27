function FeatureCard ({numero, titulo, descripcion, icono }){
    return(
<article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
<div className="flex items-center justify-between">
<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-2xl">
 {icono}
</div>
<span className="text-3xl font-bold text-blue-100">
{numero}
</span>
</div>
<h3 className="mt-5 text-xl font-bold text-slate-900">
{titulo}
</h3>
<p className="mt-3 text-sm leading-relaxed text-slate-600">
{descripcion}
</p>
</article>
    );
}
export default function Features() {
    return(
      <section id="funcion" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
    <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
     Guía paso a paso
    </span>
    <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
      ¿Cómo funciona el sistema de préstamos?
    </h2>
    <p className="mt-4 text-slate-600">
      Sigue estos sencillos pasos para solicitar, recoger y devolver 
      el equipo audiovisual que necesitas para tus clases.
    </p>
      </div>
      <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
      <FeatureCard numero="01"
      icono="📝"
      titulo="Solicita en línea"
      descripcion="Ingresa tus datos, selecciona el equipo que necesitas y establece el horario en el que deseas recogerlo."/>
        <FeatureCard numero="02"
        icono="📦"
        titulo="Recoge en ventanilla"
        descripcion="Acude al módulo de audiovisuales y presenta tu folio o código de préstamo para recibir el equipo."/>
        <FeatureCard numero="03"
        icono="🔄"
        titulo="Usa y devuelve"
        descripcion="Utiliza el equipo durante tu clase y devuélvelo en el horario indicado para cerrar tu préstamo."/>
      </div>

        </section> 
            );
            }
