import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const {id} = useParams()
    const [product, setProduct] = useState();

    useEffect(()=>{
        getProductDetail()
    },[])
    const getProductDetail = async () => {
        const {data} = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(data)
    }
    
  return (
    <>
        <div className="container">
            <img className='w-100' src={product?.image} alt="" />
            <h4>{product?.title}</h4>
            <p>{product?.description}</p>
        </div>
    </>
  )
}

export default ProductDetails