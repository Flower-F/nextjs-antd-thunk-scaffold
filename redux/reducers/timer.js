import * as types from '../constants/timer'

const initialState = {
    lastUpdate: 0,
}

const timerReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.TICK:
            return {
                lastUpdate: payload.ts,
            }
        default:
            return state
    }
}

export default timerReducer