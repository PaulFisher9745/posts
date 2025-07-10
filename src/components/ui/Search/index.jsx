import React from 'react'
import { useDebouncedCallback } from 'use-debounce'

const Search = ({searchingPosts}) => {

  const debounced = useDebouncedCallback((e) => {searchingPosts(e.target.value)}, 300 );

  return (
    <input onChange={(e) => debounced(e)} type="text" placeholder='Поиск' />
  )
}

export default Search