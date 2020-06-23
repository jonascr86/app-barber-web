import React, { useRef, useCallback, useContext } from 'react';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Container, Content, Background } from './style';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/GetValidationErrors';
import Authcontext from '../../Context/AuthContext';

const SigIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { name } = useContext(Authcontext);

  const handleSubmit = useCallback(async (data: object) => {
    formRef.current?.setErrors({});
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });


      await schema.validate(data, {
        abortEarly: false,
      });
    } catch (err) {
      formRef.current?.setErrors(getValidationErrors(err));
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={logo} alt="App Barber" width="150" height="150" />

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu logon</h1>

          <Input icon={FiMail} name="email" placeholder="E-mail" />
          <Input icon={FiLock} name="password" type="password" placeholder="Password" />
          <Button type="submit">Entrar</Button>

          <a href="{forgotPassword}">Esquci minha senha</a>
        </Form>

        <a href="{createAcount}">
          <FiLogIn />
          Criar Conta

        </a>
      </Content>
      <Background />
    </Container>
  );
};

export default SigIn;
