import React from 'react';
import {
  FiArrowLeft, FiLock, FiMail, FiUser,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import { Container, Content, Background } from './style';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignUp: React.FC = () => {
  function handleSubmit(data: object): void{
    console.log(data);
  }

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="App Barber" width="150" height="150" />

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>

          <Input icon={FiUser} name="name" placeholder="Name" />
          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input icon={FiLock} name="password" type="password" placeholder="Password" />
          <Button type="submit">Cadastrar</Button>

        </Form>

        <a href="{createAcount}">
          <FiArrowLeft />
          Voltar para logon

        </a>
      </Content>
    </Container>
  );
};

export default SignUp;
