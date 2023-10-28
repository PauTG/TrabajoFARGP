import React, { useState, useEffect } from 'react';
import Tarea from './Tarea';
import TareaFormulario from './TareaFormulario'; 
import { Link } from 'react-router-dom';


 <Link to="/tarea">Ver detalles de Tarea 1</Link>

const ListaTareas = () => {

 
  const [tareas, setTareas] = useState([]);


  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: Date.now(),
      texto: texto,
      completada: false,
    };
    setTareas([...tareas, nuevaTarea]);
  };


  const marcarComoCompletada = (id) => {
    const tareasActualizadas = tareas.map((tarea) =>
      tarea.id === id ? { ...tarea, completada: !tarea.completada } : tarea
    );
    setTareas(tareasActualizadas);
  };


  const eliminarTarea = (id) => {
    const tareasFiltradas = tareas.filter((tarea) => tarea.id !== id);
    setTareas(tareasFiltradas);
  };


  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas'));
    if (tareasGuardadas) {
      setTareas(tareasGuardadas);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <TareaFormulario agregarTarea={agregarTarea} />
      <ul>
        {tareas.map((tarea) => (
          <Tarea
            key={tarea.id}
            tarea={tarea}
            marcarComoCompletada={marcarComoCompletada}
            eliminarTarea={eliminarTarea}
          />
        ))}
      </ul>
    </div>
  );
};

export default ListaTareas;
