import React, {useState, useEffect} from 'react'
import { Link, Outlet } from 'react-router-dom'

const Products = () => {
  useEffect( () => {
    fetchItems()
  }, [])

const [products, setProducts] = useState([])

  const fetchItems = async () => {
    const data = await fetch('https://fakestoreapi.com/products')
    const products = await data.json()
    setProducts(products)
  }

  return (
    <div className='prodListContainer'>
      {products.map(product => (
       <Link to ={`/products/${product.id}`} className = 'prodList' key = {product.id}>
         <p key ={product.id}>{product.title}</p>
       </Link>
      ))}
      <Outlet />
    </div>
  )
}

export default Products