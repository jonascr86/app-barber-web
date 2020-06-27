import React, { useRef, useCallback } from 'react';
import { FiLogIn, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Link } from 'react-router-dom';
import {
  Container, Content, Background, AnimationContainer,
} from './style';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/GetValidationErrors';
import { useAuth } from '../../hooks/Auth';
import { useToast } from '../../hooks/Toast';

interface SignInFormData{
  email: string;
  password: string;
}

const SigIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();
  const { addToast } = useToast();

  const handleSubmit = useCallback(async (data: SignInFormData) => {
    formRef.current?.setErrors({});
    try {
      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      await signIn({
        email: data.email,
        password: data.password,
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        formRef.current?.setErrors(getValidationErrors(err));
        return;
      }
      addToast({
        title: 'Erro na autenticação',
        description: 'Ocorreu um erro ao fazer o login!',
        type: 'error',
      });
    }
  }, [signIn, addToast]);

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logo} alt="App Barber" width="150" height="150" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>

            <Input icon={FiMail} name="email" placeholder="E-mail" />
            <Input icon={FiLock} name="password" type="password" placeholder="Password" />
            <Button type="submit">Entrar</Button>

            <Link to="{forgotPassword}">Esquci minha senha</Link>
          </Form>

          <Link to="/signup">
            <FiLogIn />
            Criar Conta

          </Link>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  );
};

export default SigIn;
