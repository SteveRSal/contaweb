import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid"; 

export default function About() {
  return (
    <main className="relative py-20 px-4 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-50 -z-10"></div>
      
      <motion.div
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="relative z-10 p-6 md:p-8 bg-white bg-opacity-95 rounded-xl shadow-2xl backdrop-blur-sm"
      >
        <h1 className="text-5xl md:text-6xl font-extrabold mb-8 text-blue-900 leading-tight">
          Sobre <span className="text-teal-600">Nosotros</span>
        </h1>

        <p className="mb-8 text-xl text-gray-700 leading-relaxed">
          En <strong className="text-blue-700">Reyes Ibarra y Asociados</strong> somos un equipo de profesionales comprometidos 
          en ofrecer soluciones contables, fiscales y administrativas 
          que respaldan y fortalecen a nuestros clientes.
        </p>

        <div className="space-y-10">
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold mb-3 text-blue-700 flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-2" /> Nuestra Misión
            </h2>
            <p className="text-gray-700">
              Brindar servicios contables integrales y personalizados 
              con altos estándares de calidad, facilitando decisiones claras y seguras.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold mb-3 text-blue-700 flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-2" /> Nuestra Visión
            </h2>
            <p className="text-gray-700">
              Ser la firma contable de confianza líder en el país, 
              reconocida por su ética, innovación y compromiso.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="p-5 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-700 flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-blue-500 mr-2" /> Nuestros Valores
            </h2>
            <ul className="space-y-3">
              {["Confianza", "Responsabilidad", "Integridad", "Transparencia", "Calidad"].map((valor) => (
                <li key={valor} className="flex items-center text-gray-700 text-lg">
                  <CheckCircleIcon className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0" />
                  {valor}
                </li>
              ))}
            </ul>
          </motion.section>
        </div>
      </motion.div>

      {/* Imagen decorativa con un toque de elevación */}
      <motion.div
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="hidden md:block relative z-0"
      >
        <img
          src="https://www.auditool.org/images/siete-estrategias-eventos-subsecuentes-estados-financieros.png"
          alt="Profesionales de Contabilidad"
          className="rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-in-out border-4 border-blue-100"
        />
      </motion.div>
    </main>
  );
}