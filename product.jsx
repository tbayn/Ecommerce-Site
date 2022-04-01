import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  let params = useParams()
  useEffect( () => {
    fetchItem()
  }, [])

const [product, setProduct] = useState([])

  const fetchItem = async () => {
    const data = await fetch(`https://fakestoreapi.com/products/${params.id}`)
    const product = await data.json()
    setProduct(product)
  }

  return (
    <div className='prodContainer'>
      <img src = {product.image} alt = "" className ="prodImage"></img>
      <h2 className ="prodTitle">Title : {product.title}</h2>
      <h4 className = "prodPrice">${product.price}</h4>
      <p className="prodDesc">{product.description}</p>
      <p className="prodCategory">{product.category}</p>
    </div>
  )
}

export default Product