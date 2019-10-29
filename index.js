import {createStore} from './simple-redux/index.js'

let initState = {
  count: 0,
  name: '',
}

let store = createStore(initState)

// 订阅
store.subscribe(() => {
  let state = store.getState()
  console.log(state.counter.count)
})
// dispatch
store.changeState(
  {
    ...store.getState(),
    counter: {
      count: 2
    }
  }
)