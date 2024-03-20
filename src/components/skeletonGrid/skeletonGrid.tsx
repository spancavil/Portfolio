import React from 'react'
import { Skeleton } from '@mui/material'

const SkeletonGrid = () => {
  return (
    <>
      <Skeleton
        sx={{ bgcolor: '#2B2B2B' }}
        variant="circular"
        width={40}
        height={40}
        animation={'wave'}
      />
      <Skeleton
        sx={{ bgcolor: '#2B2B2B' }}
        variant="rectangular"
        width={210}
        height={60}
        animation={'wave'}
      />
      <Skeleton
        sx={{ bgcolor: '#2B2B2B' }}
        variant="rounded"
        width={210}
        height={60}
        animation={'wave'}
      />
    </>
  )
}

export default SkeletonGrid
