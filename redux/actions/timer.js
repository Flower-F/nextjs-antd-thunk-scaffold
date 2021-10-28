import * as types from '../constants/timer'

// 异步测试
export const tickAsync = () => {
    return (dispatch) => {
        setInterval(() => {
            dispatch({
                type: types.TICK,
                payload: { ts: Date.now() }
            })
        }, 1000)
    }
}