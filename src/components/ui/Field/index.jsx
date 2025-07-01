import React from 'react'

const Field = ({children,...rest}) => {
  return (
    <div {...rest}>{children}</div>
  )
}

export default Field