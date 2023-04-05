import { Box, Heading, Image, SimpleGrid, Icon } from '@chakra-ui/react';
import React,{useEffect} from 'react';
// import Image9 from "../Images/handle9.jpg"
import Img1 from "../Images/Mortise Handle Locks/MortiseHandle-1.jpg";
import Img2 from "../Images/Mortise Handle Locks/MortiseHandle-2.jpg";
import Img3 from "../Images/Mortise Handle Locks/MortiseHandle-3.jpg";
import Img4 from "../Images/Mortise Handle Locks/MortiseHandle-4.jpg";
import Img5 from "../Images/Mortise Handle Locks/MortiseHandle-5.jpg";
import Img6 from "../Images/Mortise Handle Locks/MortiseHandle-6.jpg";
import Img7 from "../Images/Mortise Handle Locks/MortiseHandle-7.jpg";
import Img8 from "../Images/Mortise Handle Locks/MortiseHandle-8.jpg";
import Img9 from "../Images/Mortise Handle Locks/MortiseHandle-9.jpg";
import Img10 from "../Images/Mortise Handle Locks/MortiseHandle-10.jpg";
import Img11 from "../Images/Mortise Handle Locks/MortiseHandle-11.jpg";
import Img12 from "../Images/Mortise Handle Locks/MortiseHandle-12.jpg";
import Img13 from "../Images/Mortise Handle Locks/MortiseHandle-13.jpg";
import Img14 from "../Images/Mortise Handle Locks/MortiseHandle-14.jpg";
import Img15 from "../Images/Mortise Handle Locks/MortiseHandle-15.jpg";
import Img16 from "../Images/Mortise Handle Locks/MortiseHandle-16.jpg";
import Img17 from "../Images/Mortise Handle Locks/MortiseHandle-17.jpg";
import Img18 from "../Images/Mortise Handle Locks/MortiseHandle-18.jpg";
import Img19 from "../Images/Mortise Handle Locks/MortiseHandle-19.jpg";
import Img20 from "../Images/Mortise Handle Locks/MortiseHandle-20.jpg";
import Img21 from "../Images/Mortise Handle Locks/MortiseHandle-21.jpg";
import Img22 from "../Images/Mortise Handle Locks/MortiseHandle-22.jpg";
import Img23 from "../Images/Mortise Handle Locks/MortiseHandle-23.jpg";
import Img24 from "../Images/Mortise Handle Locks/MortiseHandle-24.jpg";
import Img25 from "../Images/Mortise Handle Locks/MortiseHandle-25.jpg";
import Img26 from "../Images/Mortise Handle Locks/MortiseHandle-26.jpg";
import Img27 from "../Images/Mortise Handle Locks/MortiseHandle-27.jpg";
import Img28 from "../Images/Mortise Handle Locks/handle28.jpg";
import Banner1 from "../Images/Mortise Handle Locks/Banner1.jpg";
import {FcDownload} from "react-icons/fc";
import {HiDownload} from "react-icons/hi";
import 'aos/dist/aos.css';
import AOS from 'aos';
import Footer from '../Component/Footer';


const Product = () => {

    const footerStyle={
        width: "100%",
     background: "linear-gradient(to right,rgba(0, 0, 0, 0.9),rgba(0, 0, 0, 0.9)),url('../Images/handHandle.avif')",
     backgroundSize: "cover",
     backgroundPosition: "center",
     backgroundAttachment:"fixed",
     clipPath:"polygon(50% 0%, 100% 30%, 100% 100%, 0 100%, 0% 30%)",
      /* clip-path: polygon(0 0,100% 0,100% 80%,50% 100%,0 80%); */
     position: "relative"
     
    }


let Images=[Img1,Img2,Img3,Img4,Img5,Img6,Img7,Img8,Img9,Img10,Img11,Img12,Img13,Img14,Img15,Img16,Img17,Img18,Img19,Img20,Img21,Img22,Img23,Img24,Img25,Img26,Img27]


  useEffect(() => {
    AOS.init({ duration: "1500" });
}, [])

  return (
    <Box bg="black">
    <Box background={'#1A1A1D'} position='relative' pt="7%">
    {/* <div ></div> */}
        <Box position={'relative'} mt="5%" 
        backgroundImage="url('https://europalocks.com/assets/images/showcase/blogs/Europa_Image-2-1.webp')" 
        backgroundSize="cover" backgroundPosition={"inherit"} 
        backgroundRepeat="no-repeat" h="444px" w="100%">
            {/* <Image src={Banner1} alt="handleImg" w="100%" h="100%"></Image> */}
            <Heading fontSize={'xxx-large'}  color="#1A1A1D" 
            position={'absolute'} top="30%" left={'15%'}>Mortise Door Handle Locks</Heading>
        </Box>

        <SimpleGrid columns={2} gap="25px" p="25px" m="auto"
         mt="3%">
            {Images&&Images.map((e)=>
            <Image data-aos="fade-up" src={e}></Image>)}
        </SimpleGrid>
        {/* <Icon as={FcDownload}  data-aos="fade-right" position="sticky" left={"40%"} bg="#FEFFFF" h={66} w={66} p="7px" borderRadius="50%"></Icon> */}
    </Box>
    <footer style={footerStyle}>
    <Box display={"flex"} alignItems="center" justifyContent="space-around">
    <Footer></Footer>
    </Box>
    </footer>
    </Box>
  )
}

export default Product