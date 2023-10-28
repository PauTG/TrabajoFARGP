import React from 'react';
import { useParams } from 'react-router-dom';

const DetallesTarea = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Detalles de la Tarea {id}</h2>
    </div>
  );
};

export default DetallesTarea;
