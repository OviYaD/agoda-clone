import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { createPortal } from 'react-dom'
import DropDown from './DropDown'


function DropDownWrapper(prop,ref) {

  useImperativeHandle(ref,()=>{
    return ({setIsOpen})
  },[])

  const [isOpen , setIsOpen] = useState(false)

  return createPortal(
    isOpen?<DropDown />:null

    , document.getElementById("dropDown"))
}

export default forwardRef(DropDownWrapper)