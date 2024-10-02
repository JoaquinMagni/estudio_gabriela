import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      {/* Contenedor para organizar el contenido */}
      <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-between items-center sm:items-start sm:justify-between sm:flex-nowrap space-y-8 sm:space-y-0">
        {/* Sección de la izquierda: Logotipo y redes sociales */}
        <div className="flex flex-col items-center sm:items-start w-full sm:w-1/2 lg:w-1/3 mb-6 sm:mb-0">
          <h2 className="text-xl font-bold mb-4">ARQUITECTA GABRIELA MAGNI</h2>
          {/* Redes sociales */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-youtube fa-lg"></i>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-pinterest fa-lg"></i>
            </a>
          </div>
        </div>

        {/* Sección de la derecha: Información de contacto */}
        <div className="flex flex-col items-center sm:items-start w-full sm:w-1/2 lg:w-1/3">
          <h2 className="text-xl font-bold mb-4">Contacto</h2>
          <ul className="text-center sm:text-left">
            <li>San Martín 165. Arroyito, Córdoba, Argentina</li>
            <li>Email: gm@arquitectura.com.ar</li>
            <li>Teléfono: +54 9 3576 449471</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
        <p>&copy; 2024 GM Arquitecta. Todos los derechos reservados.</p>
        <p>Sitio web diseñado por <span className="text-red-500">JM Dev.</span></p>
      </div>
    </footer>
  );
};

export default Footer;
