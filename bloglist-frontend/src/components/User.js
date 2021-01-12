import React from 'react'
import { useSelector } from 'react-redux'

import LoginForm from './LoginForm'

const User = ({ user }) => {
  const loggedUser = useSelector((state) => state.loggedUser)
  if (!user) {
    return null
  }
  if (loggedUser === null) {
    return (
      <div className='container'>
        <h2>Users</h2>
        <LoginForm />
      </div>
    )
  }
  return (
    <div className='container'>
      <h2>Users</h2>
      <LoginForm />
      <h2>{user.name}</h2>
      <h3>added blogs</h3>
      {user.blogs.map((b) => (
        <li key={b.id}> {b.title}</li>
      ))}
    </div>
  )
}
export default User
