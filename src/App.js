import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import { Navbar } from './app/Navbar'
import { PostsList } from './features/posts/postslist'
import { AddPostForm } from './features/posts/addpostform'
import { SinglePostPage } from './features/posts/singlepostpage'
import { EditPostForm } from './features/posts/editpostform'
import { UserPage } from './features/users/userspage'
import { UsersList } from './features/users/userslist'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
            <React.Fragment>
              <AddPostForm/>
              <PostsList />
            </React.Fragment>
            )}
          />
           <Route exact path="/posts/:postId" component={SinglePostPage} />
           <Route exact path="/editPost/:postId" component={EditPostForm} />
           <Route exact path="/users" component={UsersList} />
           <Route exact path="/users/:userId" component={UserPage} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  )
}

export default App
