import {createStore, combineReducer} from './simple-redux/index.js'
import counterReducer from './reducers/counter.js'
import infoReducer from './reducers/info.js'
const reducer = combineReducer({
  counter: counterReducer,
  info: infoReducer
})
let initState = {
  counter: {
    count: 0
  },
  info: {
    name: ''
  }
}

let store = createStore(reducer, initState)

// 订阅
store.subscribe(() => {
  let state = store.getState()
  console.log(state.counter.count, state.info.name)
})
// dispatch 通过派发任务 执行更新
store.dispatch({
  type: 'INCREMENT'
})
store.dispatch({
  type: 'SET_NAME',
  name: 'xiaomi'
})