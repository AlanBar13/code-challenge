/* 
    Comments Actions

    Will handle API calls and dispatch specific actions to the reducer
*/

import axios from 'axios'
import { 
    COMMENTS_LIST_FAIL,
    COMMENTS_LIST_SUCCESS,
    ADD_COMMENT
} from '../constants/postsConstants'

export const getCommentsById = (id) => async (dispatch) => {
    try {
        // destructure the reponse to get only the data of the reponse
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
        
        // udpate the the store with all the comments
        dispatch({ type: COMMENTS_LIST_SUCCESS, payload: {postId: id, comments: data} });
    } catch (error) {
        //update the value of error in the store
        dispatch({
            type: COMMENTS_LIST_FAIL,
            //if there is a error message give the value of the error message to the payload
            payload:
                error.response && error.response.data ? error.response.data.message : error.message
        })
    }
}

export const addCommentsToCurrentPost = (id, newComment) => (dispatch) => {
    
        // Optional: Make a post request to server to add new post to the DB expecting to return the new comment
        //const { data } = await axios.post(`https://jsonplaceholder.typicode.com/comments/${id}`);
        
        // udpate the the store with the new comment
        dispatch({ type: ADD_COMMENT, payload: {newCommentPostId: id, newComment} });
}