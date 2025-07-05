import React from 'react'
import * as SC from "./styled"

const Button = ({children}) => {
  return (
    <SC.Button>{children}</SC.Button>
  )
}

export default Button