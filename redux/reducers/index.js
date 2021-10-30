import { combineReducers } from 'redux'
import { counterReducer } from './counter'

const reducers = {
    counter: counterReducer
}

export default combineReducers(reducers)