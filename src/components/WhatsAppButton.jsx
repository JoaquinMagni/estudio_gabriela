import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/+5493576449471" // Reemplaza con tu número de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg"
      style={{ zIndex: 50 }} // Aseguramos que el botón esté sobre otros elementos
    >
      {/* Ícono de WhatsApp usando FontAwesome */}
      <i className="fab fa-whatsapp fa-2x"></i>  {/* Ícono de FontAwesome */}
    </a>
  );
};

export default WhatsAppButton;