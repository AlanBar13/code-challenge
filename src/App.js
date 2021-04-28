/* 
    App Component

    Renders the post list
*/

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listPosts } from './actions/post.action'
import {Container} from 'react-bootstrap'

import Posts from './components/Posts'
import Loader from './components/Loader'

function App() {
  const dispatch = useDispatch();
  //Gets the data from redux store and desconstruct data to get the variables loading, error, list
  const data = useSelector((state) => state.data);
  const {loading, error, list} = data;

  //useffect function that will be called when there is a change in the redux store
  useEffect(() => {
    dispatch(listPosts())
  }, [dispatch])
  
  return (
    <div>
      <h1>Posts</h1>
      {/* Conditional rendering loading will be true while there is no reponse from the API */}
      { loading ? 
        <Loader /> : 
        <Container>
          {list.map((item) => {
            return (
              <div key={item.id}>
                <hr />
                <Posts listItem={item} />
              </div>
            )
          })}
        </Container>}
    </div>
  );
}

export default App;
