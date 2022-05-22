import { ChakraProvider, Box, Text, Button, theme } from "@chakra-ui/react"
import wavyBg from "./images/lake.jpg"

export default function App() {
    const url = `url("${wavyBg}")`
    return (
        <ChakraProvider theme={theme}>
           <Box boxSize={200} bgGradient="linear(green, pink)" color="white" mb="8">
               <Text fontSize="4xl" fontFamily="mono">Theresa</Text>
           </Box>
           <Box boxSize={200} bg="gray.600" display="flex" alignItems="center" justifyContent="space-between" color="white" mb={8} >
                <Text>Theresa</Text>
                <Text>De Ocampo</Text>
           </Box>
           <Box w={400} h={100} bg="gray.600" display="grid" grid-gap={2} 
                gridTemplateColumns="1fr 1fr" color="white" mb={8} border="2px" borderColor="red.500"
            >
                <Text>Theresa</Text>
                <Text>De Ocampo</Text>
           </Box>
            <Box w={500} h={250} bgImage={url} bgPosition="center" bgRepeat="no-repeat"
                border="1px" borderColor="black" borderRadius="xl" mb={8} filter="grayscale(80%)" />
            <Box boxSize={150} bgColor="blue.200" pos="fixed" top={200} left={600}
                shadow="dark-lg">Hello</Box>
            <Button
                bgColor="teal.500"
                color="white"
                mb={8}
                _hover={{
                    background: "white",
                    color: "teal.500",
                    border: "1px solid black"
                }}
            >
                Hover me
            </Button>
            <Box _after={{ content: "'🙂'"}}>A Pseudo-Element</Box>
            <Button as="p">Click Me</Button>
        </ChakraProvider>
    );
}