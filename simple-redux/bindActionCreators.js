const bindActionCreator = (actionCreator, dispatch) => {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments))
  }
}

const bindActionCreators = (actionCreator, dispatch) => {
  if (typeof actionCreator === 'function') {
    return bindActionCreator(actionCreator, dispatch)
  }
  if (typeof actionCreator !== 'object' || actionCreator === null) {
    throw new Error('Expected object or function')
  }
  const keys = Object.keys(actionCreator)
  console.log(keys)
  const boundActionCreators = {}
  for (const key of keys) {
    console.log(key)
    if (typeof actionCreator[key] === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator[key], dispatch)
    }
  }
  return boundActionCreators
}

export default bindActionCreators