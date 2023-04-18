import React from 'react'

const Button = ({title,btnStyle}) => {
    const defualtStyle =" py-2 px-3  rounded-lg bg-blue-600"
    const defualtTitle ="click me"
  return (
    <button className={btnStyle?btnStyle: defualtStyle}>
        {title?title:defualtTitle}
    </button>
  )
}

export default Button;