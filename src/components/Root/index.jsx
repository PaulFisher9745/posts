import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import * as SC from './styled'
import Container from '../../components/ui/Container/index'
import Link from '../../components/ui/Link/index'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/slices/authSlice'
import Button from '../ui/Button'

const Root = () => {
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onClickExitBtn = () => {
    console.log("work")
    dispatch(logout())
    navigate("/auth")
  }

  return (
    <>
     <Container>
        <SC.Menu>
            <Link simple={false} to={"/"}>Главная</Link>
            <Link simple={false} to={"/posts"}>Список постов</Link>
            {!user && <Link simple={false} to={"/auth"}>Авторизация</Link>}
            {!user &&  <Link simple={false} to={"/registration"}>Регистрация</Link>}
            {user && <Link simple={false} to={"/posts/add"}>Добавление поста</Link>}
            {user && <Button onClick={onClickExitBtn}>Выход</Button>}
          </SC.Menu>
      </Container> 
      <Outlet/> 
    </>      
  )
}

export default Root