import React from 'react'
import PostForm from '../components/PostForm'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { editPosts, } from '../../../redux/slices/postsSlice'
import Container from '../../../components/ui/Container'

const EditPostsPage = () => {
  const {id} = useParams()
  const intId = Number(id)
  const dispatch = useDispatch()

  const { list } = useSelector((state) => state.posts.posts)
 
  const onSubmitForm = (formValues) => {
    dispatch(editPosts(formValues))
  }

  if (!list) {
    return <Container>Пост не найден!</Container>
  }

  const findedPost = list.find((item) => item.id === intId)

  return (
    
    <PostForm onSubmitForm={onSubmitForm} title={`Редактирование поста - ${id}`} defaultValues={findedPost}/>
    
    
  )
}

export default EditPostsPage