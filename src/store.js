import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

//redux chrome extension
import { composeWithDevTools } from 'redux-devtools-extension'

//import reducers
import { postListReducer } from './reducers/post.reducer'

//combineReducers will be used in case another reducer can be created and included
const reducer = combineReducers({
    data: postListReducer
});

const middelware = [thunk];

/*
 * create the redux store with the reducers, and the use of redux-thunk as middleware 
 * to delay the dispatch of an action. As we will use an API call the dispatch needs
 * to be delayed until we get a response from the server
 */
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middelware))
)

export default store;