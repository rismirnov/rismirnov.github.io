import { createStore, combineReducers } from 'redux'
import valutes from './valute-reducer'
import date from './date-reducer'

const store = createStore(combineReducers({
    // Define a top-level state field named `todos`, handled by `todosReducer`
    valutes,
    date,
  }))

export default store