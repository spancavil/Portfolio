import React from 'react'

type ButtonProps = {
  width?: number //pixel
  height?: number | string//pixel
  additionalStyles?: object
  children?: React.ReactNode
  onClick?: () => void
}

const Button = ({ width, height, children, additionalStyles, onClick = () => {} }: ButtonProps) => {

  return (
    <button
      onClick={onClick}
      style={{width: width, height: height, ...additionalStyles}}
      className={`transition ease-in-out duration-500 ${!width && 'w-[94px]'} rounded-lg font-jakarta font-bold text-center border-[1px] border-light-gray hover:bg-dark-gray`}
    >
      {children}
    </button>
  )
}

export default Button
