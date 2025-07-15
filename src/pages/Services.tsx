import { motion } from "framer-motion"; // Necesitamos motion para las animaciones
import CatalogService from "../components/CatalogService";

export default function Services() {
  return (
    <main>
      <section 
        className="relative py-24 px-4 sm:py-32 flex items-center justify-center overflow-hidden" 
        style={{ 
          backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwk7t3brBcqYMaGpNy5GSh19Dbzqcni9A26A&s')", 
          backgroundSize: "cover", 
          backgroundPosition: "center" 
        }}
      >
        {/* Capa de superposición para que el texto sea legible */}
        <div className="absolute inset-0 bg-blue-900 opacity-75"></div>
        
        {/* Contenido del encabezado */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight"
          >
            Impulsa Tu Negocio con Nuestros <span className="text-teal-400">Servicios Expertos</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl font-light mb-10 opacity-90"
          >
            En **ContaReyes**, te ofrecemos soluciones contables, fiscales y financieras diseñadas para tu éxito. Explora cómo podemos acompañarte en cada paso.
          </motion.p>
        </div>
      </section>

      {/* Aquí es donde se cargarán los componentes de servicio individuales */}
      <section className="py-16 px-4 bg-gray-50">
        <CatalogService />
      </section>
    </main>
  );
}