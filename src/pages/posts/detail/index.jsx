import React, { useEffect, useState } from 'react'
import {useParams, useNavigate } from 'react-router-dom'
import Typo from '../../../components/ui/Typo'
import Container from '../../../components/ui/Container'
import * as SC from './styled'
import Link from '../../../components/ui/Link'
import { useSelector, useDispatch } from 'react-redux'
import {deletePost, getPostById, showPost} from "../../../redux/slices/postsSlice"
import Modal from '../../../components/Modal'
import Loader from '../../../components/ui/Loader'

const DetailPostPage = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {list} = useSelector((state) => state.posts.posts)
  const {user} = useSelector((state) => state.auth)
  const postForView = useSelector((state) => state.posts.postForView)
  const [isDelete, setIsDelete] = useState(false)

  const [postForDelete, setPostForDelete] = useState(null)

  const showEditAndDeleteBtn = list && user

  const onDeletePost = () => {
    setIsDelete(true)
    dispatch(deletePost(postForDelete))
    setPostForDelete(null)
    return navigate("/posts")
  }

  useEffect(() => {
    const initId = Number(id)
    const findedPosts = list?.find((item) => item.id === initId)
    if (findedPosts) {
      dispatch(showPost(findedPosts))
    } else if (!isDelete) {
      dispatch(getPostById(initId))
    }
    
  },[id,list,dispatch,isDelete])

  if(postForView.loading) {
    return <Loader/>
  }

  if(!postForView.post || !postForView.post.hasOwnProperty("id")) { 
    return <>Пост не найден!</>
  }

  const {post} = postForView

  const image = post.image || "https://avatars.mds.yandex.net/i?id=2a00000197a64025d8aa1821cb298414b8ee-1767271-fast-images&n=13"

  return (
    <Container>
      {postForDelete && 
        <Modal 
          modalWrapper={() => setPostForDelete(null)}
          deleteButton={() => onDeletePost()}
          modal={() => setPostForDelete(post)}
          button={() => setPostForDelete(null)}
        >
        Вы уверены, что хотите удалить публикацию с ID - {post.id}?
        </Modal>
      }
      <Typo>{post.title}</Typo>
      <SC.Image src={image} alt={post.title}/>
      <SC.Text>{post.body}</SC.Text>
      <div style={{clear: "both"}}></div>
      <SC.LinkWrapper>
        <Link to={"/posts"}>Обратно к публикациям</Link>
        {showEditAndDeleteBtn && <Link to={`/posts/${post.id}/edit`}>Редактировать</Link>}
        {showEditAndDeleteBtn && <SC.DeleteButton onClick={() => setPostForDelete(post)}>Удалить</SC.DeleteButton>}
      </SC.LinkWrapper>
      
    </Container>
  )
}

export default DetailPostPage