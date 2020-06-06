import * as Yup from 'yup';
import React, {useCallback, useRef} from 'react';
import {FiArrowLeft, FiMail, FiLock, FiUser, FiPhone} from 'react-icons/fi';
import {FormHandles} from '@unform/core'
import logo from '../../assets/logo.svg';
import {Container, Content, Background} from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Form} from '@unform/web';
import getValidationErrors from '../../utils/getValidationsErrors';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string().required('Email é obrigatório').email('Digite um email valído'),
        phone: Yup.string().min(10, 'Digite um numero com DD. '),
        password: Yup.string().min(6, 'Senha no minimo 6 digitos'),
      });

      await schema.validate(data, {
        abortEarly: false
      });
    }catch(err){
      const errors = getValidationErrors(err);
      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Background />
      <Content>
        <img src={logo} alt="GoBarber"/>

        <Form ref={formRef} onSubmit={handleSubmit}>
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
