import { createSlice } from '@reduxjs/toolkit'
import { getPost as getPostAPI, getUser } from '../../WebAPI'

const initialState = {
  isLoading: false,
  post: [],
  author: {}
}

export const postReducer = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload
    },
    setPost: (state, action) => {
      state.post = action.payload
    },
    setAuthor: (state, action) => {
      state.author = action.payload
    }
  }
})

export const { setIsLoading, setPost, setAuthor } = postReducer.actions

export const getPost = (id) => async (dispatch) => {
  dispatch(setIsLoading(true))
  const post = await getPostAPI(id)
  dispatch(setPost(post))
  const user = await getUser(post.userId)
  dispatch(setAuthor(user))
  dispatch(setIsLoading(false))
}

export default postReducer.reducer
