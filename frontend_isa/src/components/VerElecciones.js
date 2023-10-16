import React from 'react';
import './MenuVertical.css';
/*const VerElecciones = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Cargo(s) a elección</th>
          <th>Fecha</th>
          <th>Detalle</th>
          <th>Convocatoria</th>
        </tr>
      </thead>
      <tbody>
        
      </tbody>
    </table>
  );
};

export default VerElecciones;*/



const VerElecciones = () => {
  const numRows = 4; // Número de filas

  const handleVerDetalleClick = () => {
    
    console.log('Ver detalle');
  };

  // array con el número de filas
  const rows = Array.from(Array(numRows), (_, index) => (
    <tr key={index}>
      <td>Cargo a elección {index + 1}</td>
      <td>Fecha {index + 1}</td>
      <td>
      <button onClick={handleVerDetalleClick} className="ver-detalle-button">
          Ver Detalle
        </button>
      </td>
      <td>
        <button onClick={handleVerDetalleClick}className="ver-detalle-button">Ver Convocatoria</button>
        </td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Cargo(s) a elección</th>
          <th>Fecha</th>
          <th>Detalle</th>
          <th>Convocatoria</th>
        </tr>
      </thead>
      <tbody>
        {rows} {}
      </tbody>
    </table>
  );
};

export default VerElecciones;
