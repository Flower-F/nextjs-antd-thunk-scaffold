import * as types from '../constants/counter'

const initState = {
    count: 0
}

const counterReducer = (state = initState, { type }) => {
    switch (type) {
        case types.INCREMENT:
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

export default counterReducer