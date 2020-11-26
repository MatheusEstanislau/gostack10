import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/reactotronConfig';

import GlobalStyle from './styles/global';
import store from './store';

import Router from './routes';

import Header from './components/Header';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
