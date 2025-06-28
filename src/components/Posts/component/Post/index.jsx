import React from 'react'
import * as SC from "./styled"
import Link from '../../../Link'

const Post = ({post}) => {
  return (
    <SC.Post>
        <SC.Image src={post.image} alt={post.title}/>
        <SC.Title>{post.title}</SC.Title> 
        <Link to={`/posts/${post.id}`}>Читать далее...</Link>
    </SC.Post>
  )
}

export default Post