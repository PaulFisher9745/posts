import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    list: [
  {
    id:1,
    title: "post 1",
    image: "https://avatars.mds.yandex.net/i?id=2a00000197a64025d8aa1821cb298414b8ee-1767271-fast-images&n=13",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestiae laborum expedita eius natus adipisci asperiores, possimus placeat commodi nobis sit recusandae aliquid doloremque blanditiis fugiat quasi ratione aspernatur at!"
  },
   {
    id:2,
    title: "post 2",
    image: "https://avatars.mds.yandex.net/i?id=2a00000197a64025d8aa1821cb298414b8ee-1767271-fast-images&n=13",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestiae laborum expedita eius natus adipisci asperiores, possimus placeat commodi nobis sit recusandae aliquid doloremque blanditiis fugiat quasi ratione aspernatur at!"
  },
   {
    id:3,
    title: "post 3",
    image: "https://avatars.mds.yandex.net/i?id=2a00000197a64025d8aa1821cb298414b8ee-1767271-fast-images&n=13",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestiae laborum expedita eius natus adipisci asperiores, possimus placeat commodi nobis sit recusandae aliquid doloremque blanditiis fugiat quasi ratione aspernatur at!"
  },
   {
    id:4,
    title: "post 4",
    image: "https://avatars.mds.yandex.net/i?id=2a00000197a64025d8aa1821cb298414b8ee-1767271-fast-images&n=13",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestiae laborum expedita eius natus adipisci asperiores, possimus placeat commodi nobis sit recusandae aliquid doloremque blanditiis fugiat quasi ratione aspernatur at!"
  },
],
    postForView: null,
    freshPosts: null

}

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts: (state,action) => {
            state.list = action.payload       
        },
        editPosts: (state,action) => {

        },
        getPosts: (state,action) => {
            state.postForView = state.list.find((item) => item.id === action.payload)
        },
        getFreshPosts: (state) => {
          state.freshPosts = state.list.slice(0,3)
        },
        addPost: (state,action) => {

        }
    }    
})

export const {setPosts, editPosts, getPosts, addPost, getFreshPosts} = postsSlice.actions

export default postsSlice.reducer