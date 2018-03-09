import React from 'react';
import { Provider } from 'react-redux';

import configureStore from '../store/store';

import App from './App';
import '../css/index.styl';

const initialState = {
};

const Root = () => <Provider store={configureStore(initialState)}>
  <App />
</Provider>;

export default Root;
