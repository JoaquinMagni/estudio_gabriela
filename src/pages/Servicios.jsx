import React, { useState } from 'react';

const Servicios = () => {
  // Estado para controlar las secciones abiertas en cada título
  const [openSections, setOpenSections] = useState({
    0: 0,   // Primer subtítulo de "Diseño Arquitectónico" abierto por defecto
    1: 5,   // Primer subtítulo de "Dirección de Obra Ejecutiva" abierto por defecto
    2: 10,  // Primer subtítulo de "Construcción/Administración" abierto por defecto
    3: 14   // Primer subtítulo de "Diseño de Interiores" abierto por defecto
  });

  // Función para alternar el subtítulo abierto en cada título
  const toggleSection = (titleIndex, index) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [titleIndex]: prevOpenSections[titleIndex] === index ? null : index
    }));
  };

  return (
    <section className="p-6">
      <div className="flex flex-col space-y-12">

        {/* Diseño Arquitectónico */}
        <div className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-10">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">DISEÑO ARQUITECTÓNICO</h2>
            <div className="border-t border-gray-300 mb-10">
              {[
                { title: "Modelo con geolocalización", content: "El proyecto es ubicado en su sitio geográfico, y con las coordenadas se llevan a cabo los estudios de terreno, asoleamiento, vientos y eficiencia energética." },
                { title: "Cuantificación", content: "Cuantificación precisa del proyecto para optimización de recursos y costos." },
                { title: "Modelo tridimensional", content: "Visualización en 3D para asegurar la viabilidad y estética del diseño." },
                { title: "Comunicación", content: "Flujo constante de comunicación entre todas las partes involucradas." },
                { title: "Renders", content: "Imágenes renderizadas para simular el aspecto final del proyecto." }
              ].map((section, index) => (
                <div key={index}>
                  <button
                    className="flex justify-between w-full py-4 text-lg font-semibold"
                    onClick={() => toggleSection(0, index)}
                  >
                    {section.title}
                    <span>{openSections[0] === index ? '▲' : '▼'}</span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-1000 ease-in-out`}
                    style={{
                      maxHeight: openSections[0] === index ? '200px' : '0px'
                    }}
                  >
                    <div className="p-4 border-t border-gray-300 text-gray-600">
                      {section.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <img src="/servicios_1.png" alt="Servicios diseño arquitectónico" className="w-full h-auto rounded shadow" />
            </div>
          </div>

          {/* Dirección de Obra Ejecutiva */}
          <div className="w-full md:w-1/2 mt-10 md:mt-20">           

            <div className="mt-6">
              <img src="/servicios_2.png" alt="Servicios dirección de obra ejecutiva" className="w-full h-auto rounded shadow" />
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-10">DIRECCIÓN DE OBRA EJECUTIVA</h2>

            <div className="border-t border-gray-300">
              {[
                { title: "Certificación de obra", content: "Certificación de avances por rubro, facilitando el seguimiento de obra." },
                { title: "Controles de calidad", content: "Implementación de controles de calidad para asegurar estándares." },
                { title: "Cuantificación", content: "Estimación precisa de materiales para evitar sobrecostos." },
                { title: "Comunicación", content: "Comunicación para asegurar correcta ejecución en tiempo y forma." },
                { title: "Modelos 4D", content: "Modelado en 4D para visualizar tiempos y procesos de construcción." }
              ].map((section, index) => (
                <div key={index}>
                  <button
                    className="flex justify-between w-full py-4 text-lg font-semibold"
                    onClick={() => toggleSection(1, index + 5)}
                  >
                    {section.title}
                    <span>{openSections[1] === index + 5 ? '▲' : '▼'}</span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-1000 ease-in-out`}
                    style={{
                      maxHeight: openSections[1] === index + 5 ? '200px' : '0px'
                    }}
                  >
                    <div className="p-4 border-t border-gray-300 text-gray-600">
                      {section.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Construcción/Administración */}
        <div className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-10">
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">CONSTRUCCIÓN / ADMINISTRACIÓN</h2>
            <div className="border-t border-gray-300 mb-10">
              {[
                { title: "Seguimiento de acopio", content: "Monitoreo de materiales en cada fase del proyecto, asegurando disponibilidad y calidad." },
                { title: "Presupuestos, compras y entregas", content: "Gestión eficiente de recursos financieros, compras y entregas en obra." },
                { title: "Cash flow", content: "Flujo de caja para mantener el control financiero y asegurar sostenibilidad." },
                { title: "Entrega final para mantenimiento del edificio / casa", content: "Proceso de entrega final, incluyendo manuales de mantenimiento y conservación." }
              ].map((section, index) => (
                <div key={index}>
                  <button
                    className="flex justify-between w-full py-4 text-lg font-semibold"
                    onClick={() => toggleSection(2, index + 10)}
                  >
                    {section.title}
                    <span>{openSections[2] === index + 10 ? '▲' : '▼'}</span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-1000 ease-in-out`}
                    style={{
                      maxHeight: openSections[2] === index + 10 ? '200px' : '0px'
                    }}
                  >
                    <div className="p-4 border-t border-gray-300 text-gray-600">
                      {section.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <img src="/servicios_3.png" alt="Servicios construcción administración" className="w-full h-auto rounded shadow" />
            </div>
          </div>

          {/* Diseño de Interiores */}
          <div className="w-full md:w-1/2 mt-10 md:mt-20">

            <div className="mt-6">
              <img src="/servicios_4.png" alt="Servicios diseño de interiores" className="w-full h-auto rounded shadow" />
            </div>

            <h2 className="text-2xl font-bold mb-4 mt-10">DISEÑO DE INTERIORES</h2>
            <div className="border-t border-gray-300">
              {[
                { title: "Planificación y distribución", content: "Planificación de la distribución de espacios para asegurar comodidad y funcionalidad." },
                { title: "Selección de materiales", content: "Selección de materiales adecuados que garantizan durabilidad y estética." },
                { title: "Mobiliario personalizado", content: "Mobiliario diseñado a medida para ajustarse al estilo y necesidades del cliente." },
                { title: "Iluminación", content: "Soluciones de iluminación integradas para resaltar las características del diseño interior." }
              ].map((section, index) => (
                <div key={index}>
                  <button
                    className="flex justify-between w-full py-4 text-lg font-semibold"
                    onClick={() => toggleSection(3, index + 14)}
                  >
                    {section.title}
                    <span>{openSections[3] === index + 14 ? '▲' : '▼'}</span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-1000 ease-in-out`}
                    style={{
                      maxHeight: openSections[3] === index + 14 ? '200px' : '0px'
                    }}
                  >
                    <div className="p-4 border-t border-gray-300 text-gray-600">
                      {section.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;
