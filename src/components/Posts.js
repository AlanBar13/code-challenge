/* 
    Post Component

    Handles every post individually
*/

import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap'
//Redux helpers
import { useDispatch } from 'react-redux'
//Redux actions
import { getCommentsById, addCommentsToCurrentPost } from '../actions/comments.action'

import Comments from './Comments'

function Posts({ listItem }) { //Deconstruct props to get listItem; listItem = post data
    //State variables
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState("");
    const [email, setEmail] = useState("");
    const [body, setBody] = useState("");

    const dispatch = useDispatch()

    /* 
        function postOnClick
        Function to handle if the comments block is visible and 
        dispatch action that makes the API call to get the 
        comments of an specific post
    */
    const postOnClick = (id) => {
        if(visible){
            setVisible(!visible)
        }else {
            
            dispatch(getCommentsById(id))
            setVisible(!visible)
        }
    }

    /* 
        function addNewComment
        Function that handles the creation of a new comment and
        dispatch an action to update the comment of an specific
        post in the redux store
    */
    const addNewComment = (id) => {
        const newComment = {postId: id, name: title, email: email, body: body}
        dispatch(addCommentsToCurrentPost(id, newComment))
        setBody("")
        setEmail("")
        setTitle("")
    }
    
    return (
        <div>
            <h1 data-testid="post-title">Title: {listItem.title}</h1>
            <p>Body: {listItem.body}</p>
            <Button onClick={() => postOnClick(listItem.id)}>Comments</Button>
            <div style={visible ? {display: 'block'} : {display: 'none'}}>
                <div>
                    <h3>Add comment:</h3>
                    <Form>
                        <Form.Group controlId='formTitle'>
                            <Form.Label>Title of the Comment:</Form.Label>
                            <Form.Control size='sm' type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId='formEmail'>
                            <Form.Label>Email:</Form.Label>
                            <Form.Control size='sm' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group controlId='formEmail'>
                            <Form.Label>Body of the comment</Form.Label>
                            <Form.Control size='sm' as="textarea" rows={3} value={body} onChange={(e) => setBody(e.target.value)} />
                        </Form.Group>
                    </Form>
                    <Button variant='secondary' onClick={() => addNewComment(listItem.id)}>Add new comment</Button>
                </div>
                <h3>Comments:</h3>
                {/* Comments Component will render all the comments from the post */}
                <Comments postId={listItem.id} />
            </div>
        </div>
    )
}

export default Posts
