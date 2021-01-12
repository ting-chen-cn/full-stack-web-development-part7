import userService from '../services/users'
const userReducer = (state = [], action) => {
  switch (action.type) {
    case 'USER':
      return action.users
    default:
      return state
  }
}
export const getUsersAction = () => {
  return async (dispatch) => {
    const users = await userService.getAll()
    dispatch({
      type: 'USER',
      users,
    })
  }
}

export default userReducer
