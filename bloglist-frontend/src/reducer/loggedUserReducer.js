import loginService from '../services/login'
import blogService from '../services/blogs'
const loggedUserReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.user
    case 'LOGOUT':
      return null
    default:
      return state
  }
}

export const logoutAction = () => {
  return async (dispatch) => {
    dispatch({
      type: 'LOGOUT',
    })
  }
}
export const loginAction = ({ username, password }) => {
  return async (dispatch) => {
    const user = await loginService.login({
      username,
      password,
    })
    window.localStorage.setItem(
      'loggedBlogUser',
      JSON.stringify(user)
    )
    blogService.setToken(user.token)
    dispatch({
      type: 'LOGIN',
      user,
    })
  }
}

export default loggedUserReducer
