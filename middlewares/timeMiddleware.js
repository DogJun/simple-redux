const timeMiddleware = (store) => (next) => (action) => {
  console.log('timeMiddleware start')
  console.log("当前系统报时",  new Date().getTime())
  next(action)
  console.log('timeMiddleware end')
}
export default timeMiddleware