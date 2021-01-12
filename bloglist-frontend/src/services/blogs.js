import axios from 'axios'
const baseUrl = '/api/blogs'
// const baseUrl = '/blogs'

let token = null
const setToken = (newToken) => {
  token = `bearer ${newToken}`
}
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}
const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}
const remove = async (id) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.delete(`${baseUrl}/${id}`, config)
  return response
}
const comment = async (comment, id) => {
  console.log('id', id)
  console.log(`${baseUrl}/${id}/comments`)
  const response = await axios.post(`${baseUrl}/${id}/comments`, {
    comment: comment,
  })
  return response.data
}
const updateLikes = async (newObject, id) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.put(
    `${baseUrl}/${id}`,
    newObject,
    config
  )
  return response.data
}

export default {
  getAll,
  setToken,
  create,
  remove,
  updateLikes,
  comment,
}
