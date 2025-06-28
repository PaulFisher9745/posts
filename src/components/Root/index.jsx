import React from 'react'
import { Outlet } from 'react-router-dom'
import * as SC from './styled'
import Container from '../Container'

const Root = () => {
  return (
    <>
     <Container>
        <SC.Menu>
            <SC.MenuItem to={"/"}>Главная</SC.MenuItem>
            <SC.MenuItem to={"/posts"}>Список постов</SC.MenuItem>
            <SC.MenuItem to={"/auth"}>Авторизация</SC.MenuItem>
            <SC.MenuItem to={"/registration"}>Регистрация</SC.MenuItem>
          </SC.Menu>
      </Container> 
      <Outlet/> 
    </>      
  )
}

export default Root