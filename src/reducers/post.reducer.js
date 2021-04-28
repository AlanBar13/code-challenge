/* 
    Posts Reducer

    Handles the behavior of the store
*/

import { 
    POST_LIST_FAIL, 
    POST_LIST_REQUEST, 
    POST_LIST_SUCCESS, 
    COMMENTS_LIST_SUCCESS, 
    ADD_COMMENT} from '../constants/postsConstants'

export const postListReducer = (state = { list: [] }, action) => {
    switch(action.type){
        case POST_LIST_REQUEST:
            return { loading: true, list: [] };
        //POST_LIST_SUCCESS case will update list with all the posts 
        case POST_LIST_SUCCESS:
            return { loading: false, list: action.payload };
        //COMMENTS_LIST_SUCCESS case will update the all comments of a post
        case COMMENTS_LIST_SUCCESS:
            const { postId, comments } = action.payload
            return {
                ...state,
                list: state.list.map((post) => 
                    post.id === postId ? {...post, comments} : {...post}
                )
            }
        //ADD_COMMENT case will add a new comment to the array of coments of a post
        case ADD_COMMENT:
            const {newCommentPostId, newComment} = action.payload;
            return {
                ...state,
                list: state.list.map((post) => 
                    post.id === newCommentPostId ? {...post, comments: [newComment, ...post.comments]} : {...post}
                )
            }
        //POST_LIST_FAIL case will deliver an error
        case POST_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}