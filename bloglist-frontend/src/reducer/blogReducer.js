import blogService from '../services/blogs'
import { setNotification } from './notificationReducer'

export const initialBlogs = () => {
  return async (dispatch) => {
    const blogs = await blogService.getAll()
    dispatch({
      type: 'INIT',
      data: blogs,
    })
  }
}
export const createNew = (content) => {
  return async (dispatch) => {
    const newBlog = await blogService.create(content)
    const blogs = await blogService.getAll()
    dispatch({
      type: 'NEW',
      data: blogs,
    })
    dispatch(
      setNotification(`you create a new blog: ${newBlog.title}`)
    )
  }
}

export const removeAction = (blog) => {
  return async (dispatch) => {
    await blogService.remove(blog.id)
    dispatch({
      type: 'REMOVE',
      data: blog.id,
    })
    dispatch(setNotification(`you removed  ${blog.title}`))
  }
}

export const likeAction = (content, id) => {
  return async (dispatch) => {
    const updateBlog = await blogService.updateLikes(content, id)
    dispatch({
      type: 'LIKE',
      data: updateBlog,
    })
  }
}

export const commentAction = (content, id) => {
  return async (dispatch) => {
    const updateBlog = await blogService.comment(content, id)
    dispatch({
      type: 'COMMENT',
      data: updateBlog,
    })
  }
}

const blogReducer = (state = [], action) => {
  switch (action.type) {
    case 'NEW':
      return action.data
    case 'INIT':
      return action.data
    case 'REMOVE':
      return state.filter((a) => a.id !== action.data)
    case 'LIKE':
      return state.map((a) =>
        a.id === action.data.id ? action.data : a
      )
    case 'COMMENT':
      return state.map((a) =>
        a.id === action.data.id ? action.data : a
      )
    default:
      return state
  }
}

export default blogReducer
