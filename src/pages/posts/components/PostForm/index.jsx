import React, { useState } from 'react'
import * as SC from "./styled"
import Container from '../../../../components/ui/Container'
import Typo from '../../../../components/ui/Typo'
import Form from '../../../../components/ui/Form'
import Field from '../../../../components/ui/Field'
import { Input } from '../../../../components/ui/Input/styled'

const DEFAULT_VALUE = {
        title: "",
        body: ""
    }

const PostForm = ({title, onSubmitForm, defaultValues}) => {

    const [formValues, setFormValues] = useState(defaultValues || DEFAULT_VALUE)

    const onChange = (name, value) => {
        setFormValues({...formValues,[name]: value})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onSubmitForm(formValues)
        !defaultValues && setFormValues(DEFAULT_VALUE)
    }

    const disabled = !formValues.title || !formValues.body

  return (
    <Container>
        <Typo>{title}</Typo>
        <Form onSubmit={onSubmit} action="">
            <Field>
                <Input 
                    type="text" 
                    name='title' 
                    placeholder="Заголовок поста"
                    value={formValues.title}
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                />
            </Field>
            <Field>
                <SC.TextArea 
                    rows={10} 
                    cols={30} 
                    name='body' 
                    placeholder="Текст"
                    value={formValues.body}
                    onChange={(e) => onChange(e.target.name, e.target.value)}
                />                    
            </Field>
            <SC.Button disabled={disabled} type='submit'>Сохранить</SC.Button>
        </Form>
    </Container>
  )
}

export default PostForm