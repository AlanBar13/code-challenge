import { postListReducer } from '../reducers/post.reducer'
import * as types from '../constants/postsConstants'
import { postId, postListNoComments, commentList, postListComments, newComment, postListNewComment, listError } from '../__fixtures__/fixtures'

describe('Post Reducer', () => {
    describe('Initial State', () => {
        test('Should return the initial state', () => {
            const state = undefined
            const action = {}
            const intialState = { list: [] }
            expect(postListReducer(state, action)).toEqual(intialState)
        })
    });

    test('Should handle POST_LIST_REQUEST', () => {
        const state = {}
        const action = { type: types.POST_LIST_REQUEST }
        const reducedRequest = { loading: true, list: [] }
        expect(postListReducer(state, action)).toEqual(reducedRequest)
    });

    test('Should handle POST_LIST_SUCCESS', () => {
        const state = {}
        const action = { type: types.POST_LIST_SUCCESS, payload: postListNoComments }
        const reducedPostListNoComments = { loading: false, list: postListNoComments } 
        expect(postListReducer(state, action)).toEqual(reducedPostListNoComments);
    });

    test('Should handle COMMENTS_LIST_SUCCESS', () => {
        const state = { list: postListNoComments };
        const action = { type: types.COMMENTS_LIST_SUCCESS, payload: { postId, comments: commentList }};
        const reducedCommentList = { list: postListComments };
        expect(postListReducer(state, action)).toEqual(reducedCommentList);
    });

    test('Should handle ADD_COMMENT', () => {
        const state = { list: postListComments }
        const action = { type: types.ADD_COMMENT, payload: {newCommentPostId: postId, newComment } }
        const reducedAddComment = { list: postListNewComment }
        expect(postListReducer(state, action)).toEqual(reducedAddComment);
    });

    test('Should handle POST_LIST_FAIL', () => {
        const state = {};
        const action = { type: types.POST_LIST_FAIL, payload: listError };
        const reductListFail = { loading: false, error: listError };
        expect(postListReducer(state, action)).toEqual(reductListFail);
    });
});