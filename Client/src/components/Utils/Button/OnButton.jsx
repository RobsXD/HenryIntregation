import React from 'react'

export const OnButton = ({onclick, text, type}) => {
  return (
    <div>
      <button type={type} onClick={onclick}>{text}</button>
    </div>
  )
}
