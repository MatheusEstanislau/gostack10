import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Router from './routes';

import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
