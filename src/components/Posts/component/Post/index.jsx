import React from 'react'
import * as SC from "./styled"
import Link from '../../../Link'

const Post = ({post}) => {
  const image = post.image || "https://avatars.mds.yandex.net/i?id=2a00000197a64025d8aa1821cb298414b8ee-1767271-fast-images&n=13"

  return (
    <SC.Post>
        <SC.Image src={image} alt={post.title}/>
        <SC.Title>{post.title}</SC.Title> 
        <Link to={`/posts/${post.id}`}>Читать далее...</Link>
    </SC.Post>
  )
}

export default Post