import React from 'react'
import { useSelector } from 'react-redux'
import { Table } from 'react-bootstrap'
import LoginForm from './LoginForm'
import { Link } from 'react-router-dom'

const Users = () => {
  const users = useSelector((state) => state.users)
  const loggedUser = useSelector((state) => state.loggedUser)

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
      <Table striped>
        <tbody>
          <tr>
            <td> </td>
            <td>
              <strong>blogs created</strong>
            </td>
          </tr>
          {users.map((u) => (
            <tr key={u.id}>
              <td>
                <Link to={`/users/${u.id}`}>{u.name}</Link>
              </td>
              <td>{u.blogs.length}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
export default Users
