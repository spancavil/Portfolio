import Image from 'next/image'
import React from 'react'

type CarouselImageProps = {
  width?: number | string
  height?: number | string
  src: string
}

const CarouselImage = ({
  width = '100%',
  height = '100%',
  src,
}: CarouselImageProps) => {
  return (
    <div
      style={{
        width,
        height,
        position: 'relative',
        backgroundImage: `url(${src})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'contain',
        backgroundColor: '#2B2B2B',
      }}
    />
  )
}

export default CarouselImage
