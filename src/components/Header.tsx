import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Reyes Ibarra y Asociados</h1>

        {/* Botón Hamburguesa */}
        <button
          className="md:hidden flex flex-col space-y-1"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
          <span className="w-6 h-0.5 bg-black"></span>
        </button>

        {/* Menú Desktop */}
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="hover:text-blue-500">
            Inicio
          </Link>
          <Link to="/about" className="hover:text-blue-500">
            Nosotros
          </Link>
          <Link to="/services" className="hover:text-blue-500">
            Servicios
          </Link>
          <Link to="/contact" className="hover:text-blue-500">
            Contacto
          </Link>
        </nav>
      </div>

      {/* Menú Mobile */}
      {isOpen && (
        <nav className="md:hidden bg-white shadow-md px-4 py-2 flex flex-col space-y-2">
          <Link
            to="/"
            className="hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Inicio
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Nosotros
          </Link>
          <Link
            to="/services"
            className="hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Servicios
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-500"
            onClick={() => setIsOpen(false)}
          >
            Contacto
          </Link>
        </nav>
      )}
    </header>
  );
}
