import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import "./Aboute.css"
import {
     Breadcrumb,
     BreadcrumbItem,
     BreadcrumbLink,
     BreadcrumbSeparator,
} from '@chakra-ui/react'
import Footer from '../Component/Footer'


const Aboute = () => {
     return (
          <Box className="aboutebox" >
               <Box w="100%" h="400px" className="headimage" display={"flex"} alignItems={"end"}>
                    <Box ml="8%" mb="80px" p="30px" border={["0px solid white", "3px solid white", "3px solid white", "3px solid white"]} borderRight={["0px solid white", "0px solid white", "0px solid white", "0px solid white"]}>
                         <Heading fontSize={"45px"} color="white">Aboute Mani</Heading>
                         <Breadcrumb mt="10px" color="white" fontSize={"25px"}>
                              <BreadcrumbItem>
                                   <BreadcrumbLink href='/'>Home</BreadcrumbLink>
                              </BreadcrumbItem>

                              <BreadcrumbItem>
                                   <BreadcrumbLink href='/aboute'>Aboute</BreadcrumbLink>
                              </BreadcrumbItem>


                         </Breadcrumb>
                    </Box>
               </Box>

               <Box w="95%" m="auto" mt="100px" h="auto" display={"flex"} justifyContent={"space-around"} flexDirection={["column", "column", "row", 'row']}>
                    <Box w={["100%", "100%", "40%", "40%"]} h={["400px", "400px", "400px", "400px"]} className='abouteimage'>
                    </Box>
                    <Box w={["100%", "100%", "40%", "40%"]}>
                         <Heading width={"fit-content"} borderBottom={"5px solid red"}>We are Mani</Heading>
                         <Text mt="10px">Initiative of Adarsh Hardware,
                              LAPO is the best and as well as rising Door
                              Locks & Handles company with a perfect and
                              clear vision of providing their customers with the design as well as
                              quality wise best of products and making them completely happy as well
                              as proud of choosing us.
                         </Text>
                         <Text mt="20px">
                              The initial phase of Adarsh hardware was started by Laljibhai Popatbhai Dholariya when he started the General hardware store back in 1983, we started selling premium hardware products from that of year 2008 and since then we are highly trusted among our customers for our premium quality hardware products and the best of service, we provide to them and due to this trust, we opened our first 2500 sq. feet showroom in Ahmedabad in the year 2016.
                         </Text>
                    </Box>



               </Box>
               <Box className='footerimage' w="100%" mt="20px"  display={"flex"} justifyContent={"space-around"} alignItems={"center"} h="300px" bgColor={"rgb(241, 51, 51)"}>
                    <Box color="white"  textAlign={"center"}>
                         <Text w="80%" m="auto">
                         The initial phase of Adarsh hardware was started by Laljibhai Popatbhai Dholariya when he started the General hardware store back in 1983, we started selling premium hardware products from that of year 2008 and since then we are highly trusted among our customers for our premium quality hardware products and the best of service, we provide to them and due to this trust, we opened our first 2500 sq. feet showroom in Ahmedabad in the year 2016.
 
                         </Text>
                         <Heading>Mani</Heading>

                    </Box>
               </Box>
               <footer>
                    <Box display={"flex"} alignItems="center" justifyContent="space-around">
                         <Footer>
                              
                         </Footer>
                    </Box>

               </footer>


          </Box>
     )
}

export default Aboute