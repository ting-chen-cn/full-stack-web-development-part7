import React, { useState } from 'react'
import { loginAction } from '../reducer/loggedUserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { Alert, Form, Button } from 'react-bootstrap'

const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const handleLogin = (event) => {
    event.preventDefault()
    dispatch(loginAction({ username, password }))
    setUsername('')
    setPassword('')
  }
  const loggedUser = useSelector((state) => state.loggedUser)
  const message = useSelector((state) => state.massage)
  if (loggedUser === null) {
    return (
      <div className='container'>
        <h2>Login</h2>
        <Form onSubmit={handleLogin}>
          <Form.Group>
            <Form.Label>username</Form.Label>
            <Form.Control
              type='text'
              id='username'
              value={username}
              onChange={({ target }) => setUsername(target.value)}
            />
            <Form.Label>password:</Form.Label>
            <Form.Control
              id='password'
              type='password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Button id='login-button' type='submit'>
              login
            </Button>
          </Form.Group>
        </Form>
      </div>
    )
  }
  return (
    <div className='container'>
      {message && <Alert variant='success'>{message}</Alert>}
      {/* <div>{loggedUser.username} logged in</div> */}
    </div>
  )
}

export default LoginForm
