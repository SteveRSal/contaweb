import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">ContaReyes</h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-blue-500">Inicio</Link>
          <Link to="/about" className="hover:text-blue-500">Nosotros</Link>
          <Link to="/services" className="hover:text-blue-500">Servicios</Link>
          <Link to="/contact" className="hover:text-blue-500">Contacto</Link>
        </nav>
      </div>
    </header>
  )
}
