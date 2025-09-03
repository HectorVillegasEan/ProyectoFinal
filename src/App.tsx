import React from 'react';
// import styled from 'styled-components';
import { Velustro  } from 'uvcanvas';
import LiquidGlass from './LiquidGlass.tsx'; // Se mantiene tal cual
import './App.css';

// Componente de la barra de búsqueda
const Input = () => {
  return (
      <div className="group">
        {/* Ícono de búsqueda en SVG */}
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
          </g>
        </svg>
        <input placeholder="Search" type="search" className="input" />
      </div>
  );
};

// El componente principal de la aplicación
const App: React.FC = () => {
  return (
    <div className="main-container">
      <div className="background-canvas">
        <Velustro />
      </div>
      <div className="content">
        <LiquidGlass className="caja">
          <div className='contenido'>
            {/* <h1>¡Fondo animado con TypeScript!</h1>
            <p>El proyecto está funcionando correctamente.</p> */}
            {/* Aquí se llama al componente Input para que se muestre */}
            <Input />
          </div>
        </LiquidGlass>
      </div>
    </div>
  );
};

export default App;