import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { createPortal } from 'react-dom'
import DropDown from './DropDown'


function DropDownWrapper({size},ref) {


  const rootElement = document.getElementById('root')

  
  useImperativeHandle(ref,()=>{
    const closeModal = () => {
      setIsOpen(false)
      rootElement.removeEventListener('click',closeModal)
    }
  
    const openModal = () => {
      setIsOpen(true)
      rootElement.addEventListener('click',closeModal)
  
    } 
    return ({openModal,closeModal})
  },[rootElement])


  const [isOpen , setIsOpen] = useState(false)
  
  return createPortal(
    isOpen?<DropDown size={size} />:null

    , document.getElementById("dropDown"))
}

export default forwardRef(DropDownWrapper)