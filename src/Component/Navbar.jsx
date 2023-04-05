import React from 'react'
import { Box, useDisclosure, Input, Button, Icon, Image } from "@chakra-ui/react"
import "./Navbar.css";
import logo from "../Images/MANI LOGO.jpg";
import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { Link } from 'react-router-dom';

const links = [
  {
    path: "/",
    title: "Home"
  },
  {
    path: "/products",
    title: "Products"
  },
  {
    path: "/aboute",
    title: "Aboute"
  },
  {
    path: "/contact",
    title: "Contact"
  },
]



const Navbar = () => {

  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef();

  return (
    // <Box border="10px solid rgb(241, 51, 51)"  
    //  p="10px 0px" 
    // display={"flex"} justifyContent="space-between" 
    // alignItems={"center"} className="navbar-box">
    //  <Box className="logobox" ml={{base:'-1px',sm:'-1px'}}  w={["60%","55%","50%","50%"]} >
    //       <img src={logo} alt="maniLogo" />
    //  </Box>
    //  <Box className='menu-div' w="50%" display={["none","none","none","flex"]} justifyContent="space-around" alignItems={"center"}>
    //       <h1 >Home</h1>
    //       <h1  >Product</h1>
    //       <h1  >About</h1>
    //       <h1 >Contact</h1>
    //  </Box>
    //  <Icon as={HamburgerIcon} w={12} h={10} mr="5%" onClick={onOpen} border="3px solid red" borderRadius="5px" p="1%" color='red.500' display={["flex","flex","flex","none"]}/>
    //  <Drawer
// ---------------------------------------------------
    <Box border="10px solid rgb(241, 51, 51)"
      p="10px 0px"
      display={"flex"} justifyContent="space-between"
      alignItems={"center"} className="navbar-box">
      <Box className="logobox" w="50%" >
        <img src={logo} alt="maniLogo" />
      </Box>
      <Box className='menu-div' w="50%" display={["none", "none", "none", "flex"]} justifyContent="space-around" alignItems={"center"}>
    
        {
         links.map((ele,index)=>(
          <Link key={index} to={ele.path}><h1 className='navlinks' >{ele.title}</h1></Link>
         ))
        }
      </Box>
      <Icon as={HamburgerIcon} w={12} h={10} mr="5%" onClick={onOpen} border="3px solid red" borderRadius="5px" p="1%" color='red.500' display={["flex", "flex", "flex", "none"]} />
      <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg='black' >
{/* <<<<<<< HEAD
          <DrawerCloseButton color={'red'} h="50px" fontSize={25}/>
          <DrawerHeader bg='black' display={'flex'} justifyContent='center' mt={["20%","15%","10%","10%"]}>
======= */}
{/* ----------------------------------------Inc------------------------- */}
          <DrawerCloseButton color={'red'} h="50px" fontSize={25} />
          <DrawerHeader bg='black' display={'flex'} justifyContent='center' mt="10%">
{/* >>>>>>> 1b107401a280b0122d12d6160574c1ccf3dd7688 */}
            <Image borderRadius={'50%'} src={logo} w="125px" h="111px"></Image>
          </DrawerHeader>

          <DrawerBody display={'flex'}
            flexDirection='column'
            justifyContent={'space-around'}
            alignItems='center'
            className='drawer-menu-div'
            color={'blackAlpha.700'}
            bg='black' fontSize={22} >
            <h1 >Home</h1>
            <h1  >Product</h1>
            <h1  >About</h1>
            <h1 >Contact</h1>
          </DrawerBody>

          <DrawerFooter display={'flex'} justifyContent='center' bg='black'>
            <Button _hover={{ color: 'red', backgroundColor: "black" }} variant='outline' fontSize={22} mb={5} bg='red' color='black' borderColor={'red'} onClick={onClose}>
              Cancel
            </Button>

          </DrawerFooter>
        </DrawerContent>
      </Drawer>

    </Box>
  )
}

export default Navbar

