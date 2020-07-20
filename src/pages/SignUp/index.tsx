import * as Yup from 'yup';
import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser, FiPhone } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { Container, Content, Background, AnimationContent } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import getValidationErrors from '../../utils/getValidationsErrors';
import api from '../../services/api';
import { useToast } from '../../hooks/toast';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  phone: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = useCallback(
    async (data: SignUpFormData) => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome é obrigatório'),
          email: Yup.string()
            .required('Email é obrigatório')
            .email('Digite um email valído'),
          phone: Yup.string().min(10, 'Digite um numero com DD. '),
          password: Yup.string().min(6, 'Senha no minimo 6 digitos'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('users', data);
        history.push('/');

        addToast({
          type: 'success',
          title: 'Cadastro realizado com sucesso!',
          description: 'Já pode fazer seu login no GoBarber!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description:
            'Ocorreu um erro ao fazer cadastro, verifique os dados e tente novamente!',
        });
      }
    },
    [history, addToast],
  );

  return (
    <Container>
      <Background />
      <Content>
        <AnimationContent>
          <img src={logo} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Faça seu cadastro</h1>
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Input name="phone" icon={FiPhone} placeholder="Telefone" />

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
            />

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/">
            <FiArrowLeft />
            Voltar para Login
          </Link>
        </AnimationContent>
      </Content>
    </Container>
  );
};

export default SignUp;
