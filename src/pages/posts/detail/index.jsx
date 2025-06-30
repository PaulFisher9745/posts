import React, { useEffect } from 'react'
import {useParams } from 'react-router-dom'
import Typo from '../../../components/Typo'
import Container from '../../../components/Container'
import * as SC from './styled'
import Link from '../../../components/Link'
import { useSelector, useDispatch } from 'react-redux'
import {getPostById, showPost} from "../../../redux/slices/postsSlice"

const DetailPostPage = () => {
  const {id} = useParams()
  const {list} = useSelector((state) => state.posts.posts)
  const postForView = useSelector((state) => state.posts.postForView)
  const dispatch = useDispatch()

  useEffect(() => {
    const initId = Number(id)
    const findedPosts = list ? list.find((item) => item.id === initId) : undefined
    if (findedPosts) {
      dispatch(showPost(findedPosts))
    } else {
      dispatch(getPostById(initId))
    }
    
  },[id,list,dispatch])

  if(postForView.loading) {
    return <Container>Loading...</Container>
  }

  if(!postForView.post || !postForView.post.hasOwnProperty("id")) { 
    return <>Пост не найден!</>
  }

  const {post} = postForView

  const image = post.image || "https://avatars.mds.yandex.net/i?id=2a00000197a64025d8aa1821cb298414b8ee-1767271-fast-images&n=13"

  return (
    <Container>
      <Typo>{post.title}</Typo>
      <SC.Image src={image} alt={post.title}/>
      <SC.Text>{post.body}</SC.Text>
      <div style={{clear: "both"}}></div>
      <SC.LinkWrapper>
        <Link to={"/posts"}>Обратно к публикациям</Link>
      </SC.LinkWrapper>
      
    </Container>
  )
}

export default DetailPostPage