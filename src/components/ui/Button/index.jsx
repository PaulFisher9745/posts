import React from 'react'
import * as SC from "./styled"

const Button = ({children,...props}) => {
  return (
    <SC.Button {...props}>{children}</SC.Button>
  )
}

export default Button