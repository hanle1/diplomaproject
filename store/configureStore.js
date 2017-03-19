// import {createStore, applyMiddleware} from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import createBrowserHistory from 'history/lib/createBrowserHistory'
// import {syncHistory} from 'redux-simple-router'
// // import createLogger from 'redux-logger'
// import rootReducer from '../reducers'

// export const history = createBrowserHistory()
// export const reduxRouterMiddleware = syncHistory(history)
// const createStoreWithMiddleware = applyMiddleware(
//   thunkMiddleware, //该中间件会让actions支持函数，并且传入dispatch，getState作为参数
//   // createLogger()
// )(createStore)

// export default function configureStore(initialState) {
//     const store = createStoreWithMiddleware(rootReducer, initialState)

//     if (module.hot) {
//       // Enable Webpack hot module replacement for reducers
//       module.hot.accept('../reducers', () => {
//         const nextRootReducer = require('../reducers')
//         store.replaceReducer(nextRootReducer)
//       })
//     }
    
//     return store
// }

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';   // 中间件，有了这个就可以支持异步action
import rootReducer from '../reducers'

export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(
      thunkMiddleware
    )
  );
};
// // 创建store
// const store = createStore(RootReducer, applyMiddleware(ReduxThunk));

// export default store;