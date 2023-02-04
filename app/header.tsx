"use client";
import { ChakraProvider, Heading, Box, Text } from "@chakra-ui/react";
import React from "react";

export default function Header() {
  return (
    <ChakraProvider>
      <Box
        textAlign={{ base: "left", md: "left", lg: "center" }}
        pl = '10px'
        pt={{lg:"88.45px", base: '56px'}}
        pb="198.50px"
        bg={"#6B46C1"}
        color="white"
      >
        <Heading pb={"14px"}>Simple pricing for your business</Heading>
        <Text>Plans that are carefully crafted to suit your business.</Text>
      </Box>
    </ChakraProvider>
  );
}
