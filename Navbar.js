export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b bg-white px-8 py-5 shadow-sm">
     <div className="flex items-center gap-2">
      <img  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBB_5-XyAK-MP4wa2alaYICghn1Ybhn8kYHWqXDQgAVBthCrksk4JUiXJv4KdJJ18bU1U-iTwMR3xQDbdzQ0xlGj6jU8eLks-6G1jED7xllJ1DcLXZRqTCnjuMl_fDy9obl-wIEvob5ZWOSOE2wFFI33ysBb26PaIzzDt9sy0Bu6c0YWWbdoQ7RVDp21nE9SWnn-ATmap9iwipX_rAJrllkbm7F8dHEHOaaBI74HBsUbHBCKv06-UWkpzZfrUmIVlUHLw"
          alt="Escudo del Instituto Tecnológico de Toluca"
          className="h-10 w-auto object-contain"
        />
        <div className="h-8 border-l border-slate-200"> </div>
       <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEqDMnj3yDS1n8d0YMDJjxmaOoDRUl1dV4nQtXlDq9tis_l6WtcGQzQe-LvZzdK0du43I2tdyg4edIzcngnpz8MeutkflQz26MS2YgKaqdIwSSTIZK0yOVgCkgS1kDTNEpNAolKp88XjGfFmOU6dqilrRs9hQ-ncawjWm7tAReHlhWxCeKFrB3WyiBn4foHFEciqFr1921q7-7jDdblW0RJ18UeL2hkQ1OgnBXKRVjWnxrVfDkM6YgD_rgnLeu7XtCOw"
          alt="Emblema Halcón ITTOL"
          className="h-10 w-auto object-contain"
        /> 
        <div className="ml-2 flex flex-col">
        <span className="text-[10px] font-bold uppercase text-blue-900">
            TecNM Toluca <br/>
        </span>
        <span className="text-xs font-bold text-slate-800">
            Sistema de Préstamos Alcones
        </span>
     </div>
     </div>
      <div className="hidden items-center gap-2 text-xs font-medium text-slate-600 md:flex">
        <a href="#inicio" className="rounded-full bg-blue-700 px-4 py-2 font-bold text-white shadow-sm">
            inicio
        </a>
        </div>
        <div className="hidden items-center gap-5 text-xs font-medium text-slate-600 md:flex">
        <a href="#solicitar" className="hover:text-blue-700 transition-colors">
          Solicitar <br/>
          Préstamo
        </a>
        </div>
        <div className="hidden items-center gap-5 text-xs font-medium text-slate-600 md:flex">
        <a href="#funcion" className="hover:text-blue-700 transition-colors">
            ¿Cómo <br/>
            funciona?
        </a>
        </div>
        <div className="hidden items-center gap-5 text-xs font-medium text-slate-600 md:flex">
        <a href="#reportar" className= "hover:text-blue-700 transition-colors">
             Reportar <br/>
             Averio
        </a> 
        </div>
        <div className="hidden items-center gap-5 text-xs font-medium text-slate-600 md:flex">
        <a href="#soporte" className="hover:text-blue-700 transition-colors">Soporte
        </a>
      </div>
      <div className="hidden items-center gap-3 md:flex">
        <div className="flex items-center gap-1 rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-[10px] font-bold text-orange-600">
        <span className="rounded-full bg-orange-100 px-1.5 py-0.5 text-[8px]">
          SEGURO
        </span>
        </div>
        <div className="flex items-center gap-2">
         <div className="text-right">
          <p className="text-xs font-bold text-blue-700">
           Docente
          </p>
          <p className="text-[10px] font-semibold text-emerald-600">
              °estado
          </p>
          <p className="text-[5px] text-slate-500">
            Ing. Sistemas <br/>
            Computacionales
          </p>
         </div>
         <img
            src="https://lh3.googleusercontent.com/aida/AEtjO1Wd_VNN_Dosg-iPi1AGkrQrcvOocM5ab99J-6007Pqru_Y810HMfU61N0Qqf6gCUEPWPY3-g8Omh2t6p_ES2Gy29Owg7tvm0OXtPGgxTdYtrBeHU3rSKNMA66_nTzd2qWE0HTMrdAPy_3CdchoDQTQViBKQpfBbpaNq-waaNJYEIXrPU9lOb5UdapW13HJ_DqnmQ1MMuGCClabH6_4klYWgIm-fLWr0_nKWSyn8Eeh9YwhX1gUN-ccsbw"
            alt="Avatar del docente"
            className="h-9 w-9 rounded-full object-cover ring-2 ring-blue-200"
          />
        </div>
        </div>
    </nav>
  );
}

