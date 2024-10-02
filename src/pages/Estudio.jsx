import React from 'react';

const Estudio = () => {
  return (
    <section className="p-6 max-w-screen-xl mx-auto">
      <div className="flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-8">
        
        {/* Sección izquierda: Descripción */}
        <div className="lg:w-1/2">
        <h1 className="text-4xl font-bold mb-4">LOGO</h1>
          <p className="text-lg mb-4">
            Somos un estudio especializado en diseños premium de residencias, edificios de vivienda y comerciales.
            Con gran experiencia en el ámbito de la construcción, lo que nos permite proyectar con una alta calidad en 
            la resolución espacial y cada uno de los detalles. Abordamos todas las fases de una obra de arquitectura, 
            Proyecto – Dirección – Administración y Construcción.
          </p>
          <p className="text-lg mb-4">
            En un mundo en donde los sueños parecen inalcanzables, en el mejor diseño de la arquitectura es posible 
            convertirlos en realidad. Trabajamos con una actitud de excelencia para brindar siempre la mejor experiencia
            a nuestros clientes.
          </p>
          <p className="text-lg">
            Nuestro enfoque en la sostenibilidad, el uso eficiente de los recursos y el diseño de gran calidad 
            nos permiten entregar proyectos a nuestros clientes que marcan la diferencia.
          </p>

          {/* Botón para Certificaciones */}
          <div className="mt-8">
            <a 
              href="/certificaciones" 
              className="bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-900 transition text-center"
            >
              Certificaciones
            </a>
          </div>
        </div>

        {/* Sección derecha: Imagen */}
        <div className="lg:w-1/2">
          <img
            src="/arquitecta.jpg"
            alt="Arquitecta Gabriela Magni"
            className="rounded-lg shadow-lg object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Estudio;
