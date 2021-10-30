import * as types from '../constants/counter'

export const incrementCount = () => ({ type: types.INCREMENT })

export const decrementCount = () => ({ type: types.DECREMENT })

export const resetCount = () => ({ type: types.RESET })

export const incrementCountAsync = () => (
    dispatch => {
        setTimeout(() => {
            dispatch({
                type: types.INCREMENT_ASYNC
            })
        }, 1000)
    }
)
