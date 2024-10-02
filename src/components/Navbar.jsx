import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Obtenemos la ruta actual

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-gray-900 text-white h-32 flex items-center justify-between px-6">
      {/* Logo o título, ocupa el 25% */}
      <div className="flex justify-center items-center h-full text-4xl font-bold w-2/12 sm:w-3/12 z-50 mr-10">LOGO</div>

      {/* Links del menú (ocupan el espacio restante) */}
      <nav className="hidden sm:flex w-9/12 justify-between xl:pr-8 sm:gap-x-1 md:gap-x-2 text-xl">
        <Link to="/" className={`${isActive('/') ? 'text-yellow-400' : 'hover:text-yellow-400'} text-lg md:text-xl`}>Inicio</Link>
        <Link to="/estudio" className={`${isActive('/estudio') ? 'text-yellow-400' : 'hover:text-yellow-400'} text-lg md:text-xl`}>Estudio</Link>
        <Link to="/proyectos" className={`${isActive('/proyectos') ? 'text-yellow-400' : 'hover:text-yellow-400'} text-lg md:text-xl`}>Proyectos</Link>
        <Link to="/servicios" className={`${isActive('/servicios') ? 'text-yellow-400' : 'hover:text-yellow-400'} text-lg md:text-xl`}>Servicios</Link>
        <Link to="/contacto" className={`${isActive('/contacto') ? 'text-yellow-400' : 'hover:text-yellow-400'} text-lg md:text-xl`}>Contacto</Link>
      </nav>

      {/* Botón de menú hamburguesa para pantallas pequeñas */}
      <div className="sm:hidden z-50">
        <button onClick={toggleMenu} className="text-white text-3xl focus:outline-none">
          {/* Icono de menú hamburguesa siempre visible */}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Menú desplegable (solo visible en pantallas pequeñas) */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900 z-40 flex flex-col items-center justify-center space-y-6">
          <Link to="/" className="text-2xl hover:text-yellow-400" onClick={toggleMenu}>Inicio</Link>
          <Link to="/estudio" className="text-2xl hover:text-yellow-400" onClick={toggleMenu}>Estudio</Link>
          <Link to="/proyectos" className="text-2xl hover:text-yellow-400" onClick={toggleMenu}>Proyectos</Link>
          <Link to="/servicios" className="text-2xl hover:text-yellow-400" onClick={toggleMenu}>Servicios</Link>
          <Link to="/contacto" className="text-2xl hover:text-yellow-400" onClick={toggleMenu}>Contacto</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
