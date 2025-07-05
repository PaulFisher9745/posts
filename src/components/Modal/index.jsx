import React from 'react'
import * as SC from "./styled"
import Button from '../ui/Button';

const Modal = ({children,...props}) => {

const ModalStopPropagation = (e) => {
    e.stopPropagation();
  }

  return (
    <SC.ModalWrapper onClick={props.modalWrapper}>
            <SC.Modal onClick={ModalStopPropagation}>
              <SC.ModalText>{children}</SC.ModalText>
              <SC.ModalContent>
                <SC.DeleteButton onClick={props.deleteButton}>Да</SC.DeleteButton>
                <Button onClick={props.button}>Нет</Button>
              </SC.ModalContent>
            </SC.Modal>
    </SC.ModalWrapper>
  )
}

export default Modal