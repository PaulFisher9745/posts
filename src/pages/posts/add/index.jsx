import React from 'react'
import PostForm from '../components/PostForm'
import { useDispatch } from 'react-redux'
import { addPost } from '../../../redux/slices/postsSlice'
import { useNavigate } from 'react-router-dom'

const AddPostPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onSubmitForm = (formValues) => {
    dispatch(addPost(formValues))
    navigate("/")
  }
  return (
    <PostForm onSubmitForm={onSubmitForm} title={"Добавление нового поста"}/>
  )
}

export default AddPostPage