import React, { useState, useEffect } from 'react';

const Inicio = () => {
  // Estado para el índice de la imagen actual
  const [currentImage, setCurrentImage] = useState(0);

  // Lista de imágenes del carrusel
  const images = [
    '/banner_1.jpg',
    '/banner_2.jpg',
    '/banner_3.jpg',
    '/banner_4.jpg',
    '/banner_5.jpg',
    '/banner_6.jpg'
  ];

  // Cambiar a la siguiente imagen automáticamente cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage();
    }, 5000); // Cambia cada 5 segundos

    // Limpiar el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [currentImage]);

  // Función para avanzar a la siguiente imagen
  const nextImage = () => {
    setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Función para retroceder a la imagen anterior
  const prevImage = () => {
    setCurrentImage((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <section>
      {/* Carrusel */}
      <div className="relative w-full h-[75vh] overflow-hidden">
        {/* Imagen actual del carrusel con transición */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Banner ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out
              ${currentImage === index ? 'opacity-100' : 'opacity-0'}`}
            style={{ transition: 'opacity 1s ease-in-out' }} // Transición suave de 1 segundo
          />
        ))}

        {/* Flecha izquierda */}
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-4 z-10"
          onClick={prevImage}
        >
          &#8249;
        </button>

        {/* Flecha derecha */}
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-4 z-10"
          onClick={nextImage}
        >
          &#8250;
        </button>
      </div>

      {/* Indicadores tipo "bullets" (Ahora fuera del carrusel, debajo) */}
      <div className="flex justify-center space-x-3 mt-4">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full transition-all duration-1000 ease-in-out ${
              currentImage === index ? 'bg-yellow-400' : 'bg-gray-900'
            }`}
          />
        ))}
      </div>

      {/* Texto debajo del carrusel */}
      <div className="p-6 text-center mt-10">
        <h1 className="text-4xl font-bold">Bienvenido a la Página de Inicio</h1>
        <p className="mt-10">Esta es la sección principal de nuestra página web.</p>
        <p className="mt-10">Contenido adicional para probar el scroll...</p>
        <p className="mt-10">Contenido adicional para probar el scroll...</p>
        <p className="mt-10">Contenido adicional para probar el scroll...</p>
        <p className="mt-10">Contenido adicional para probar el scroll...</p>
        <p className="mt-10">Contenido adicional para probar el scroll...</p>
      </div>

    </section>
  );
};

export default Inicio;
