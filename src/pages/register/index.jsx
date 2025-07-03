import React, { useState } from 'react'
import Typo from '../../components/ui/Typo'
import Container from '../../components/ui/Container'
import Form from '../../components/ui/Form'
import Field from '../../components/ui/Field'
import Input from '../../components/ui/Input'
import { useNavigate } from 'react-router-dom'

const RegistrationPage = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
    email: "",
    password: ""
  })
  const navigate = useNavigate()
  const userId = Date.now()
  const onSubmit = (e) => {
    e.preventDefault()
    try {
      const users = JSON.parse(localStorage.getItem("users"))
      const newUser = {id: userId, ...formValues}
      if(!users) {
        localStorage.setItem("users",JSON.stringify([newUser]))
        alert("Вы успешно зарегестрировались")
        navigate("/auth")
        return
      }
      if(users.find((user) => user.email === formValues.email)) {
        alert("Пользователь с таким Email уже есть!")
        return
      }

      users.push(newUser)
      localStorage.setItem("users",JSON.stringify(users))
      alert("Вы успешно зарегестрировались")
      navigate("/auth")
    } catch (error) {
      console.log(error)
    }
  }

  const onChange = (name, value) => {
      setFormValues({...formValues,[name]: value})
  }

  const disabled = !formValues.email || !formValues.password
  return (
    <Container>
      <Typo>Страница регистрации</Typo>
      <Form onSubmit={onSubmit} autoComplete="off">
        <Field>
          <Input
            type="text" 
            name='name' 
            placeholder="Имя"
            value={formValues.name}
            onChange={(e) => onChange(e.target.name, e.target.value)}   
          />
        </Field>
        <Field>
          <Input
            type="text" 
            name='surname' 
            placeholder="Фамилия"
            value={formValues.surname}
            onChange={(e) => onChange(e.target.name, e.target.value)}   
          />
        </Field>
        <Field>
          <Input
            type="text" 
            name='email' 
            placeholder="Почта"
            value={formValues.email}
            onChange={(e) => onChange(e.target.name, e.target.value)}   
          />
        </Field>
        <Field>
          <Input
            type="password" 
            name='password' 
            placeholder="Пароль"
            value={formValues.password}
            onChange={(e) => onChange(e.target.name, e.target.value)} 
          />
        </Field>
        <button disabled={disabled} type='submit'>Регистрация</button>
      </Form>
    </Container>
  )
}

export default RegistrationPage