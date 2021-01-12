import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createNew } from '../reducer/blogReducer'
import { setNotification } from '../reducer/notificationReducer'
import { Form, Button } from 'react-bootstrap'

const CreateForm = () => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')
  const dispatch = useDispatch()

  const handleCreate = async (event) => {
    event.preventDefault()
    const blogObject = {
      title: title,
      author: author,
      url: url,
    }
    await dispatch(createNew(blogObject))
    dispatch(setNotification(`you've created ${blogObject.title}`))
    setTitle('')
    setAuthor('')
    setUrl('')
  }
  return (
    <div className='formDiv'>
      <h2>creat new</h2>
      <Form onSubmit={handleCreate}>
        <Form.Group>
          <Form.Label>title</Form.Label>
          <Form.Control
            type='text'
            id='title'
            value={title}
            name='title'
            onChange={({ target }) => setTitle(target.value)}
          />
          <Form.Label>author</Form.Label>
          <Form.Control
            type='text'
            id='author'
            value={author}
            name='author'
            onChange={({ target }) => setAuthor(target.value)}
          />
          <Form.Label>url</Form.Label>
          <Form.Control
            type='text'
            id='url'
            value={url}
            name='url'
            onChange={({ target }) => setUrl(target.value)}
          />
          <Button id='create-button' type='submit'>
            create
          </Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default CreateForm
