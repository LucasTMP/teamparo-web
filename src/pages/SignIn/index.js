import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import jwt from 'jwt-decode'
import history from '../../services/history'

// Libs
import { useForm } from 'react-hook-form';

// Redux
import { signInRequest, signInSuccess, signUpSuccess } from '../../store/modules/auth/actions';

// Styles
import { Section, Container, Input } from './styles';

// Assets
import Logo from '../../assets/logo.png';

const SignIn = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const dispatch = useDispatch();

  const error = useSelector((state) => state.auth.error);
  const token = useSelector((state) => state.auth.token);
  const storageToken = window.localStorage.getItem('@teamparo:token');

  const onSubmit = (data) => dispatch(signInRequest(data));

  useEffect(() => {
    if (storageToken) {
      const decoded = jwt(storageToken)
      if (decoded.ongs.length > 0) {
        localStorage.setItem('@teamparo:ongId', decoded.ongs[0].ongId)
        localStorage.setItem('@teamparo:nameUser', decoded.name.first);
        history.push('/dashboard')
      }
      history.push('/dashboard')
    }
    if (token) {
      localStorage.setItem('@teamparo:token', token)
      const decoded = jwt(token)
      localStorage.setItem('@teamparo:nameUser', decoded.name.first);

      if (decoded.ongs.length > 0) {
        localStorage.setItem('@teamparo:ongId', decoded.ongs[0].ongId)
        localStorage.setItem('@teamparo:nameUser', decoded.name.first);
        history.push('/dashboard')
      }
      history.push('/dashboard')
    }
  }, [token])

  return (
    <Section>
      <Container>
        <img src={Logo} />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            name="email"
            type="email"
            id="email"
            placeholder="E-mail"
            ref={register({ required: true })}
            error={errors.email}
          />
          {errors.email && <span>Você precisa colocar seu email</span>}
          <Input
            name="password"
            type="password"
            placeholder="Senha"
            ref={register({ required: true })}
            error={errors.password}
          />
          {errors.password && <span>A senha é obrigatória</span>}
          {error && <span>Email ou senha incorreto</span>}
          <button>Entrar</button>
          <Link to="/signup">Criar conta</Link>
        </form>
      </Container>
    </Section>
  );
};

export default SignIn;
