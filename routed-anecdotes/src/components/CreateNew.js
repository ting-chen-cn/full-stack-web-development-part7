import { useField } from '../hooks'
import React from 'react'
import { useHistory } from 'react-router-dom'

const CreateNew = (props) => {
  const { reset: contentReset, ...content } = useField('text')
  const { reset: authorReset, ...author } = useField('text')
  const { reset: infoReset, ...info } = useField('info')
  const history = useHistory()
  const handleSubmit = (e) => {
    e.preventDefault()
    props.addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    })
    history.push('/anecdotes')
  }

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for more info
          <input {...info} />
        </div>
        <button type='submit'>create</button>
        <button
          type='reset'
          onClick={() => {
            contentReset()
            authorReset()
            infoReset()
          }}
        >
          reset
        </button>
      </form>
    </div>
  )
}
export default CreateNew
