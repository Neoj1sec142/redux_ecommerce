import React, { useState, useEffect } from 'react'
import axios from 'axios'

function PurchaseForm() {
  const [products, setProducts] = useState([])
  const [selectedProducts, setSelectedProducts] = useState([])
  const [total, setTotal] = useState(0)

  useEffect(() => {
    axios.get('/api/products/')
      .then(response => setProducts(response.data))
  }, [])

  const handleProductChange = event => {
    const productId = event.target.value
    const product = products.find(product => product.id === productId)
    setSelectedProducts([...selectedProducts, product])
    setTotal(total + product.price)
  }

  const handleSubmit = event => {
    event.preventDefault()
    const productIds = selectedProducts.map(product => product.id)
    axios.post('/api/purchases/', { products: productIds, total })
      .then(response => console.log(response))
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Products</h2>
      <select onChange={handleProductChange}>
        {products.map(product =>
          <option key={product.id} value={product.id}>
            {product.name} - {product.price}
          </option>
        )}
      </select>
      <h2>Selected Products</h2>
      <ul>
        {selectedProducts.map(product =>
          <li key={product.id}>{product.name} - {product.price}</li>
        )}
      </ul>
    </form>
  )
}