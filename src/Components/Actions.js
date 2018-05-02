import * as t from './ActionCreators'

export const click = (text) => ({
    type: t.click,
    payload: text
})