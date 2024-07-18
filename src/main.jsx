// Importaciones necesarias desde React y ReactDOM
import React from 'react';
import ReactDOM from 'react-dom/client';

// Importación del componente principal de la aplicación
import App from './App.jsx';

// Renderización del componente principal de la aplicación (App) en el elemento con id 'root'
// 'React.StrictMode' es una herramienta para destacar problemas potenciales en la aplicación
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
