import { createStore } from 'redux';
import  CreateReducer  from './CreateReducer';

export default function ConfigureStore(initialState = {},history){
    const store = createStore(CreateReducer())
    return store
}