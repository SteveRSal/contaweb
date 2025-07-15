import { motion } from 'framer-motion';
import { EnvelopeIcon, PhoneIcon, MapPinIcon, GlobeAltIcon } from '@heroicons/react/24/solid';

export default function Contact() {
  // Puedes reemplazar esta URL con tu endpoint de Formspree o Netlify Forms
  const FORM_ACTION_URL = "YOUR_FORMSPREE_OR_NETLIFY_FORM_ENDPOINT_HERE";

  return (
    <main className="py-16 px-4 bg-gray-50">
      <section className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden md:flex md:flex-row-reverse">
        {/* Lado del Formulario (Derecha) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 p-8 md:p-12 bg-blue-50" // Fondo más claro para el formulario
        >
          <h2 className="text-4xl font-extrabold text-blue-800 mb-6 text-center md:text-left">
            Envíanos un <span className="text-teal-600">Mensaje</span>
          </h2>
          <p className="text-gray-700 mb-8 text-center md:text-left">
            ¿Tienes alguna duda o necesitas asesoría? ¡Contáctanos y nuestro equipo te responderá a la brevedad!
          </p>

          <form action={FORM_ACTION_URL} method="POST" className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nombre Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo Electrónico</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                placeholder="tu.correo@ejemplo.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono (Opcional)</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                placeholder="Ej. +52 55 1234 5678"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Tu Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition duration-200"
                placeholder="Describe tu consulta..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105"
            >
              Enviar Mensaje
            </button>
          </form>
        </motion.div>

        {/* Lado de Información de Contacto (Izquierda) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 p-8 md:p-12 bg-blue-700 text-white flex flex-col justify-center"
        >
          <h2 className="text-4xl font-extrabold mb-8">
            Datos de <span className="text-teal-300">Contacto</span>
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Estamos listos para atenderte. Elige el medio que mejor se adapte a ti:
          </p>

          <div className="space-y-6">
            {/* Correo Electrónico */}
            <div className="flex items-center text-lg">
              <EnvelopeIcon className="h-7 w-7 text-teal-300 mr-4 flex-shrink-0" />
              <div>
                <span className="block font-semibold">Email:</span>
                <a href="mailto:carlospavis3@gmail.com" className="text-blue-100 hover:text-white transition-colors duration-200">
                  carlospavis3@gmail.com
                </a>
              </div>
            </div>

            {/* WhatsApp / Teléfono */}
            <div className="flex items-center text-lg">
              <PhoneIcon className="h-7 w-7 text-teal-300 mr-4 flex-shrink-0" />
              <div>
                <span className="block font-semibold">WhatsApp / Teléfono:</span>
                <a href="https://wa.me/525533996255" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors duration-200">
                  +52 55 3399 6255 (Clic para WhatsApp)
                </a>
                <span className="block text-sm text-blue-200 mt-1">Lunes a Viernes de 9 AM a 6 PM (CST)</span>
              </div>
            </div>

            {/* Dirección (Opcional, si aplica) */}
            <div className="flex items-start text-lg">
              <MapPinIcon className="h-7 w-7 text-teal-300 mr-4 flex-shrink-0 mt-1" />
              <div>
                <span className="block font-semibold">Nuestras Oficinas:</span>
                <p className="text-blue-100">
                  Jocoque 24, Pedregal de Santo Domingo,<br /> Coyoacán, 04369 Ciudad de México, CDMX
                </p>
                <a 
                  href="https://www.google.com/maps/place/Jocoque+24,+Pedregal+de+Santo+Domingo,+Coyoac%C3%A1n,+04369+Ciudad+de+M%C3%A9xico,+CDMX/@19.3289704,-99.1713982,17z/data=!3m1!4b1!4m6!3m5!1s0x85ce00190e5b3137:0xd3b45133b02e904f!8m2!3d19.3289704!4d-99.1713982!16s%2Fg%2F11cpnv_ckr?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-blue-200 hover:text-white text-sm mt-2 inline-flex items-center transition-colors duration-200"
                >
                  Ver en Google Maps <GlobeAltIcon className="h-4 w-4 ml-1" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}