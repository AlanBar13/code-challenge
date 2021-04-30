import React from 'react'
import { render } from '@testing-library/react'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from '../App'
import { storeForLoading, storeWithPosts } from '../__fixtures__/fixtures'

const middleware = [thunk]
const mockStore = configureStore(middleware)

describe('Testing render of App', () => {
    let store = mockStore(storeForLoading)

    test('renders app component', () => {
        const {getByTestId} = render(<Provider store={store}><App /></Provider>);
        getByTestId('main-title');
    });

    test('renders Loader component', () => {
        const {getByTestId} = render(<Provider store={store}><App /></Provider>);
        getByTestId('loader');
    });
})

describe('Testing render of Post Component', () => {
    let store = mockStore(storeWithPosts);

    test('renders Post, using mock list', () => {
        const {getByTestId} = render(<Provider store={store}><App /></Provider>);
        const elem = getByTestId('post-title');
        expect(elem.innerHTML).toEqual('Title: Test');
    });

    test('renders Comments of post', () => {
        const {getByTestId} = render(<Provider store={store}><App /></Provider>);
        const elem = getByTestId('comment-name');
        expect(elem.innerHTML).toEqual('Name: Alan');
    });
})