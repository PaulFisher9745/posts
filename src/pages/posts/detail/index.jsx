import React, { useEffect, useState } from 'react'
import {useParams, useNavigate } from 'react-router-dom'
import Typo from '../../../components/Typo'
import Container from '../../../components/Container'
import * as SC from './styled'
import Link from '../../../components/Link'
import { useSelector, useDispatch } from 'react-redux'
import {deletePost, getPostById, showPost} from "../../../redux/slices/postsSlice"

const DetailPostPage = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {list} = useSelector((state) => state.posts.posts)
  const postForView = useSelector((state) => state.posts.postForView)
  
  const [postForDelete, setPostForDelete] = useState(null)

  const onDeletePost = () => {
    dispatch(deletePost(postForDelete))
    setPostForDelete(null)
    return navigate("/posts")
  }

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
      {postForDelete && 
        <SC.ModalWrapper onClick={() => setPostForDelete(null)}>
            <SC.Modal>
              <SC.ModalText>Вы уверены, что хотите удалить публикацию с ID - {post.id}?</SC.ModalText>
              <SC.ModalContent>
                <SC.DeleteButton onClick={() => onDeletePost()}>Да</SC.DeleteButton>
                <button onClick={() => setPostForDelete(null)}>Нет</button>
              </SC.ModalContent>
            </SC.Modal>
        </SC.ModalWrapper>
      }
      <Typo>{post.title}</Typo>
      <SC.Image src={image} alt={post.title}/>
      <SC.Text>{post.body}</SC.Text>
      <div style={{clear: "both"}}></div>
      <SC.LinkWrapper>
        <Link to={"/posts"}>Обратно к публикациям</Link>
        {list && <Link to={`/posts/${post.id}/edit`}>Редактировать</Link>}
        {list && <SC.DeleteButton onClick={() => setPostForDelete(post)}>Удалить</SC.DeleteButton>}
      </SC.LinkWrapper>
      
    </Container>
  )
}

export default DetailPostPage