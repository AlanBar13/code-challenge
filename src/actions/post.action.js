/*
    Post Actions

    Will handle API calls and dispatch specific actions to the reducer

    redux-thunk is included in the store to delay the dispatch until the api call has finish
    axios library will be use to make the API calls
*/

import axios from 'axios'; //Promise based HTTP client for the browser and node.js
import { 
    POST_LIST_REQUEST,
    POST_LIST_SUCCESS,
    POST_LIST_FAIL
} from '../constants/postsConstants'

// async function that will call the Post API and give the information to the reducer in the payload
export const listPosts = () => async (dispatch) => { 
    try {
        // change the value of loading in the store
        dispatch({ type: POST_LIST_REQUEST});

        // destructure the reponse to get only the data of the reponse
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
        
        // udpate the the store with all the posts
        dispatch({ type: POST_LIST_SUCCESS, payload: data });
    } catch (error) {
        //update the value of error in the store
        dispatch({
            type: POST_LIST_FAIL,
            //if there is a error message give the value of the error message to the payload
            payload:
                error.response && error.response.data ? error.response.data.message : error.message
        })
    }
};