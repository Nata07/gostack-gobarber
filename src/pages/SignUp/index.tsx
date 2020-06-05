import React from 'react';
import {FiArrowLeft, FiMail, FiLock, FiUser, FiPhone} from 'react-icons/fi'
import logo from '../../assets/logo.svg';
import {Container, Content, Background} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => (
  <Container>
     <Background />
    <Content>
      <img src={logo} alt="GoBarber"/>

     <form>
        <h1>Faça seu logon</h1>
        <Input name="name" icon={FiUser} placeholder="Nome"/>
        <Input name="email" icon={FiMail} placeholder="E-mail"/>
        <Input name="phone" icon={FiPhone} placeholder="Telefone"/>

        <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

        <Button type="submit">Cadastrar</Button>

     </form>

      <a href="login">
        <FiArrowLeft />
        Voltar para Login
      </a>

    </Content>

  </Container>
);

export default SignUp;
