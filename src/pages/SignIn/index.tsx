import * as Yup from 'yup';
import React, {useRef, useCallback, useContext} from 'react';
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi'
import logo from '../../assets/logo.svg';
import {Container, Content, Background} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import getValidationErrors from '../../utils/getValidationsErrors';
import { AuthContext } from '../../Context/AuthContext';

interface SignInFormData {
  email: string
  password: string
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const {signIn} = useContext(AuthContext);


  const handleSubmit = useCallback(async (data: SignInFormData) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        email: Yup.string().required('Email é obrigatório').email('Digite um email valído'),
        password: Yup.string().required('Senha é obrigatória'),
      });

      await schema.validate(data, {
        abortEarly: false
      });

      signIn({
        email: data.email,
        password: data.password
      });
    }catch(err){
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, [signIn]);

  return (

    <Container>
      <Content>
        <img src={logo} alt="GoBarber"/>

        <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu logon</h1>
            <Input name="email" icon={FiMail} placeholder="E-mail"/>

            <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

            <Button type="submit">Entrar</Button>

            <a href="login">
              Esqueci a senha
            </a>

        </Form>

        <a href="login">
          <FiLogIn />
          Criar minha conta
        </a>

      </Content>
      <Background />
    </Container>
  )
}

export default SignIn;
