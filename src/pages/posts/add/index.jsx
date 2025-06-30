import React from 'react'
import PostForm from '../components/PostForm'
import { useDispatch } from 'react-redux'
import { addPost } from '../../../redux/slices/postsSlice'

const AddPostPage = () => {
  const dispatch = useDispatch()

  const onSubmitForm = (formValues) => {
    dispatch(addPost(formValues))
  }
  return (
    <PostForm onSubmitForm={onSubmitForm} title={"Добавление нового поста"}/>
  )
}

export default AddPostPage