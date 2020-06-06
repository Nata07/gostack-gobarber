import React from 'react';
import {FiArrowLeft, FiMail, FiLock, FiUser, FiPhone} from 'react-icons/fi'
import logo from '../../assets/logo.svg';
import {Container, Content, Background} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Form} from '@unform/web';

const SignUp: React.FC = () => {

  function handleSubmit(data: object): void {
    console.log(data);
  }
  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="GoBarber"/>

        <Form onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" icon={FiUser} placeholder="Nome"/>
          <Input name="email" icon={FiMail} placeholder="E-mail"/>
          <Input name="phone" icon={FiPhone} placeholder="Telefone"/>

          <Input name="password" icon={FiLock} type="password" placeholder="Senha"/>

          <Button type="submit">Cadastrar</Button>

        </Form>

        <a href="login">
          <FiArrowLeft />
          Voltar para Login
        </a>
      </Content>

    </Container>
  )
}

export default SignUp;
