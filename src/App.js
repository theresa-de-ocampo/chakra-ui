import { ChakraProvider, Box, Heading, Text, Flex, theme } from "@chakra-ui/react"

export default function App() {
    return (
        <ChakraProvider theme={theme}>
           <Box w="200px" h="200px" bgGradient="linear(green, pink)" color="white" mb="8">
               <Text fontSize="4xl" fontFamily="mono">Theresa</Text>
           </Box>
           <Heading color="red.600">Hello World</Heading>
           <Box boxSize="md" bg="red"></Box>
        </ChakraProvider>
    );
}