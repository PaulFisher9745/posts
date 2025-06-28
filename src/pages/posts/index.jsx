import React from 'react'
import Container from '../../components/Container'
import Posts from '../../components/Posts'
import Typo from '../../components/Typo'

export const INITIAL_POSTS = [
  {
    id:1,
    title: "post 1",
    image: "https://avatars.mds.yandex.net/i?id=2a00000197a64025d8aa1821cb298414b8ee-1767271-fast-images&n=13",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestiae laborum expedita eius natus adipisci asperiores, possimus placeat commodi nobis sit recusandae aliquid doloremque blanditiis fugiat quasi ratione aspernatur at!"
  },
   {
    id:2,
    title: "post 2",
    image: "https://avatars.mds.yandex.net/i?id=2a00000197a64025d8aa1821cb298414b8ee-1767271-fast-images&n=13",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestiae laborum expedita eius natus adipisci asperiores, possimus placeat commodi nobis sit recusandae aliquid doloremque blanditiis fugiat quasi ratione aspernatur at!"
  },
   {
    id:3,
    title: "post 3",
    image: "https://avatars.mds.yandex.net/i?id=2a00000197a64025d8aa1821cb298414b8ee-1767271-fast-images&n=13",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestiae laborum expedita eius natus adipisci asperiores, possimus placeat commodi nobis sit recusandae aliquid doloremque blanditiis fugiat quasi ratione aspernatur at!"
  },
   {
    id:4,
    title: "post 4",
    image: "https://avatars.mds.yandex.net/i?id=2a00000197a64025d8aa1821cb298414b8ee-1767271-fast-images&n=13",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima molestiae laborum expedita eius natus adipisci asperiores, possimus placeat commodi nobis sit recusandae aliquid doloremque blanditiis fugiat quasi ratione aspernatur at!"
  },
]

const PostsPage = () => {
  return (
    <>
        <Container>
            <Typo>Публикации</Typo>
            <Posts posts={INITIAL_POSTS}/>
        </Container>
    </>  
  )
}

export default PostsPage