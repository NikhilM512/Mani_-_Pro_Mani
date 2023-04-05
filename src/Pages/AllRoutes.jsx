import React from 'react'
import {Routes,Route} from "react-router-dom"
import Homepage from './Homepage'
import Aboute from './Aboute'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/aboute" element={<Aboute/>}/>
    </Routes>
  )
}

export default AllRoutes;