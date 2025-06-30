import React, { useState } from 'react'
import * as SC from "./styled"
import Container from '../../../../components/Container'
import Typo from '../../../../components/Typo'
import { useDispatch } from 'react-redux'
import { addPost } from '../../../../redux/slices/postsSlice'

const DEFAULT_VALUE = {
        title: "",
        body: ""
    }

const PostForm = () => {
    const dispatch = useDispatch()

    const [formValues, setFormValues] = useState(DEFAULT_VALUE)

    const onChange = (name, value) => {
        setFormValues({...formValues,[name]: value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(addPost(formValues))
        setFormValues(DEFAULT_VALUE)
    }

    const disabled = !formValues.title || !formValues.body

  return (
    <Container>
        <Typo>Добавление нового поста</Typo>
        <SC.Form onSubmit={onSubmit} action="">
            <SC.Field>
                <SC.Input 
                    type="text" 
                    name='title' 
                    placeholder="Заголовок поста"
                    value={formValues.title}
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                />
            </SC.Field>
            <SC.Field>
                <SC.TextArea 
                    rows={10} 
                    cols={30} 
                    name='body' 
                    placeholder="Текст"
                    value={formValues.body}
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                />                    
            </SC.Field>
            <SC.Button disabled={disabled} type='submit'>Сохранить</SC.Button>
        </SC.Form>
    </Container>
  )
}

export default PostForm