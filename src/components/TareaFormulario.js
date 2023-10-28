import React, { useState } from 'react';

const TareaFormulario = ({ agregarTarea }) => {
  const [nuevaTarea, setNuevaTarea] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nuevaTarea.trim() !== '') {
      agregarTarea(nuevaTarea);
      setNuevaTarea('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribila acá"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button type="submit">+</button>
    </form>
  );
};

export default TareaFormulario;
