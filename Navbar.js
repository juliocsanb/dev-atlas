export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-6  bg-white shadow-sm sticky border-b">
     <div className="flex items-center gap-2">
        <span className="font-bold text-lg text-blue-900">
            ITTOL
        </span>
        <span className="text-xs text-slate-500 hidden md:inline">
            Sistema de Préstamos 
        </span>
     </div>
      <div className="flex items-center gap-6 text-sm font-medium text-slate-700">
        <a href="#inicio" className="text-blue-600 font-semibold bg-blue-50 px-3 py-1.5 rounded-full">
            inicio
        </a>
        <a href="#solicitar" className="hover:text-blue-600 transition-colors">
          Solicitar Préstamo
        </a>
        <a href="#funcion" className="hover:text-blue-600 transition-colors">
            ¿Cómo funciona?
        </a>
        <a href="#reportar" className= "hover:text-blue-600 transition-colors">
             Reportar Averio
        </a> 
        <a href="#soporte" className="hover:text-blue-600 transition-colors">Soporte
        </a>
      </div>
    </nav>
  );
}
