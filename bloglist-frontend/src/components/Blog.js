import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { likeAction, commentAction } from '../reducer/blogReducer'
import { setNotification } from '../reducer/notificationReducer'
import { Form, Button } from 'react-bootstrap'
import LoginForm from '../components/LoginForm'

const Blog = ({ blog }) => {
  const dispatch = useDispatch()
  const [comment, setComment] = useState('')
  const handleLike = (event) => {
    event.preventDefault()
    const blogObject = {
      title: blog.title,
      author: blog.author,
      url: blog.url,
      likes: blog.likes + 1,
      user: blog.user.id,
    }
    dispatch(likeAction(blogObject, blog.id))
    dispatch(setNotification(`you've liked ${blogObject.title}`))
  }
  const handleComment = (event) => {
    event.preventDefault()
    dispatch(commentAction(comment, blog.id))
    setComment('')
  }
  const loggedUser = useSelector((state) => state.loggedUser)

  if (!blog) {
    return null
  }
  if (loggedUser === null) {
    return (
      <div className='container'>
        <h2>Blogs</h2>
        <LoginForm />
      </div>
    )
  }
  return (
    <div className='blogForm'>
      <h2>blogs</h2>
      <LoginForm />
      <div>
        <strong>{blog.title}</strong> <strong>{blog.author}</strong>
      </div>
      <a href={blog.url}>{blog.url}</a>
      <div className='likeDiv'>
        likes {blog.likes}{' '}
        <Button onClick={handleLike} id='likeButton'>
          like
        </Button>
      </div>
      <h3>comments</h3>
      <Form onSubmit={handleComment}>
        <Form.Group>
          <Form.Control
            type='text'
            id='comment'
            value={comment}
            onChange={({ target }) => setComment(target.value)}
          />
          <Button type='submit'>add comment</Button>
        </Form.Group>
      </Form>
      {blog.comments
        ? blog.comments.map((b, index) => <li key={index}> {b}</li>)
        : null}
    </div>
  )
}

export default Blog
