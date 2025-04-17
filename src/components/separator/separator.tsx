import React from 'react'

type SeparatorProps = {
    styles?: object
}

const Separator = ({styles}: SeparatorProps) => {
  return (
    <hr className='w-full border-1 border-dashed border-light-gray my-10 md:my-20' style={{...styles}}/>
  )
}

export default Separator