import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';
import history from '../../../services/history'
import { toast } from 'react-toastify';

import { signFailure, signInSuccess, signUpSuccess } from './actions';

export function* signIn({ payload }) {
  try {
    const { data } = payload;
    const response = yield call(api.post, 'auth', data);
    yield put(signInSuccess(response.data.token));
    //history.push('/dashboard')
    history.push('/dashboard')

  } catch (err) {
    yield put(signFailure('Error'));
  }
}

export function* signUp({ payload }) {
  try {
    const { data } = payload
    yield call(api.post, 'user', data);
    toast.success('Conta criada com sucesso!');
    history.push('/')
  } catch (err) {
    console.log(err)
    toast.error('Já existe uma conta com o email informado!');
  }
}

export function* signInS() {
  history.push('/dashboard')
}

export default all([
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_IN_SUCCESS', signInS)
]);
