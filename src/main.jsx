import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import { BrowserRouter, Routes, Route } from 'react-router';
import { App } from './App/App';
import Pedidos from '@/pages/Pedidos/Pedidos';
import Localizacao from '@/pages/localizacao/localizacao';
import ContatoPesquisa from '@/pages/Contato/ContatoPesquisa';
import Layout from './layout/layout';
import Dashboard from '@/pages/Dashboard/Dashboard';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
