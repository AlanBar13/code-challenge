import {postListReducer} from '../reducers/post.reducer'
import * as types from '../constants/postsConstants'

describe('Post Reducer', () => {
    describe('Initial State', () => {
        test('Should return the initial state', () => {
            expect(postListReducer(undefined, {})).toEqual({ list: [] })
        })
    });

    test('Should handle POST_LIST_REQUEST', () => {
        expect(
            postListReducer({}, {
                type: types.POST_LIST_REQUEST
            })
        ).toEqual({ loading: true, list: [] })
    });

    test('Should handle POST_LIST_SUCCESS', () => {
        expect(
            postListReducer({}, {
                type: types.POST_LIST_SUCCESS,
                payload: [
                    {
                        "userId": 1,
                        "id": 1,
                        "title": "title 1",
                        "body": "body test 1"
                    },
                    {
                        "userId": 1,
                        "id": 2,
                        "title": "title 2",
                        "body": "body test 2"
                    }
                ]
            })
        ).toEqual({ 
            loading: false, 
            list: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "title 1",
                    "body": "body test 1"
                },
                {
                    "userId": 1,
                    "id": 2,
                    "title": "title 2",
                    "body": "body test 2"
                }
            ]});
    });

    test('Should handle COMMENTS_LIST_SUCCESS', () => {
        expect(
            postListReducer({list: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "title 1",
                    "body": "body test 1"
                }   
            ]}, {
                type: types.COMMENTS_LIST_SUCCESS,
                payload: { postId: 1, comments: [
                        {
                            "postId": 1,
                            "id": 1,
                            "name": "id labore ex et quam laborum",
                            "email": "Eliseo@gardner.biz",
                            "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
                        },
                        {
                            "postId": 1,
                            "id": 2,
                            "name": "quo vero reiciendis velit similique earum",
                            "email": "Jayne_Kuhic@sydney.com",
                            "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
                        }
                ]}
            })
        ).toEqual({ list: [
            {
                "userId": 1,
                "id": 1,
                "title": "title 1",
                "body": "body test 1",
                "comments": [
                    {
                        "postId": 1,
                        "id": 1,
                        "name": "id labore ex et quam laborum",
                        "email": "Eliseo@gardner.biz",
                        "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
                    },
                    {
                        "postId": 1,
                        "id": 2,
                        "name": "quo vero reiciendis velit similique earum",
                        "email": "Jayne_Kuhic@sydney.com",
                        "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
                    }
                ]
            }
        ]});
    });

    test('Should handle ADD_COMMENT', () => {
        expect(
            postListReducer({ list: [
                {
                    "userId": 1,
                    "id": 1,
                    "title": "title 1",
                    "body": "body test 1",
                    "comments": [
                        {
                            "postId": 1,
                            "id": 1,
                            "name": "Test 1",
                            "email": "test@test.com",
                            "body": "Body Test"
                        }
                    ]
                }
            ]},
            {
                type: types.ADD_COMMENT, 
                payload: { newCommentPostId: 1, newComment: { postId: 1, name: "New Comment", email: "alan@test.com", body: "Test Body"}}
            })
        ).toEqual({ list: [
            {
                "userId": 1,
                "id": 1,
                "title": "title 1",
                "body": "body test 1",
                "comments": [
                    { 
                        "postId": 1, 
                        "name": "New Comment", 
                        "email": "alan@test.com", 
                        "body": "Test Body" 
                    },
                    {
                        "postId": 1,
                            "id": 1,
                            "name": "Test 1",
                            "email": "test@test.com",
                            "body": "Body Test"
                    }
                ]
            }
        ]});
    });

    test('Should handle POST_LIST_FAIL', () => {
        expect(
            postListReducer(
                {},
                {
                    type: types.POST_LIST_FAIL,
                    payload: "Error querying the data"
                }
            )
        ).toEqual({ loading: false, error: "Error querying the data"});
    });
});