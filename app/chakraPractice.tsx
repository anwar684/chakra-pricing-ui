"use client";
// pages/_app.js
import { ChakraProvider, Heading, Text } from "@chakra-ui/react";

function MyApp() {
  return (
    <ChakraProvider>
      <h1>Heading H1</h1>
      <h2>Heading H2</h2>
      <Heading>Heading default by Chakra</Heading>
      <Heading as="h1" color="red">
        Heading h1 by Chakra
      </Heading>
      <Text color={"blue"}>Paragraph by Chakra</Text>
      <Text color={"blue"} fontWeight="bold">
        Paragraph bold by Chakra
      </Text>
    </ChakraProvider>
  );
}

export default MyApp;
