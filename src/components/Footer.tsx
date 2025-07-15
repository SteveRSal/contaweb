import React from 'react';

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white p-4 text-center">
    <p>© {new Date().getFullYear()} Reyes Ibarra y Asociados - Todos los derechos reservados</p>
  </footer>
);

export default Footer;
