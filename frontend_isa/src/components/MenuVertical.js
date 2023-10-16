import React, { useState } from 'react';
import './MenuVertical.css';
import Logo from './logo.png';
import CrearElecciones from './CrearElecciones';
import Inicio from './Inicio';
import VerElecciones from './VerElecciones';  // Importa el componente VerElecciones

const MenuVertical = () => {
  const [mostrarCrearEleccion, setMostrarCrearEleccion] = useState(false);
  const [mostrarInicio, setMostrarInicio] = useState(true);  // Mostrar Inicio por defecto
  const [mostrarVerElecciones, setMostrarVerElecciones] = useState(false);  // Estado para mostrar VerElecciones

  const handleCrearEleccionClick = () => {
    setMostrarCrearEleccion(true);
    setMostrarInicio(false);
    setMostrarVerElecciones(false);  // Oculta VerElecciones al hacer clic en Crear Elección
  };

  const handleInicioClick = () => {
    setMostrarCrearEleccion(false);
    setMostrarInicio(true);
    setMostrarVerElecciones(false);  // Oculta VerElecciones al hacer clic en Inicio
  };

  const handleVerEleccionesClick = () => {
    setMostrarCrearEleccion(false);
    setMostrarInicio(false);
    setMostrarVerElecciones(true);  // Muestra VerElecciones al hacer clic en Ver Elecciones Activas
  };

  return (
    <div className="menu-container">
      <div className="menu-vertical">
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <h1>Administrador de Elecciones</h1>
          <h2>FCyT</h2>
        </div>
        <div className="menu-buttons">
          <button className={`menu-button ${mostrarInicio ? 'active' : ''}`} onClick={handleInicioClick}>
            Inicio
          </button>
          <button className={`menu-button ${mostrarCrearEleccion ? 'active' : ''}`} onClick={handleCrearEleccionClick}>
            Crear Elección
          </button>
          <button className="menu-button" onClick={handleVerEleccionesClick}>
            Ver Elecciones Activas
          </button>
        </div>
      </div>
      <div className="menu-content">
        {mostrarCrearEleccion && <CrearElecciones />}
        {mostrarInicio && <Inicio />}
        {mostrarVerElecciones && <VerElecciones />}  {/* Mostrar VerElecciones si mostrarVerElecciones es true */}
      </div>
    </div>
  );
};

export default MenuVertical;
