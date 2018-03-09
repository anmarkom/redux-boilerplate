import { takeEvery, delay } from 'redux-saga';
import { all, call, put, select, race, take } from 'redux-saga/effects';

import * as api from '../api';
import * as actions from './actions';

function* initialize () {
}

function* rootSaga () {
  yield initialize();
}

export default rootSaga;
