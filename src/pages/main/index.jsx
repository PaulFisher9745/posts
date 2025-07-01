import React, { useEffect } from 'react'
import Posts from '../../components/Posts'
import Container from '../../components/ui/Container'
import Typo from '../../components/ui/Typo'
import { useDispatch, useSelector } from 'react-redux'
import { getFreshListFromList, getFreshPosts } from '../../redux/slices/postsSlice'

const MainPage = () => {

  const dispatch = useDispatch()

  const {post} = useSelector((state) => state.posts.postForView)
  const {posts, loading} = useSelector((state) => state.posts.freshPosts)
  const {list} = useSelector((state) => state.posts.posts)


  useEffect(() =>{
    if(!list) {
      dispatch(getFreshPosts())
    } else {
      dispatch(getFreshListFromList())
    }
  },[dispatch,list])

  return (
    <>
        <Container>
          {loading && <>Loading...</>}
          {posts && 
            <>
            <Typo>Свежие публикации</Typo>
            <Posts posts={posts}/>
            </>
          }
          {post && 
            <>
            <Typo>Последний просмотренный пост</Typo>
            <Posts posts={[post]}/>
            </>
          }
        </Container>
    </>  
  )
}

export default MainPage