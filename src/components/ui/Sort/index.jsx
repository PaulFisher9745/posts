import React from 'react'
import { useSelector } from 'react-redux'
import * as SC from "./styled"

const Sort = ({sortPosts}) => {

    const {sort} = useSelector((state) => state.posts.postsFilters)

  return (
    <SC.SortWrapper>
        <label>Сортировка:</label>
        <SC.Select 
            value={sort} 
            onChange={(e) => sortPosts(e.target.value)} 
        >
            <option value="fresh">Свежие посты</option>
            <option value="old">Первые посты</option>
        </SC.Select>
    </SC.SortWrapper>
  )
}

export default Sort