// src/redux/store.js
import { legacy_createStore } from 'redux';
import reducer from './ProductReducer/reducer';

const store = legacy_createStore(reducer);

export default store;
