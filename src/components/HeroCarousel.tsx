import { motion } from 'framer-motion'

export default function HeroCarousel() {
  return (
    <section className="relative w-full h-[70vh] overflow-hidden bg-gray-800 text-white">
      <img 
        src="https://ieu.edu.mx/wp-content/uploads/2020/10/Licenciatura-en-Contadur%C3%ADa-y-Finanzas_IEU_portada.jpg"
        alt="Banner"
        className="w-full h-full object-cover opacity-40"
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Bienvenido a ContaReyes
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xl mb-4 text-lg md:text-xl"
        >
          Servicios profesionales en Contabilidad, Fiscal, Finanzas y Administración.
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-xl mb-6 text-lg md:text-xl"
        >
          Soluciones claras a desafíos complejos.
        </motion.p>

        <motion.a 
          href="contact"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-full hover:bg-gray-200 transition"
        >
          Contáctanos
        </motion.a>
      </div>
    </section>
  )
}
