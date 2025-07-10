import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { postsAPI } from "../../api/postsAPI"

const initialState = {
    posts: {
      list: null,
      loading: false
    },
    postForView: {
      post: null,
      loading: false
    },
    freshPosts: {
      posts: null,
      loading: false
    },
    postsFilters: {
      posts: null,
      postsPrev: null,
      sort: "fresh",
      page: 1
    }

}

export const getPostById = createAsyncThunk(
  'posts/fetchById',
  async (postId) => {
    return await postsAPI.fetchById(postId)
  }
)

export const getFreshPosts = createAsyncThunk(
  'posts/fetchFreshPosts',
  async (limit) => {
    return await postsAPI.fetchFreshPosts(limit)
  }
)

export const getPosts = createAsyncThunk(
  'posts/fetchPosts',
  async () => {
    return await postsAPI.fetchPosts()
  }
)

export const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        editPosts: (state,action) => {
          state.posts.list = state.posts.list.map((post) => {
            if(post.id === action.payload.id) {
              return action.payload
            }
            return post
          })
        },
        addPost: (state,action) => {
          const newPost = {...action.payload}
          newPost.id = new Date().getTime()
          state.posts.list = state.posts.list ? [newPost,...state.posts.list] : [newPost]
        },
        showPost: (state,action) => {
          state.postForView = {
            post: action.payload,
            loading: false
          }
        },
        deletePost: (state,action) => {
          state.posts.list = state.posts.list.filter((post) => post.id !== action.payload.id)
          state.postForView = {
            post: null,
            loading: false
          }   
        },
        getFreshListFromList: (state) => {
          state.freshPosts.posts = state.posts.list.slice(0,3)
        },
        getPostsForPagination: (state,action) => {
          state.postsFilters.posts = state.posts.list.slice(action.payload[0],action.payload[1])
          state.postsFilters.postsPrev = state.posts.list.slice(action.payload[0],action.payload[1])
          state.postsFilters.page = action.payload[2]
        },
        sortedPosts: (state,action) => {
          switch (action.payload) {
            case "fresh":
              state.posts.list = state.posts.list.sort((a, b) => b.id - a.id)   
              state.postsFilters.posts = state.postsFilters.posts.sort((a, b) => b.id - a.id)
              state.postsFilters.sort = action.payload
              break;
            case "old" :
              state.posts.list = state.posts.list.sort((a, b) => a.id - b.id)   
              state.postsFilters.posts = state.postsFilters.posts.sort((a, b) => a.id - b.id)
              state.postsFilters.sort = action.payload
              break;
            default:
              break;
          }
        },
        searchPosts: (state,action) => {
          if(!action.payload) {
            state.postsFilters.posts = state.postsFilters.postsPrev
          }
          state.postsFilters.posts = state.postsFilters.posts.filter((post) => post.title.toLowerCase().includes(action.payload.toLowerCase()))
        }
    },
    extraReducers: (builder) => {
      builder.addCase(getPostById.pending, (state) => {
        state.postForView = {
          post: null,
          loading: true
        }
      })
      builder.addCase(getPostById.fulfilled, (state,action) => {
        state.postForView = {
          post: action.payload,
          loading: false
        }
      })
      builder.addCase(getPosts.pending, (state) => {
        state.posts = {
          list: null,
          loading: true
        }
      })
      builder.addCase(getPosts.fulfilled, (state,action) => {
        state.posts = {
          list: action.payload,
          loading: false
        }
      })
      builder.addCase(getFreshPosts.pending, (state) => {
        state.freshPosts = {
          posts: null,
          loading: true
        }
      })
      builder.addCase(getFreshPosts.fulfilled, (state,action) => {
        state.freshPosts = {
          posts: action.payload,
          loading: false
        }
      })
    }
})

export const {
  editPosts, 
  addPost, 
  showPost,
  getFreshListFromList, 
  deletePost, 
  getPostsForPagination, 
  sortedPosts,
  searchPosts} = postsSlice.actions

export default postsSlice.reducer