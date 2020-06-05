import React from 'react';
import {FiLogIn, FiMail, FiLock} from 'react-icons/fi'
import logo from '../../assets/logo.svg';
import {Container, Content, Background} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logo} alt="GoBarber"/>

     <form>
        <h1>Faça seu logon</h1>
        <Input name="emal" icon={FiMail} placeholder="E-mail"/>

        <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

        <Button type="submit">Entrar</Button>

        <a href="login">
          Esqueci a senha
        </a>

     </form>

      <a href="login">
        <FiLogIn />
        Criar minha conta
      </a>

    </Content>
    <Background></Background>
  </Container>
);

export default SignIn;
