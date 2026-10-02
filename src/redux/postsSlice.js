import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    items: []
  },
  reducers: {
    addPost: (state, action) => {
      state.items.push(action.payload)
    },
    delPost: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id)
    },
    editPost: (state, action) => {
      const { id, title, description } = action.payload
      const post = state.items.find(post => post.id === id)
      if (post) {
        post.title = title
        post.description = description
      }
    }
  }
})
export const { addPost, delPost, editPost } = postsSlice.actions
export default postsSlice.reducer
