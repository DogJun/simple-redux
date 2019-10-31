import {createStore, combineReducer, applyMiddleware} from './simple-redux/index.js'
import counterReducer from './reducers/counter.js'
import infoReducer from './reducers/info.js'
// 中间件对dispatch的增强
import exceptionMiddleware from './middlewares/exceptionMiddleware.js'
import loggerMiddleware from './middlewares/loggerMiddleware.js'
import timeMiddleware from './middlewares/timeMiddleware.js'

const reducer = combineReducer({
  counter: counterReducer,
  info: infoReducer
})

const rewriteCreateStoreFunc = applyMiddleware(exceptionMiddleware, loggerMiddleware, timeMiddleware)
let store = createStore(reducer, {}, rewriteCreateStoreFunc)
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