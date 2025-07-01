import React from 'react'
import * as SC from "./styled"

const Link = ({simple= true,children, ...props}) => {
  return (
    simple 
    ? 
    <SC.SimpleLink {...props}>{children}</SC.SimpleLink>
    :
    <SC.NavigationLink {...props}>{children}</SC.NavigationLink>
  )
}

export default Link