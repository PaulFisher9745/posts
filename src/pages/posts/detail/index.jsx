import React, { useEffect } from 'react'
import {useParams } from 'react-router-dom'
import Typo from '../../../components/Typo'
import Container from '../../../components/Container'
import * as SC from './styled'
import Link from '../../../components/Link'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../../../redux/slices/postsSlice'

const DetailPostPage = () => {
  const {id} = useParams()
  const postForView = useSelector((state) => state.posts.postForView)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosts(Number(id)))
  },[id,dispatch])


  if(!postForView) {
    return <>Пост не найден!</>
  }

  return (
    <Container>
      <Typo>{postForView.title}</Typo>
      <SC.Image src={postForView.image} alt={postForView.title}/>
      <SC.Text>{postForView.text}</SC.Text>
      <div style={{clear: "both"}}></div>
      <SC.LinkWrapper>
        <Link to={"/posts"}>Обратно к публикациям</Link>
      </SC.LinkWrapper>
      
    </Container>
  )
}

export default DetailPostPage