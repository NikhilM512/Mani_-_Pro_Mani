import React, { useEffect } from 'react'
import Navbar from '../Component/Navbar'
import { Box } from "@chakra-ui/react"
import 'aos/dist/aos.css';
import AOS from 'aos';
import handle1Img from "../Images/Pull-Door-Handle_Peacock.jpg";
import handle2Img from "../Images/Lapo-4-Inch-Rose-Gold-Finish-1.jpg";
import handle3Img from "../Images/Lapo-Cool-Gold-Finish-1.jpg";
import handle4Img from "../Images/handHandle.avif";
import handle5Img from "../Images/handle6.jpg"
import "./Homepage.css"
import Footer from '../Component/Footer';
const Homepage = () => {

     useEffect(() => {
          AOS.init({ duration: "1500" });
     }, [])
     return (
          <div className="homepagebox">

               <header>
                    <div className='text-container'>
                         <h1>Welcome to Mani</h1>
                         <span>Classic Interior Hardware</span>
                    </div>
               </header>
               <h1 style={{ textAlign: "center", fontSize: "44px", fontWeight: "bold",margin:"2% 0%" }}>Photo Gallary</h1>
               <Box  w="95%" m="auto" bgColor={"rgb(241, 51, 51)"} mb="30px" display={"flex"} flexDirection={['column','column','column','row']} alignItems='center' justifyContent={'space-around'}>
                    <Box m="2%"  h="350px" w="350px"  overflow={"hidden"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
                         <img className='photo-gallary' src={handle1Img} alt="" />
                    </Box>
                    <Box m="2%"  h="350px" w="350px" overflow={"hidden"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
                         <img className='photo-gallary' src={handle3Img} alt="" />
                    </Box>
                    <Box m="2%"  h="350px" w="350px" overflow={"hidden"} boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
                         <img className='photo-gallary' src={handle5Img} alt="" />
                    </Box>


               </Box>
               <Box  w="95%" m="auto" mt="25px" borderTop={"1px solid rgb(241, 51, 51)"}></Box>
               <Box  className='sofa1box' w="100%" m="auto"  mt="2%" p="10%">
                    {/* <img style={{width:"100%", height:"auto",position:"relative"}} src={"sofa.png"} alt="" /> */}
                    <Box className='text-container' display={["flex","flex","flex","flex"]} flexDirection={"column"} w={["95%","95%","50%","40%"]} >
                         <h1 >50% off</h1>
                         <h1 >Mortoise Door Handle</h1>
                         <p >Star Gold Antique Finish, Star Gold CP Matt Finish, 4 inch Antique Finish, 4 inch Copper Finish, 4 inch Matt Finish on Door Pull Handles.Book Now...!</p>
                    </Box>
               </Box>
               <Box className='backphoto' w="100%" h="100px" >

               </Box>
               <Box className='sofa2box' w="100%" m="auto" p="10%" >
                    {/* <img style={{width:"100%", height:"auto",position:"relative"}} src={"sofa.png"} alt="" /> */}
                    <Box className='text-container' display={["flex","flex","flex","flex"]} flexDirection={"column"} w={["95%","95%","50%","40%"]} >
                         <h1 >25% off</h1>
                         <h1 >Bathroom Accesories</h1>
                         <p >Star Gold Antique Finish, Star Gold CP Matt Finish, 4 inch Antique Finish, 4 inch Copper Finish, 4 inch Matt Finish on Door Pull Handles.Book Now...!</p>
                    </Box>
               </Box>
               <Box className='backphoto' w="100%" h={["100px","100px","300px","300px"]} >

               </Box>
               <Box w=" 90%" m="auto" mb="30px" mt="30px" >
                    <Box w="100%" mt="100px" display={"flex"} 
                    flexDirection={["column","column","row","row"]} justifyContent="space-around">
                         <Box data-aos="fade-right" w={["95%","95%","38%","38%"]} 
                          h="444px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
                              <img style={{ width: "100%", height: "100%" }} src={handle1Img} alt="handle1Img" />
                         </Box>
                         <Box w={["95%","95%","38%","38%"]} className="category-box" mt={{base:"5%",sm:"5%"}}
                          h="444px" borderRadius="25px 5px 25px 5px" bg="blackAlpha.900" data-aos="fade-left" display={"flex"} 
                          justifyContent='center' alignItems="center" >
                              <Box w="95%" m="auto" textAlign={'justify'} p="5%">
                                   <h1 style={{ fontSize: "25px", fontWeight: "bold", color: "red" }}>Category:- Peacock Diamond Left side Gold Finish</h1>
                                   <p style={{ fontSize: "15px", fontWeight: "bold", color: "red" }}>The main factor making the distinction between a door
                                        handle and a door knob is that door knobs have a circular
                                        head to operate the opening and closing mechanism.</p>
                              </Box>
                         </Box>
                    </Box>
                    <Box w="100%" mt="100px" display={"flex"} flexDirection={["column","column","row","row"]}  justifyContent="space-around">

                         <Box w={["95%","95%","38%","38%"]} mt="5%" className="category-box" h="444px" mb={{base:"5%",sm:"5%"}} data-aos="fade-right" 
                         borderRadius="5px 25px 5px 25px" bg="blackAlpha.900" display={"flex"} alignItems="center" justifyContent='center'>
                              <Box   w="90%" m="auto" p="5%" >
                                   <h1 style={{ fontSize: "25px", fontWeight: "bold", color: "red" }}>Category:- Cool Gold finish</h1>
                                   <p style={{ fontSize: "15px", fontWeight: "bold", color: "red" }}>The main factor making the distinction between a door
                                        handle and a door knob is that door knobs have a circular
                                        head to operate the opening and closing mechanism.</p>
                              </Box>
                         </Box>
                         <Box data-aos="fade-left" w={["95%","95%","38%","38%"]} h="444px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
                              <img style={{ width: "100%", height: "100%" }} src={handle3Img} alt="handle3Img" />
                         </Box>
                    </Box>
                    <Box w="100%" mt="100px" display={"flex"} flexDirection={["column","column","row","row"]} justifyContent="space-around">
                         <Box data-aos="fade-right" w={["95%","95%","38%","38%"]} h="444px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
                              <img style={{ width: "100%", height: "100%" }} src={handle2Img} alt="handle2Img" />
                         </Box>
                         <Box w={["95%","95%","38%","38%"]} borderRadius="25px 5px 25px 5px" bg="blackAlpha.900" mt={{base:"5%",sm:"5%"}} className="category-box" h="444px"  data-aos="fade-left" display={"flex"} alignItems="center" >
                              <Box   w="90%" m="auto" p="5%" >
                                   <h1 style={{ fontSize: "25px", fontWeight: "bold", color: "red" }}>Category:- 4 Inch Rose Gold Finish</h1>
                                   <p style={{ fontSize: "15px", fontWeight: "bold", color: "red" }}>The main factor making the distinction between a door
                                        handle and a door knob is that door knobs have a circular
                                        head to operate the opening and closing mechanism.</p>
                              </Box>
                         </Box>
                    </Box>
                    <Box w="100%" mt="100px" flexDirection={["column","column","row","row"]}  display={"flex"} justifyContent="space-around">

                         <Box w={["95%","95%","38%","38%"]} mt="5%" borderRadius="25px 5px 25px 5px" bg="blackAlpha.900" mb={{base:"5%",sm:"5%"}} className="category-box" h="444px" data-aos="fade-right" display={"flex"} alignItems="center" >
                              <Box   w="90%" m="auto" p="5%" >
                                   <h1 style={{ fontSize: "25px", fontWeight: "bold", color: "red" }}>Category:- Cool Antique Finish</h1>
                                   <p style={{ fontSize: "15px", fontWeight: "bold", color: "red" }}>The main factor making the distinction between a door
                                        handle and a door knob is that door knobs have a circular
                                        head to operate the opening and closing mechanism.</p>
                              </Box>
                         </Box>
                         <Box data-aos="fade-left" w={["95%","95%","38%","38%"]} height= "444px" boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px">
                              <img style={{ width: "100%", height: "100%" }} src="https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/61fgoQMJDIS._SY355_.jpg" alt="handle2Img" />
                         </Box>
                    </Box>

               </Box>
               <footer>
                    <Box display={"flex"} alignItems="center" justifyContent="space-around">
                         <Footer>
                              
                         </Footer>
                    </Box>

               </footer>



          </div>
     )
}

export default Homepage