import React from 'react'
import {Routes,Route} from "react-router-dom"
import Homepage from './Homepage'
import Aboute from './Aboute'
import Product from './Product'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/aboute" element={<Aboute/>}/>
      <Route path="/products" element={<Product/>}/>
    </Routes>
  )
}

export default AllRoutes;