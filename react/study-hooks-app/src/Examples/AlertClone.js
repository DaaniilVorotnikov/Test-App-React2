import React, {useContext} from 'react'
import {useAlert} from './AlertContext'

export default function Alert(){
  const alert =  useAlert()

  if(!alert.visible) return null
    return(
    <div onClick={alert.toggle}>
     <p>This is a very important massage</p>
    </div>
    )
}