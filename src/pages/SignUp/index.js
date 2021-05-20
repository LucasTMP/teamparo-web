import React from 'react';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';

// Libs
import { useForm } from 'react-hook-form';

// Styles
import { Section, Container, Input } from './styles';

// Assets
import Logo from '../../assets/logo.png';

// Redux
import { signUpRequest } from '../../store/modules/auth/actions'

const SignUp = () => {
  const { register, handleSubmit, errors } = useForm();
  const dispatch = useDispatch()

  const onSubmit = (data) => dispatch(signUpRequest({
    name: {
      first: data.firstName,
      last: data.lastName,
    },
    birthDate: data.birthDate,
    gender: data.gender,
    email: data.email,
    phone: data.phone,
    password: data.password
  }));

  return (
    <Section>
      <Container>
        <img src={Logo} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              name="firstName"
              type="text"
              placeholder="Nome"
              ref={register({ required: true })}
              error={errors.name}
            />
            <Input
              name="lastName"
              type="text"
              placeholder="Sobrenome"
              ref={register({ required: true })}
              error={errors.lastName}
            />
          </div>
          <div>
            <Input
              name="birthDate"
              type="date"
              placeholder="Email"
              ref={register({ required: true })}
              error={errors.birthDate}
            />
            <select name="gender" error={errors.gender} ref={register({ required: true })} id="monselect">
              <option value="" selected="selected" disabled>Selecione</option>
              <option value="male">Masculino</option>
              <option value="other">Outro</option>
              <option value="female">Feminino</option>
            </select>
          </div>
          <Input
            name="email"
            type="email"
            placeholder="Email"
            ref={register({ required: true })}
            error={errors.email}
          />
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            ref={register({ required: true })}
            error={errors.password}
          />
          <Input
            name="phone"
            type="text"
            placeholder="Telefone"
            ref={register({ required: true })}
            error={errors.phone}
          />
          <button>Criar conta</button>
          <Link to="/">Ja tenho uma conta</Link>
        </form>
      </Container>
    </Section>
  );
};

export default SignUp;
