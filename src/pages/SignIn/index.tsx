import React from 'react';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { Container, Content, Background } from './style';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SigIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="App Barber" width="150" height="150" />

      <form>
        <h1>Faça seu logon</h1>

        <Input icon={FiMail} name="email" placeholder="E-mail" />
        <Input icon={FiLock} name="password" type="password" placeholder="Password" />
        <Button type="submit">Entrar</Button>

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
