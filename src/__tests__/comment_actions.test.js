import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as commentActions from '../actions/comments.action'
import * as types from '../constants/postsConstants'

const middleware = [thunk]
const mockStore = configureStore(middleware)
const store = mockStore()

const mockData = [
    {
    "postId": 2,
    "id": 6,
    "name": "et fugit eligendi deleniti quidem qui sint nihil autem",
    "email": "Presley.Mueller@myrl.com",
    "body": "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
    },
    {
    "postId": 2,
    "id": 7,
    "name": "repellat consequatur praesentium vel minus molestias voluptatum",
    "email": "Dallas@ole.me",
    "body": "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
    },
    {
    "postId": 2,
    "id": 8,
    "name": "et omnis dolorem",
    "email": "Mallory_Kunze@marie.org",
    "body": "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
    },
    {
    "postId": 2,
    "id": 9,
    "name": "provident id voluptas",
    "email": "Meghan_Littel@rene.us",
    "body": "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
    },
    {
    "postId": 2,
    "id": 10,
    "name": "eaque et deleniti atque tenetur ut quo ut",
    "email": "Carmen_Keeling@caroline.name",
    "body": "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
    }
];


describe('Comments Actions', () => {
    beforeEach(() => {store.clearActions()})

    describe('Add comment', () => {
        test('Dispatch the correct action and payload', () => {
            const testId = 1
            const newComment = {postId: testId, name: "Title of comment", email: "alan@test.com", body: "Test Body"}
            const expextedAction = [{type: types.ADD_COMMENT, payload: {newCommentPostId: testId, newComment}}] //Brackets added as the store.getAction() returns an array of actions
            store.dispatch(commentActions.addCommentsToCurrentPost(testId, newComment));
            expect(store.getActions()).toEqual(expextedAction)
        })
    })

    // describe('Get comments by ID', () => {
    //     test('Dispatch the correct action and payload', () => {
    //         const testId = 2
    //         const expextedAction = [{type: types.COMMENTS_LIST_SUCCESS, payload: {postId: testId, comments: mockData}}]
    //         store.dispatch(commentActions.getCommentsById(testId))
    //         expect(store.getActions()).toEqual(expextedAction)
    //     })
    // })
})