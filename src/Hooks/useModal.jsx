
import { useState } from 'react'


const useModal = () => {
    const[modalState,setModalState]=useState(false)
    const ModalShowHandler=()=>{
        setModalState(true)
    }
const ModalHideHandler=()=>{
    setModalState(false)
    
}
  return {
    modalState,
    ModalHideHandler,
    ModalShowHandler
  }
}

export default useModal;