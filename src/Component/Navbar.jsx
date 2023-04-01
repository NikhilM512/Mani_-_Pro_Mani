import React from 'react'
import { Box } from "@chakra-ui/react"
import "./Navbar.css"
const Navbar = () => {
  return (
    <Box w="100%" m="auto" h="60px" p="10px 0px" display={"flex"} justifyContent="space-between" alignItems={"center"} className="navbar-box">
     <Box className="logobox" w="50%" >
          <h1>Logo</h1>
     </Box>
     <Box w="50%" display={"flex"} justifyContent="space-around" alignItems={"center"}>
          <h1 style={{color:"rgb(241, 51, 51)",fontWeight:"bold"}}>Home</h1>
          <h1 style={{color:"rgb(241, 51, 51)",fontWeight:"bold"}} >Product</h1>
          <h1 style={{color:"rgb(241, 51, 51)",fontWeight:"bold"}} >About</h1>
          <h1 style={{color:"rgb(241, 51, 51)",fontWeight:"bold"}}>Contact</h1>
     </Box>

    </Box>
  )
}

export default Navbar