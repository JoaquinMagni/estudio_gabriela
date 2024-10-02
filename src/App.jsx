import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Inicio from './pages/Inicio';
import Footer from './components/Footer';
import Estudio from './pages/Estudio';
import Proyectos from './pages/Proyectos';
import Servicios from './pages/Servicios';
import Contacto from './pages/Contacto';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      {/* Flexbox aplicado al contenedor principal */}
      <div className="flex flex-col min-h-screen">
        {/* Navbar fijo en la parte superior */}
        <Navbar />
        
        {/* El contenido principal crece para ocupar el espacio disponible */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/estudio" element={<Estudio />} />
            <Route path="/proyectos" element={<Proyectos />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        
        {/* Footer siempre al final */}
        <Footer />

        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
