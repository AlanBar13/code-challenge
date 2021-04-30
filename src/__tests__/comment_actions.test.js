import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as commentActions from '../actions/comments.action'
import * as types from '../constants/postsConstants'

import { newComment, postId } from '../__fixtures__/fixtures'

const middleware = [thunk]
const mockStore = configureStore(middleware)
const store = mockStore()


describe('Comments Actions', () => {
    beforeEach(() => {store.clearActions()})

    describe('Add comment', () => {
        test('Dispatch the correct action and payload', () => {
            const expextedAction = [{type: types.ADD_COMMENT, payload: {newCommentPostId: postId, newComment}}] //Brackets added as the store.getAction() returns an array of actions
            store.dispatch(commentActions.addCommentsToCurrentPost(postId, newComment));
            expect(store.getActions()).toEqual(expextedAction)
        })
    })
})