import React, { useEffect } from 'react'
import Blog from './components/Blog'
import Blogs from './components/Blogs'
import Users from './components/Users'
import User from './components/User'
import { Button, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { initialBlogs } from './reducer/blogReducer'
import { getUsersAction } from './reducer/userReducer'
import { logoutAction } from './reducer/loggedUserReducer'
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'

const App = () => {
  const padding = {
    padding: 5,
  }

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initialBlogs())
    dispatch(getUsersAction())
  }, [dispatch])
  const users = useSelector((state) => state.users)
  const blogs = useSelector((state) => state.blogs)
  const loggedUser = useSelector((state) => state.loggedUser)

  const userMatch = useRouteMatch('/users/:id')
  const user = userMatch
    ? users.find((u) => u.id === userMatch.params.id)
    : null
  const blogMatch = useRouteMatch('/blogs/:id')
  const blog = blogMatch
    ? blogs.find((u) => u.id === blogMatch.params.id)
    : null
  return (
    <div className='container'>
      <div>
        <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='#' as='span'>
                <Link style={padding} to='/'>
                  blogs
                </Link>
              </Nav.Link>
              <Nav.Link href='#' as='span'>
                <Link style={padding} to='/users'>
                  users
                </Link>
              </Nav.Link>
              <Nav.Link href='#' as='span'>
                {loggedUser ? (
                  <em>
                    {loggedUser.username} logged in
                    <Button
                      type='submit'
                      id='logoutButton'
                      onClick={() => {
                        window.localStorage.clear()
                        dispatch(logoutAction())
                      }}
                    >
                      logout
                    </Button>
                  </em>
                ) : (
                  <em>please login</em>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
      <Switch>
        <Route path='/blogs/:id'>
          <Blog blog={blog} />
        </Route>
        <Route path='/users/:id'>
          <User user={user} />
        </Route>
        <Route path='/users'>
          <Users />
        </Route>
        <Route path='/'>
          <Blogs />
        </Route>
      </Switch>
      <div>
        <br />
        <em>Note app, Department of Computer Science 2020</em>
      </div>
    </div>
  )
}

export default App
