import React, { useEffect } from 'react'
import Navbar from '../Component/Navbar'
import { Box } from "@chakra-ui/react"
import 'aos/dist/aos.css';
import AOS from 'aos';

import "./Homepage.css"
const Homepage = () => {



     useEffect(() => {
          AOS.init({ duration: "1500" });
     }, [])
     return (
          <div className="homepagebox">

               <header>
                    <div className='text-container'>
                         <h1>Welcome to our webiste</h1>
                         <span>Furniture buying webiste</span>
                    </div>
               </header>
               <h1 style={{ textAlign: "center", fontSize: "30px", fontWeight: "bold" }}>Photo Gallary</h1>
               <Box w="95%" m="auto" bgColor={"rgb(241, 51, 51)"} mb="30px" display={"flex"} justifyContent="space-around">
                    <Box w="400px" h="280px" overflow={"hidden"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
                         <img className='photo-gallary' src="https://cdn.shopify.com/s/files/1/0503/8243/8596/files/Shop-by-room-Category-Living-Room_dae68ee3-71c7-43e5-971f-faf9ba5509b5_400x.jpg?v=1671084572" alt="" />
                    </Box>
                    <Box w="400px" h="280px" overflow={"hidden"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
                         <img className='photo-gallary' src="https://cdn.shopify.com/s/files/1/0503/8243/8596/files/Shop-by-room-Category-Bedroom_99b0624d-8c8c-498d-a3fb-0e56e9062392_400x.jpg?v=1671084590" alt="" />
                    </Box>
                    <Box w="400px" h="280px" overflow={"hidden"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
                         <img className='photo-gallary' src="https://cdn.shopify.com/s/files/1/0503/8243/8596/files/Shop-by-room-Category-Dining-Set_a4faa2eb-4bef-471e-836f-50e08da0f774_400x.jpg?v=1671084607" alt="" />
                    </Box>


               </Box>
               <Box w="95%" m="auto" mt="25px" borderTop={"1px solid rgb(241, 51, 51)"}></Box>
               <Box className='sofa1box' w="100%" m="auto" h="600px" mt="30px" p="100px">
                    {/* <img style={{width:"100%", height:"auto",position:"relative"}} src={"sofa.png"} alt="" /> */}
                    <Box className='text-container' display={["none","none","flex","flex"]} flexDirection={"column"} w={["95%","95%","auto","auto"]} >
                         <h1 style={{ fontSize: "50px", color: "#F3B705", fontWeight: "bold" }}>50% off</h1>
                         <h1 style={{ fontSize: "50px", color: "#F3B705", fontWeight: "bold" }}>Weekend Trendy Sofa</h1>
                         <p>Search from 4560201 Wood Furniture stock photos, pictures and royalty-free images from iStock. Find high-quality stock photos that you won't find anywhere else.</p>
                    </Box>
               </Box>
               <Box className='backphoto' w="100%" h="100px" >

               </Box>
               <Box className='sofa2box' w="100%" m="auto" h="600px" p="100px">
                    {/* <img style={{width:"100%", height:"auto",position:"relative"}} src={"sofa.png"} alt="" /> */}
                    <Box className='text-container' display={["none","none","flex","flex"]} flexDirection={"column"} w={["95%","95%","auto","auto"]} >
                         <h1 style={{ fontSize: "50px", color: "#F3B705", fontWeight: "bold" }}>25% off</h1>
                         <h1 style={{ fontSize: "50px", color: "#F3B705", fontWeight: "bold" }}>Trendy Chairs</h1>
                         <p>Search from 4560201 Wood Furniture stock photos, pictures and royalty-free images from iStock. Find high-quality stock photos that you won't find anywhere else.</p>
                    </Box>
               </Box>
               <Box className='backphoto' w="100%" h={["100px","100px","300px","300px"]} >

               </Box>
               <Box w=" 90%" m="auto" mt="30px"  >
                    <Box w="100%" mt="100px" display={"flex"} flexDirection={["column","column","row","row"]} justifyContent="space-around">
                         <Box data-aos="fade-right" w={["95%","95%","38%","38%"]} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
                              <img style={{ width: "100%", height: "100%" }} src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61fgoQMJDIS._SY355_.jpg" alt="" />
                         </Box>
                         <Box w={["95%","95%","38%","38%"]} data-aos="fade-left" display={"flex"} alignItems="center" >
                              <Box    w="90%" m="auto" p="10px 10px" >
                                   <h1 style={{ fontSize: "25px", fontWeight: "bold", color: "rgb(241, 51, 51)" }}>Category:-Zinc Alloy</h1>
                                   <p style={{ fontSize: "15px", fontWeight: "bold", }}>The main factor making the distinction between a door
                                        handle and a door knob is that door knobs have a circular
                                        head to operate the opening and closing mechanism. Door</p>
                              </Box>
                         </Box>
                    </Box>
                    <Box w="100%" mt="100px" display={"flex"} flexDirection={["column","column","row","row"]}  justifyContent="space-around">

                         <Box w={["95%","95%","38%","38%"]} data-aos="fade-right" display={"flex"} alignItems="center" >
                              <Box   w="90%" m="auto" p="10px 10px" >
                                   <h1 style={{ fontSize: "25px", fontWeight: "bold", color: "rgb(241, 51, 51)" }}>Category:-Zinc Alloy</h1>
                                   <p style={{ fontSize: "15px", fontWeight: "bold", }}>The main factor making the distinction between a door
                                        handle and a door knob is that door knobs have a circular
                                        head to operate the opening and closing mechanism. Door</p>
                              </Box>
                         </Box>
                         <Box data-aos="fade-left" w={["95%","95%","38%","38%"]} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
                              <img style={{ width: "100%", height: "100%" }} src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61fgoQMJDIS._SY355_.jpg" alt="" />
                         </Box>
                    </Box>
                    <Box w="100%" mt="100px" display={"flex"} flexDirection={["column","column","row","row"]}   justifyContent="space-around">
                         <Box data-aos="fade-right" w={["95%","95%","38%","38%"]} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
                              <img style={{ width: "100%", height: "100%" }} src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61fgoQMJDIS._SY355_.jpg" alt="" />
                         </Box>
                         <Box w={["95%","95%","38%","38%"]} className="category-box" data-aos="fade-left" display={"flex"} alignItems="center" >
                              <Box   w="90%" m="auto" p="10px 10px" >
                                   <h1 style={{ fontSize: "25px", fontWeight: "bold", color: "rgb(241, 51, 51)" }}>Category:-Zinc Alloy</h1>
                                   <p style={{ fontSize: "15px", fontWeight: "bold", }}>The main factor making the distinction between a door
                                        handle and a door knob is that door knobs have a circular
                                        head to operate the opening and closing mechanism. Door</p>
                              </Box>
                         </Box>
                    </Box>
                    <Box w="100%" mt="100px" flexDirection={["column","column","row","row"]}  display={"flex"} justifyContent="space-around">

                         <Box w={["95%","95%","38%","38%"]}  className="category-box" data-aos="fade-right" display={"flex"} alignItems="center" >
                              <Box   w="90%" m="auto" p="10px 10px" >
                                   <h1 style={{ fontSize: "25px", fontWeight: "bold", color: "rgb(241, 51, 51)" }}>Category:-Zinc Alloy</h1>
                                   <p style={{ fontSize: "15px", fontWeight: "bold", }}>The main factor making the distinction between a door
                                        handle and a door knob is that door knobs have a circular
                                        head to operate the opening and closing mechanism. Door</p>
                              </Box>
                         </Box>
                         <Box data-aos="fade-left" w={["95%","95%","38%","38%"]} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
                              <img style={{ width: "100%", height: "100%" }} src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61fgoQMJDIS._SY355_.jpg" alt="" />
                         </Box>
                    </Box>
                
                  
                 
         


               </Box>
               <footer>
                    <Box display={"flex"} alignItems="center" justifyContent="space-around">

                    </Box>

               </footer>



          </div>
     )
}

export default Homepage