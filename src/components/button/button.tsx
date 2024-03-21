import React from 'react'

type ButtonProps = {
  width?: number //Pixels
  children?: React.ReactNode
  onClick?: () => void
}

const Button = ({ width, children, onClick = () => {} }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`transition ease-in-out duration-500 w-[${width ? width : '96'}px] p-[4px] rounded-lg font-jakarta font-bold text-center border-[1px] border-light-gray hover:bg-dark-gray`}
    >
      {children}
    </button>
  )
}

export default Button
