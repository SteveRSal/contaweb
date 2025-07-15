import { motion } from 'framer-motion'

const testimonials = [
  {
    name: "Carlos P.",
    text: "Reyes Ibarra y Asociados ha manejado mi contabilidad impecable. Siempre claros y confiables.",
  },
  {
    name: "Laura G.",
    text: "Su equipo es muy profesional, resuelven rápido y siempre están disponibles.",
  },
  {
    name: "Roberto M.",
    text: "Gracias a su asesoría he optimizado mis finanzas personales y empresariales.",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-white py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Testimonios</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div 
            key={i}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-gray-100 rounded-lg p-6 shadow-md"
          >
            <p className="text-gray-700 italic">"{t.text}"</p>
            <h3 className="mt-4 font-semibold">{t.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
