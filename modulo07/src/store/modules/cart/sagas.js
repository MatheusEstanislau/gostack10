import { call, put, all, takeLatest } from 'redux-saga/effects';

import * as CartActions from './actions';

import api from '../../../services/api';

function* addToCart({ id }) {
  const response = yield call(api.get, `/products/${id}`);

  yield put(CartActions.AddToCartSuccess(response.data));
}

export default all([takeLatest('@cart/Add_Request', addToCart)]);
