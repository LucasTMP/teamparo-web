import { all, takeLatest, call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { toast } from 'react-toastify';
import history from '../../../services/history'


import { ongListSuccess, ongSuccess } from './actions'

export function* listOngs({ payload }) {
  try {
    const { token } = payload;
    const response = yield call(api.get, 'ong', {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put(ongListSuccess(response.data));
  } catch (err) {
    //yield put(signFailure('Error'));
  }
}

export function* createOng({ payload }) {
  try {
    console.log(payload)
    const { data, token } = payload
    const response = yield call(api.post, 'ong', data, {
      headers: { Authorization: `Bearer ${token}` },
    });
    toast.success('Ong criada com successo!');
    console.log(response.data)
    window.localStorage.setItem('@teamparo:ongId', response.data._id)
    history.push('/dashboard')
  } catch (err) {
    console.log(err)
    toast.error('Já existe uma conta com o email informado!');
  }
}

export function* getOng({ payload }) {
  try {
    const { ongId, token } = payload

    const response = yield call(api.get, `ong/${ongId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put(ongSuccess(response.data))
  } catch (err) {
    console.log(err)
    toast.error('Já existe uma conta com o email informado!');
  }
}


export default all([
  takeLatest('@ong/LIST_REQUEST', listOngs),
  takeLatest('@ong/CREATE_ONG_REQUEST', createOng),
  takeLatest('@ong/REQUEST', getOng),

]);
