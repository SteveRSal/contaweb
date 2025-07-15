import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function CallToAction() {
  return (
    <motion.section
      whileInView={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5 }}
      className="bg-blue-600 text-white py-16 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para llevar tu contabilidad al siguiente nivel?</h2>
      <p className="mb-8">Contáctanos hoy y obtén una asesoría gratuita.</p>
      <Link 
        to="/contact"
        className="inline-block bg-white text-blue-600 font-bold px-6 py-3 rounded-full hover:bg-gray-100 transition"
      >
        Contáctanos
      </Link>
    </motion.section>
  )
}
