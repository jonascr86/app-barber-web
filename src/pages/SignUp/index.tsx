import React, { useCallback, useRef } from 'react';
import {
  FiArrowLeft, FiLock, FiMail, FiUser,
} from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import { Container, Content, Background } from './style';
import logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import getValidationErrors from '../../utils/GetValidationErrors';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: object) => {
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
    } catch (err) {
      formRef.current?.setErrors(getValidationErrors(err));
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="App Barber" width="150" height="150" />

        <Form ref={formRef} onSubmit={handleSubmit}>
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
