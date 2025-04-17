import React from 'react'

type InputProps = {
  type?: React.HTMLInputTypeAttribute
  value?: string
  disabled?: boolean
  onClick?: ()=>void
  onChange?: (text: string) => void
}

const Input = ({
  type,
  value = '',
  disabled = false,
  onClick = () => {},
  onChange = () => {},
}: InputProps) => {
  return (
    <input
      className="p-3 rounded block bg-gray text-white font-bold w-full focus:outline-none font-buda text-xl"
      type={type || 'text'}
      disabled = {disabled}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onClick={onClick}
    />
  )
}

export default Input
