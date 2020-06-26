import React from 'react';
import GlobalStyle from './styles/global';
import SingIn from './pages/SignIn';
import { Providers } from './hooks';

const App: React.FC = () => (
  <>
    <Providers>
      <SingIn />
    </Providers>

    <GlobalStyle />
  </>
);

export default App;
