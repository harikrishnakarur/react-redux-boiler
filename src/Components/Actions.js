import * as t from './ActionCreators'

export const click = (text) => ({
    type: t.click,
    payload: text
})
export const todo = (text) => ({
    type: t.todo,
    payload: text
})