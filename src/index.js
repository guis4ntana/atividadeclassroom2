import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Obtém o elemento raiz do DOM
const rootElement = document.getElementById('root');

// Cria a raiz para o React DOM
const root = ReactDOM.createRoot(rootElement);

// Renderiza o componente App dentro do StrictMode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
