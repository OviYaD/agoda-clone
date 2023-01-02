import React from 'react'
import { createPortal } from 'react-dom'


function DropDown() {

  return createPortal(
    <div>DropDown</div>

    , document.getElementById("dropDown"))
}

export default DropDown