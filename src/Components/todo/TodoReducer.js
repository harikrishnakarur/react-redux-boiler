import * as t from '../ActionCreators';

const todoInitialState ={ 
    todo:[
          {name: "Milk", checked: false},
          {name: "Eggs", checked: false},
          {name: "Bread", checked: false}
      ]
}
export default (state = todoInitialState, action) => {
    console.log(action)
    switch(action.type){
        case t.todo: return {todo: action.payload}
        default: return state
    }
}