import React from 'react'

const Search = ({searchingPosts}) => {
  return (
    <input onChange={(e) => searchingPosts(e.target.value)} type="text" placeholder='Поиск' />
  )
}

export default Search