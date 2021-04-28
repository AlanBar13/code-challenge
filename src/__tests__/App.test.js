import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from '../App'

const middleware = [thunk]
const mockStore = configureStore(middleware)

describe('Testing render of App', () => {
    let store = mockStore({ data: { loading: true }})

    test('renders app component', () => {
        const {getByTestId} = render(<Provider store={store}><App /></Provider>);
        getByTestId('main-title') // expect to get the id main-title from the App
    });

    test('renders Loader component', () => {
        const {getByTestId} = render(<Provider store={store}><App /></Provider>);
        getByTestId('loader') // expect to get the id loader from the Loader Component
    });
})

describe('Testing render of Post Component', () => {
    let store = mockStore({ data: { 
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
    }});

    test('renders Post, using mock list', () => {
        const {getByTestId} = render(<Provider store={store}><App /></Provider>);
        const elem = getByTestId('post-title'); // expect to get the id post-title from the Post Component
        expect(elem.innerHTML).toEqual('Title: Test');
    });

    test('renders Comments of post', () => {
        const {getByTestId} = render(<Provider store={store}><App /></Provider>);
        const elem = getByTestId('comment-name'); // expect to get the id comment-name from the Post Component
        expect(elem.innerHTML).toEqual('Name: Alan');
    });
})