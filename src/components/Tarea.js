import React from 'react';

const Tarea = ({ tarea, marcarComoCompletada, eliminarTarea }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={tarea.completada}
        onChange={() => marcarComoCompletada(tarea.id)}
      />
      <span className={tarea.completada ? 'completada' : ''}>{tarea.texto}</span>
      <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
    </li>
  );
};

export default Tarea;
