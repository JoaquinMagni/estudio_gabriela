import React from 'react';

const Contacto = () => {
  return (
    <section className="p-6 max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-center">Contacto</h1>

      <div className="flex flex-col md:flex-row justify-between space-y-10 md:space-y-0 md:space-x-10">
        
        {/* Sección izquierda: Información de contacto y mapa */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Arroyito, Córdoba</h2>
          <p>San Martín 165, X2434 Arroyito, Córdoba, Argentina</p>
          <p>Email: info@amsar.com.ar</p>
          <p>Teléfono: +54 9 3576 449471</p>

          {/* Mapa */}
          <div className="mt-6">
            <iframe
              title="Mapa de ubicación"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.708571903047!2d-63.050393199999995!3d-31.4221545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94334dd754a7e4a3%3A0xc30d94c3a15917d!2sSan%20Martin%20165%2C%20X2434%20Arroyito%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1727894019951!5m2!1ses-419!2sar"
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Sección derecha: Formulario de contacto */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">Enviar un mensaje</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-2 font-semibold">Nombre</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Escribe tu nombre"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Correo Electrónico</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Escribe tu correo electrónico"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Ciudad</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Escribe tu ciudad"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Asunto</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Escribe el asunto"
              />
            </div>

            <div>
              <label className="block mb-2 font-semibold">Mensaje</label>
              <textarea
                rows="5"
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Escribe tu mensaje"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-900 transition"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
