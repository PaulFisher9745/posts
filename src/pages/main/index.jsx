import React from 'react'
import Posts from '../../components/Posts'
import Container from '../../components/Container'
import Typo from '../../components/Typo'

const INITIAL_POSTS = [
  {
    id:1,
    title: "post 1",
    image: "https://avatars.mds.yandex.net/i?id=2a00000197a64025d8aa1821cb298414b8ee-1767271-fast-images&n=13"
  },
   {
    id:2,
    title: "post 2",
    image: "https://avatars.mds.yandex.net/i?id=2a00000197a64025d8aa1821cb298414b8ee-1767271-fast-images&n=13"
  },
   {
    id:3,
    title: "post 3",
    image: "https://avatars.mds.yandex.net/i?id=2a00000197a64025d8aa1821cb298414b8ee-1767271-fast-images&n=13"
  },
   {
    id:4,
    title: "post 4",
    image: "https://avatars.mds.yandex.net/i?id=2a00000197a64025d8aa1821cb298414b8ee-1767271-fast-images&n=13"
  },
]

const MainPage = () => {
  return (
    <>
        <Container>
          <Typo>Свежие публикации</Typo>
            <Posts posts={INITIAL_POSTS}/>
        </Container>
    </>  
  )
}

export default MainPage