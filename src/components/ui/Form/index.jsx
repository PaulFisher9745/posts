import React from 'react'
import * as SC from "./styled"

const Form = ({children,...rest}) => {
  return (
    <SC.Form {...rest}>{children}</SC.Form>
  )
}

export default Form