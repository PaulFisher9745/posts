import React  from 'react'
import Container from '../../components/Container'
import Posts from '../../components/Posts'
import Typo from '../../components/Typo'
import { useSelector } from 'react-redux'


const PostsPage = () => {
  const posts = useSelector((state) => {
    return state.posts.list
  })

  return (
        <Container>
            <Typo>Публикации</Typo>
            <Posts posts={posts}/>
        </Container> 
  )
}

export default PostsPage