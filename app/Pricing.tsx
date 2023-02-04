
"use client";
import {
  ChakraProvider,
  Box,
  Text,
  Flex,
  Button,
  Icon,
  HStack,
} from "@chakra-ui/react";
import Icon_tick from "./icons/Icon_tick";

export default function Pricing() {
  return (
    <ChakraProvider>
      <Box
        maxW={'992px'}
        mx = {{base: '10px', md: 'auto', lg: 'auto'}}
        mt="-141"
        bg="#FFFFFF"
        borderRadius="12px"
        overflow={'hidden'}
        boxShadow = {
            '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }
      >
        <Flex direction={{base: 'column', md: 'column', lg:'row'}}>
          <Box
            bg={"#e2e8f0"}
            textAlign="center"
            fontFamily="Inter"
            p = '48px'
           
            
          >
            <Text fontSize="24px" fontWeight={"bold"} color="#171923" >
              Premium PRO
            </Text>
            <Text fontWeight="800" fontSize={"60px"}>
              $329
            </Text>
            <Text fontSize="18px">billed just once</Text>
            <Button color="#F7FAFC" bg="#805AD5"  w = '282px' mt = '15px' >
              Get Started
            </Button>
          </Box>
          <Box p="48px" fontFamily="Inter" fontSize={"18px"} >
            <Text>
              Access these features when you get this pricing package for your
              business.
            </Text>
            <HStack mt="15px">
              <Icon as={Icon_tick} mr = '5px' />
              <Text>International calling and messaging API</Text>
            </HStack>
            <HStack mt="15px">
              <Icon as={Icon_tick} mr = '5px' />
              <Text>Additional phone numbers</Text>
            </HStack>
            <HStack mt="15px">
              <Icon as={Icon_tick} mr = '5px' />
              <Text>Automated messages via Zapier</Text>
            </HStack>
            <HStack mt="15px">
              <Icon as={Icon_tick} mr = '5px'/>
              <Text>24/7 support and consulting</Text>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}
