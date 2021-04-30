import React from 'react'
import {ListGroup} from 'react-bootstrap'
//Redux helpers
import { useSelector } from 'react-redux'

function Comments({ postId }) {

    // Get list of post from redux store using use selector
    const data = useSelector((state) => state.data); 
    const { list } = data;
    
    /* 
        function renderCurrentPostComments
        Function that renders each comment of an specific post
    */
    const renderCurrentPostComments = (id) => {
        const currentPost = list.find((post) => post.id === id);
        const {comments} = currentPost; //gets the comment of the current post
        if(comments){ // if the comments exist will render all the comments
            return comments.map(item => {
                return (
                    <ListGroup.Item key={item.id}>
                        <h4 data-testid="comment-name">Name: {item.name}</h4>
                        <h5>Email: {item.email}</h5>
                        <p>Body: {item.body}</p>
                    </ListGroup.Item>
                )
            })
        }else{
            return <div></div>
        }
    }

    return (
        <ListGroup>
            {renderCurrentPostComments(postId)}
        </ListGroup>
    )
}

export default Comments
