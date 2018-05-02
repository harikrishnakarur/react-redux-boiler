import * as t from './ActionCreators';

const clickInitialState = {
    click: true
}

export default (state = clickInitialState, action) => {
    switch(action.type){
        case t.click: return {click: action.payload}
        default: return state
    }
}