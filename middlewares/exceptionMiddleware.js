const exceptionMiddleware = (store) => (next) => (action) => {
  console.log('exceptionMiddleware start')
  try {
    next(action)
  } catch (err) {
    console.error('❌错误报告', err)
  }  
  console.log('exceptionMiddleware end')
}
export default exceptionMiddleware