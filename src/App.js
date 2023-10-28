import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import ListaTareas from './components/ListaTareas';
import DetallesTarea from './components/DetallesTarea';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> to do :) </h1>
        <Routes>
          <Route path="/" element={<ListaTareas />} />
          <Route path="/tarea/:id" element={<DetallesTarea />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
