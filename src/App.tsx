import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import { Providers } from './hooks';
import Routes from './routes';

const App: React.FC = () => (
  <BrowserRouter>
    <Providers>
      <Routes />
    </Providers>

    <GlobalStyle />
  </BrowserRouter>
);

export default App;
