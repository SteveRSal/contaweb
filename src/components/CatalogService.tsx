import { motion } from 'framer-motion'

const services = [
  {
    title: "Contabilidad Fiscal y Cumplimiento",
    description: "Manejo experto de impuestos, facturación electrónica y cumplimiento de todas las obligaciones fiscales para tu tranquilidad.",
    img: "https://images.unsplash.com/photo-1579621970795-87facc2f976d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MjI0Mjh8MHwxfHNlYXJjaHwxOXx8dGF4JTIwYWNjb3VudGluZ3xlbnwwfHx8fDE3MjEwNjYzMDd8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    title: "Asesoría Financiera Estratégica",
    description: "Desarrollo de planes estratégicos para optimizar el rendimiento financiero y fomentar un crecimiento sostenible de tu negocio.",
    img: "https://intic.io/wp-content/uploads/2024/02/Blog_Asesoria_Financiera_Estrategica_INTIC_04.jpg",
  },
  {
    title: "Auditorías Contables Profesionales",
    description: "Revisiones contables exhaustivas y transparentes para asegurar la fiabilidad de tu información financiera y el cumplimiento normativo.",
    img: "https://icorp.com.mx/wp-content/uploads/2023/02/Auditorias-en-TI-un-beneficio-a-corto-plazo-copia.webp",
  },
  {
    title: "Servicios Legales Corporativos",
    description: "Gestión de contratos, libros corporativos, juntas de accionistas y cumplimiento de normativas inter-compañía.",
    img: "https://vag-global.com/wp-content/uploads/2024/11/servicios-legales-corporativos.jpg",
  },
  {
    title: "Conciliaciones Bancarias y Cuentas",
    description: "Preparación de conciliaciones bancarias y limpieza detallada de cuentas para una visión financiera precisa.",
    img: "https://www.captio.net/hs-fs/hub/260057/file-2127365073-jpg/Imatges/Conciliacion_bancaria_4_consejos_para_complicarla.jpg",
  },
  {
    title: "Informes Financieros NIIF",
    description: "Elaboración de estados financieros (Resultados, Flujo de Efectivo, Posición Financiera) conforme a las Normas Internacionales de Información Financiera (NIIF).",
    img: "https://despachocontablemexico.com.mx/wp-content/uploads/2021/11/nif.png.webp",
  },
  {
    title: "Gestión Fiscal y Declaraciones",
    description: "Registro ante autoridad fiscal, elaboración y presentación de declaraciones fiscales e informativas (incluido ISSIF).",
    img: "https://sw.com.mx/hs-fs/hubfs/Imported_Blog_Media/Claves-en-la-administracion-fiscal-para-tu-empresa-P.png?width=900&height=480&name=Claves-en-la-administracion-fiscal-para-tu-empresa-P.png",
  },
  {
    title: "Recuperación de Impuestos y Trámites",
    description: "Asesoría y asistencia para la recuperación de impuestos federales y gestión de trámites de aviso de compensación.",
    img: "https://taxstrategy.com.ec/wp-content/uploads/2020/05/1498220997201_7.jpg",
  },
  {
    title: "Contabilidad Electrónica y Diferidos",
    description: "Implementación y soporte de contabilidad electrónica, gestión de impuestos diferidos y optimización de procesos.",
    img: "https://www.soyconta.com/wp-content/uploads/2020/09/contabilidad_electronica.jpg",
  },
  {
    title: "Soporte de Tesorería y Pagos",
    description: "Gestión de pagos a proveedores, administración de nómina, facturación y control de cuentas por pagar y por cobrar.",
    img: "https://novicap.com/assets/uploads/2020/04/presupuesto-tesoreria.jpg",
  },
  {
    title: "Reportes Financieros Detallados",
    description: "Elaboración de informes financieros claros y concisos para una toma de decisiones informada y estratégica.",
    img: "https://ceconsulting.es/wp-content/uploads/2023/12/informe-estados-financieros-640x427.jpg", 
  },
];

export default function CatalogService() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-center">Servicios</h2>
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
