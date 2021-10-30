import * as types from '../constants/counter'

export const initialState = {
    count: 0
}

export const counterReducer = (state = initialState, { type }) => {
    switch (type) {
        case types.INCREMENT:
        case types.INCREMENT_ASYNC:
            return {
                count: state.count + 1
            }
        case types.DECREMENT:
            return {
                count: state.count - 1
            }
        case types.RESET:
            return {
                count: 0
            }
        default:
            return state
    }
}