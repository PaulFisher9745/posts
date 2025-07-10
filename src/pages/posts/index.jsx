import React, { useCallback, useEffect, useState }  from 'react'
import Container from '../../components/ui/Container'
import Posts from '../../components/Posts'
import Typo from '../../components/ui/Typo'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts, getPostsForPagination, searchPosts, sortedPosts } from '../../redux/slices/postsSlice'
import Loader from '../../components/ui/Loader'
import btnLeft from '../../icons/Black_Left_Arrow.png'
import btnRight from '../../icons/Black_Right_Arrow.png'
import * as SC from './styled'
import Sort from '../../components/ui/Sort'
import Search from '../../components/ui/Search'

const PostsPage = () => {
  const {list, loading} = useSelector((state) => state.posts.posts)
  const {posts,page} = useSelector((state) => state.posts.postsFilters)
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(page)
  const [pages,setPages] = useState(0)
  const postsPerPage = 10
  const [totalPages, setTotalPages] = useState(0)
  const firstNumForSlice = Number((currentPage - 1) * 10)
  const secondNumForSlice = Number(currentPage * 10) 

  const handlePageChange = useCallback((page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  },[totalPages])

  const sortPosts = (sort) => {
    dispatch(sortedPosts(sort))
  }

  const searchingPosts = (search) => {
    dispatch(getPostsForPagination([firstNumForSlice,secondNumForSlice,currentPage]))
    dispatch(searchPosts(search))
  }

  useEffect(() =>{
    if(!list) {
      dispatch(getPosts()) 
    } else {
      setTotalPages(Math.ceil(list.length/postsPerPage))
    }
  },[posts,list,dispatch])

  useEffect(() =>{
    if(!list) {
      return
    }
    dispatch(getPostsForPagination([firstNumForSlice,secondNumForSlice,currentPage]))

  },[dispatch,list,currentPage,firstNumForSlice,secondNumForSlice])

    useEffect(() => {
    const getPages = [];
    for (let i = 1; i <= totalPages; i++) {
      getPages.push(
        <SC.PageButton
          key={i}
          className={currentPage === i ? 'active' : ''} 
          onClick={() => handlePageChange(i)}
        >
          {i}
        </SC.PageButton>
      );
    }
    return setPages(getPages);
  },[posts,currentPage,totalPages,handlePageChange])



  if (!list && loading) {
   return <Loader/>
  }

  if(!list) {
   return <>404</>
  }


  return (
        <Container>      
            {posts?.length === 0 
              ? 
              <Typo>Нет публикаций!</Typo>
              :
              <Typo>Публикации</Typo>
            }
            <SC.SortAndSearchWrapper>
              <Sort 
              sortPosts={sortPosts}
              />
              <Search searchingPosts={searchingPosts}/>
            </SC.SortAndSearchWrapper>
            {posts && <Posts posts={posts}/>}
            <SC.PaginationWrapper>
              <SC.Img 
              src={btnLeft} alt="" 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              />
              {posts && pages}
              <SC.Img 
                src={btnRight} alt="" 
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
            </SC.PaginationWrapper>
        </Container> 
  )
}

export default PostsPage