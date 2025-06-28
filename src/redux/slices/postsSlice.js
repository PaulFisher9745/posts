import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    posts: []
}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state,action) => {
            state.posts = action.payload       
        },
        editPosts: (state,action) => {

        },
        getPosts: (state,action) => {

        },
        addPost: (state,action) => {

        }
    }    
})

export const {setPosts, editPosts, getPosts, addPost} = postsSlice.actions

export default postsSlice.reducer