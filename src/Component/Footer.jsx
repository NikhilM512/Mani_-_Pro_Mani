import { Box, Button, Divider, Heading, HStack, Image, Input, SimpleGrid, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import logo from "../Images/MANI LOGO.jpg";
import { AiOutlineFacebook } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';
import {Icon} from '@chakra-ui/react';

const Footer = () => {
  return (
    <>
     <Box 
        color={'whiteAlpha.700'} 
        p="3%" 
        mt={['22%','15%','10%','7%']}
        pt={["17%","15%","10%","7%"]}
        // background={"linear-gradient(180deg, #CCC 0%, gray 27.6%, black 100%)"}
        >
            <SimpleGrid 
                columns={[1,2,3,3]} 
                textAlign={['center','center','start','start']}>
           
                <VStack 
                    m="2%"
                    alignItems={['center','center','start','start']} 
                    pl="2%" 
                    justifyContent={"start"}>
                    <Text 
                        fontFamily={"Montserrat"}
                        fontWeight="600px"
                        fontSize="14px" 
                        lineHeight={"14px"}
                        color="red"
                        textAlign={['center','center','start','start']} 
                        w="100%">

                        OUR ADDRESS

                        </Text>
                    <Heading  
                        fontFamily={"Montserrat"}
                        fontWeight="700px"
                        fontSize={["22px","25px","30px","30px"]} 
                        lineHeight={"24.38px"}
                        color="red"
                        textAlign={['center','center','start','start']}
                     >
                      
                      UNITED KINGDOM
                      
                      </Heading>
                    <Text 
                        fontFamily={"Montserrat"}
                        fontWeight="400px"
                        fontSize="15px" 
                        lineHeight={"18.29px"}
                        color="red">
                      
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, sequi fuga.

                      </Text>
                    <Text 
                        fontFamily={"Montserrat"}
                        fontWeight="700px"
                        fontSize="13px"
                        lineHeight={"24.38px"}
                        textAlign={['center','center','start','start']}
                        color="red"
                       >
                        
                        info@loremipsum.com
                        
                        </Text>
                </VStack>

                <VStack 
                    m="2%" 
                    alignItems={['center','center','center','center']} 
                    pl="2%" 
                    mt={['0%','0%','-20%','-20%']}
                    justifyContent={"space-evenly"}>
                    <Image 
                      src={logo} 
                      w="120px" 
                      h="120px" 
                      color="red" >
                    </Image>
                    <Text 
                      fontFamily={"Montserrat"}
                      fontWeight="600px"
                      fontSize="14px" 
                      lineHeight={"14px"}
                      color="red"
                      textAlign={['center','center','center','center']} 
                      w="100%">

                      CALL NOW

                      </Text>
                    <Heading 
                        fontFamily={"Montserrat"}
                        fontWeight="700px"
                        fontSize={["22px","25px","30px","36px"]} 
                        lineHeight={"24.38px"}
                        textAlign={['center','center','center','center']}
                        color="red">

                      +91 123456789

                      </Heading>
                      <Text color="red" textAlign={['center','center','center','center']}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, dolore. 
                      </Text>
                </VStack>

                <VStack 
                      m="5%" 
                      alignItems={['center','center','center','center']}>
                    <Text 
                        fontFamily={"Montserrat"}
                        fontWeight="600px"
                        fontSize="14px" 
                        lineHeight={"14px"}
                        color="red"
                        textAlign={['center','center','start','start']} 
                        w="100%">

                        FOLLOW US

                    </Text>
                    <Text 
                        fontFamily={"Montserrat"}
                        fontWeight="400px"
                        fontSize="15px" 
                        lineHeight={"18.29px"}
                        color="red">

                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, sequi fuga.

                      </Text>
                    <HStack 
                        w="100%" 
                        color="red" 
                        justifyContent={['center','center','start','start']}>
                        <Icon 
                            as={AiOutlineFacebook} 
                            boxSize="40px">
                        </Icon>
                        <Icon 
                            as={AiFillTwitterSquare} 
                            boxSize="40px">
                        </Icon>
                        <Icon 
                            as={AiOutlineInstagram} 
                            boxSize="40px">
                        </Icon>
                    </HStack>
                </VStack>
            </SimpleGrid>
            <Divider 
                orientation='horizantal'
                color="red" 
                mt="2%" 
                mb="2%" 
                border="2px solid red">
            </Divider>
            <Text color="red" textAlign={'center'}> 
              
              © 2023 All Rights Reserved
              
            </Text>
     </Box>
    </>
  )
}

export default Footer