import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }
  ]
  const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      postAdded(state, action) {
        state.push(action.payload)
      }, 
      postUpdated (state, action){
        const {id, title, text} = action.payload
        const exisingPost = state.find(post => post.id === id )
        if(exisingPost){
          exisingPost.title = title
          exisingPost.text = text
        }
      }
    }
  })
  
  export const { postAdded, postUpdated } = postsSlice.actions
  
  export default postsSlice.reducer