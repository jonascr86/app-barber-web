import React, { useCallback, useRef } from 'react';
import {
  FiArrowLeft, FiLock, FiMail, FiUser,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Link, useHistory } from 'react-router-dom';
import {
  Container, Content, Background, AnimationContainer,
} from './style';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/GetValidationErrors';
import api from '../../services/api';
import { useToast } from '../../hooks/Toast';

interface SignUpFormData{
  email: string;
  password: string;
  name: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SignUpFormData) => {
    formRef.current?.setErrors({});
    try {
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().min(6, 'No mínimo 6 digitos'),
      });


      await schema.validate(data, {
        abortEarly: false,
      });

      api.post('/users', data);

      addToast({
        title: 'Cadastro realizado!',
        description: 'Você já pode fazer seu logon!',
        type: 'success',
      });
      history.push('/');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        formRef.current?.setErrors(getValidationErrors(err));
        return;
      }
      addToast({
        title: 'Erro durante o cadastro!',
        description: 'Ocorreu um erro ao fazer o seu cadastro, tente novamente!',
        type: 'error',
      });
    }
  }, [addToast, history]);

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContainer>
          <img src={logo} alt="App Barber" width="150" height="150" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>

            <Input icon={FiUser} name="name" placeholder="Name" />
            <Input icon={FiMail} name="email" placeholder="E-mail" />
            <Input icon={FiLock} name="password" type="password" placeholder="Password" />
            <Button type="submit">Cadastrar</Button>

          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para logon

          </Link>
        </AnimationContainer>
      </Content>
    </Container>
  );
};

export default SignUp;
