import { combineReducers } from 'redux';
import ClickReducer from './Components/ClickReducer'
import TodoReducer from './Components/todo/TodoReducer'

export default function CreateReducer(){
    return combineReducers({
        ClickReducer,
        TodoReducer
    })
}