import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getAllProducts()
    }, [])
    const getAllProducts = async () => {
        const {data} = await axios.get("https://fakestoreapi.com/products")
        setProducts(data)
    }

    console.log(products);
    return (
        <>
            <h1 className='text-center'>Products</h1>
            <div className="container">
                <div className="row">
                    {
                        products.map((product)=>(
                            <>
                            <div className="col-lg-4 col-md-4 col-sm-12 text-center">
                            <Link style={{color : "black", textDecoration : "none"}} to = {`/product-detail/${product.id}`}>
                                <img src={product.image} alt="" style={{width : "350px", height : "350px"}}/>
                                <h3>{product.title}</h3>
                                </Link>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Home