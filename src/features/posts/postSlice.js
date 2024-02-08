import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    { id: '1', title: 'First Post!', content: 'Hello!' },
    { id: '2', title: 'Second Post', content: 'More text' }
  ]
  const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      postAdded: {
        reducer(state, action) {
          state.push(action.payload)
        },
        prepare(title, content, userId) {
          return {
            payload: {
              id: nanoid(),
              title,
              content,
              user: userId
            }
          }
        }
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