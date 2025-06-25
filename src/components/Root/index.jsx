import React from 'react'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
        <div>Меню</div>
        <Outlet/>
    </div>
  )
}

export default Root