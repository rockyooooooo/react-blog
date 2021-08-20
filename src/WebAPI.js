import { getAuthToken } from "./utils"
const BASE_URL = 'https://student-json-api.lidemy.me'

export const getPosts = async() => {
   const response = await fetch(`${BASE_URL}/posts?_sort=createdAt&_order=desc`)
   const data = await response.json()
   return data
}

export const getPost = async(id) => {
  const response = await fetch(`${BASE_URL}/posts/${id}`)
  const data = await response.json()
  return data
}

export const getUser = async(userId) => {
  const response = await fetch(`${BASE_URL}/users/${userId}`)
  const data = await response.json()
  return data
}

export const login = async (username, password) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
  const data = await response.json()
  return data
}

// export const getMe = async () => {
//   const token = getAuthToken()
//   return fetch(`${BASE_URL}/m1e`, {
//     headers: {
//       'authorization': `Bearer ${token}`
//     }
//   })
//     .then((res) => {
//       if (!res.ok) throw new Error('Network response was not ok in getMe.')
//       return res.json()
//     })
//     .catch((error) => {
//       return {
//         ok: 0,
//         data: error
//       }
//     })
// }

export const getMe = async () => {
  const token = getAuthToken()
  try {
    const response = await fetch(`${BASE_URL}/me`, {
      headers: {
        'authorization': `Bearer ${token}`
      }
    })
    if (!response.ok) throw new Error('Network response was not ok in getMe.')
    const data = await response.json()
    return data
  } catch (error) {
    return {
      ok: 0,
      data: error
    }
  }
}
