import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Asistencia from "@/components/Asistencia";
import Footer from "@/components/Footer";
import Incidencias from "@/components/Incidencias";
export default function Home() {
  return (
    <main >
    <Navbar />
    <Hero />
    <Features />
    <Incidencias/>
    <Asistencia />
    <Footer/>
   </main>  
  );
}
