import React from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import App from './App';
import Detalhar from './pages/Detalhar';
import Novo from './pages/Novo';


export default function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={App} />
      <Route path="/pro/novo" component={Novo} />
      <Route path="/pro/detalhar" component={Detalhar} />
    </BrowserRouter>
  )
}