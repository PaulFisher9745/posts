import React from 'react'
import Post from './component/Post'
import * as SC from "./styled"

const Posts = ({posts}) => {
  return (
    <>
      <SC.Posts>
          {posts.map((post) => <Post key={post.id} post={post}/>  )}
      </SC.Posts>
    </>
    
  )
}

export default Posts