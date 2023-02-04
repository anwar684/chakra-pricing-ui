"use client";
import {
  ChakraProvider,
  Box,
  Flex,
  Icon,
  HStack,
  Text,
} from "@chakra-ui/react";
import Guarantee from "./icons/Guarantee";
import SetupFee from "./icons/SetupFee";
import Subscription from "./icons/Subscription";
export default function TermsConditions() {
  return (
    <ChakraProvider>
    <Box
      m="auto"
      mt="56px"
      maxW="906px"
      fontFamily={"Inter"}
      fontSize="18px"
      px={50}
      mb = '125px'
    >
      <Flex direction= {{base:"column", lg: 'row'}} >
        <HStack mb={'20px'}>
          <Icon as={Guarantee}></Icon>
          <Text>30 days money back Guarantee</Text>
        </HStack>

        <HStack mb = '20px'>
          <Icon as={SetupFee}></Icon>
          <Text>No setup fees 100% hassle-free </Text>
        </HStack>

        <HStack mb = '20px'>
          <Icon as={Subscription}></Icon>
          <Text>No monthly subscription Pay once and for all</Text>
        </HStack>
      </Flex>
    </Box>
    </ChakraProvider>
  );
}
