import { motion } from 'framer-motion'

const services = [
  {
    title: "Contabilidad Fiscal",
    description: "Manejo de impuestos, facturación y cumplimiento legal.",
    img: "https://emprendepyme.net/wp-content/uploads/2023/03/contabilidad-impuestos.jpg",
  },
  {
    title: "Asesoría Financiera",
    description: "Planes estratégicos para crecimiento y optimización.",
    img: "https://infofinanciera.es/wp-content/uploads/2023/02/asesoria-financiera-zaragoza.jpeg",
  },
  {
    title: "Auditorías",
    description: "Revisiones contables profesionales y transparentes.",
    img: "https://universidadeuropea.com/resources/media/images/auditoria-financiera-800x450.width-640.jpg",
  },
]

export default function ServiceCards() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center">Servicios A la Medida</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img src={s.img} alt={s.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
