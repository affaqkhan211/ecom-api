import React from "react"
import Home from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import ProductDetails from "./pages/ProductDetails"

const App = () => {

  return (
    <>
    <Routes>
      <Route path = "/" element = {<Home/>}/>
      <Route path = "/product-detail/:id" element = {<ProductDetails/>}/>
      </Routes>
    </>
  )
}

export default App


// useEffect 
// api calls
// application programming interface