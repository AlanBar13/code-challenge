export const storeForLoading = {
    data: { loading: true }
}

export const storeWithPosts = { 
    data: { 
    loading: false, 
    list: [
            {
                "userId": 1, 
                "id": 1, 
                "title": "Test", 
                "body": "Body Test", 
                "comments": [
                    { 
                        "postId": 1, 
                        "id": 1, 
                        "name": "Alan", 
                        "email": "alan@test", 
                        "body": "Body Test"
                    }
                ]
            }
        ]
    }
};

export const postId = 1;

export const newComment = {
    "postId": postId, 
    "name": "Title of comment", 
    "email": "alan@test.com", 
    "body": "Test Body"
};

export const postListNoComments = [
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
];

export const commentList = [
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
];

export const postListComments = [
    {
        "userId": 1,
        "id": 1,
        "title": "title 1",
        "body": "body test 1",
        "comments": commentList
    },
    {
        "userId": 1,
        "id": 2,
        "title": "title 2",
        "body": "body test 2"
    }
];

export const postListNewComment = [

    {
        "userId": 1,
        "id": 1,
        "title": "title 1",
        "body": "body test 1",
        "comments": [newComment, ...commentList]
    },
    {
        "userId": 1,
        "id": 2,
        "title": "title 2",
        "body": "body test 2"
    }
];

export const listError = "Error querying the data";
