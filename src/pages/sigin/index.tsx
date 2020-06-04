import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Container, Content, Background } from './style';
import logo from '../../assets/logo.svg';

const SigIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="App Barber" width="150" height="150" />

      <form>
        <h1>Faça seu logon</h1>

        <input type="text" placeholder="E-mail" />
        <input type="password" placeholder="Password" />
        <button type="submit">Entrar</button>

        <a href="{forgotPassword}">Esquci minha senha</a>
      </form>

      <a href="{createAcount}">
        <FiLogIn />
        Criar Conta

      </a>
    </Content>
    <Background />
  </Container>
);

export default SigIn;
