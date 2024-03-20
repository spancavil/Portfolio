import React from 'react'

const getData = async () => {
  const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json()
  return data
}

const FakestoreData = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  const products = await getData()
  return products.map((product: any) => {
    return <h1 key={product.id}>{product.title}</h1>
  })
}

export default FakestoreData
