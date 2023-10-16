import React, { useState } from 'react';
import './MenuVertical.css';
import Modal from './Modal';

const CrearElecciones = () => {
  const initialState = {
    nuevoTipoEleccion: '',
    motivo: '',
    motivoPersonalizado: '',
    fechaInicio: '',
    fechaFin: '',
    fechaElecciones: ''
  };

  const [formData, setFormData] = useState(initialState);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleNuevoTipoEleccionChange = (e) => {
    const nuevoTipoEleccion = e.target.value;
    let motivo = '';
    let motivoPersonalizado = '';

    if (nuevoTipoEleccion === 'No') {
      // Si elige "No", limpiamos los valores de motivo y motivoPersonalizado
      motivo = '';
      motivoPersonalizado = '';
    }

    setFormData({
      ...formData,
      nuevoTipoEleccion,
      motivo,
      motivoPersonalizado,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleGuardarClick = () => {
    if (!formData.motivo || !formData.fechaInicio || !formData.fechaFin || !formData.fechaElecciones) {
      setModalMessage('Tiene que llenar todos los campos.');
      setShowModal(true);
      return;
    }

    const startDate = new Date(formData.fechaInicio);
    const endDate = new Date(formData.fechaFin);
    const electionsDate = new Date(formData.fechaElecciones);

    if (endDate <= startDate || electionsDate <= endDate) {
      setModalMessage('Ingrese un valor correcto para las fechas.');
      setShowModal(true);
      return;
    }

    setModalMessage(`El proceso electoral se inició de forma correcta para elegir a: ${formData.motivo}`);
    setShowModal(true);

    // Reiniciar el formulario
    setFormData(initialState);
  };

  return (
    <div className="crear-elecciones">
      <h3>Nuevo proceso electoral</h3>
      <div className="form-group">
        <label>¿Quiere iniciar un nuevo tipo de elección?</label>
        <select
          name="nuevoTipoEleccion"
          value={formData.nuevoTipoEleccion}
          onChange={handleNuevoTipoEleccionChange}
        >
          <option value="">Seleccione una opción</option>
          <option value="Si">Sí</option>
          <option value="No">No</option>
        </select>
      </div>
      {formData.nuevoTipoEleccion === 'Si' && (
        <div className="form-group">
          <label>Motivo:</label>
          <input
            type="text"
            name="motivo"
            value={formData.motivo}
            onChange={handleInputChange}
            placeholder="Ingrese el motivo"
            className="motivo-input"
          />
        </div>
      )}
      {formData.nuevoTipoEleccion === 'No' && (
        <div className="form-group">
          <label>Motivo:</label>
          <select
            name="motivo"
            value={formData.motivo}
            onChange={handleInputChange}
            className="motivo-input"
          >
            <option value="">Seleccione una opción</option>
            <option value="Rector">Rector, Vicerrector</option>
            <option value="Decano">Decano, Director Académico</option>
            <option value="Director de carrera">Director de carrera</option>
            <option value="Consejo de Facultad">Consejeros de Facultad</option>
            <option value="Consejo de carrera">Consejeros de carrera</option>
            <option value="Congreso nacional">Congreso nacional de universidades (Delegados docentes y estudiantes)</option>
            <option value="Conferencias d facultad">Conferencias de facultad (Delegados docentes y estudiantes)</option>
            <option value="Consejo universitario">Honorable consejo universitario (Delegados docentes y estudiantes)</option>
            <option value="Congreso universitario">Congreso universitario (Delegados docentes y estudiantes)</option>
          </select>
        </div>
      )}
      <div className="form-group">
        <label>Fecha inicio de convocatoria:</label>
        <input
          type="date"
          name="fechaInicio"
          value={formData.fechaInicio}
          min={new Date().toISOString().split('T')[0]}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Fecha fin de convocatoria:</label>
        <input
          type="date"
          name="fechaFin"
          value={formData.fechaFin}
          min={formData.fechaInicio}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Fecha de las elecciones:</label>
        <input
          type="date"
          name="fechaElecciones"
          value={formData.fechaElecciones}
          min={formData.fechaFin}
          onChange={handleInputChange}
        />
      </div>
      <button className="volver-button">Volver</button>
      <button className="guardar-button" onClick={handleGuardarClick}>
        Guardar
      </button>
      {showModal && (
        <Modal
          mensaje={modalMessage}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
};

export default CrearElecciones;