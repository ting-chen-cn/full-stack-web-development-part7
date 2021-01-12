import React from 'react'
import LoginForm from './LoginForm'
import Toggle from './Toggle'
import CreateForm from './CreateForm'
import { Table } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Blogs = () => {
  const blogs = useSelector((state) =>
    state.blogs.sort((a, b) => b.likes - a.likes)
  )
  const loggedUser = useSelector((state) => state.loggedUser)

  if (loggedUser === null) {
    return (
      <div className='container'>
        <h2>Blogs</h2>
        <LoginForm />
      </div>
    )
  }
  return (
    <div className='container'>
      <h2>blogs</h2>
      <LoginForm />
      <Toggle buttonLabel='create new blog'>
        <CreateForm />
      </Toggle>
      <Table striped>
        <tbody>
          <tr>
            <td>title</td>
            <td>author</td>
            <td>likes</td>
          </tr>
          {blogs.map((b) => (
            <tr key={b.id}>
              <td>
                {' '}
                <Link to={`/blogs/${b.id}`}>{b.title}</Link>
              </td>
              <td>{b.author}</td>
              <td>{b.likes}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default Blogs
