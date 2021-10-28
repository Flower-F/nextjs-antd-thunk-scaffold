import { combineReducers } from 'redux'
import counterReducer from './counter'
import timerReducer from './timer'

const reducers = {
    counter: counterReducer,
    timer: timerReducer
}

export default combineReducers(reducers)