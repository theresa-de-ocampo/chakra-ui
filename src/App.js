import { ChakraProvider, Box, Text, Button, theme, ButtonGroup, IconButton } from "@chakra-ui/react"
import { MdBuild, MdCall} from "react-icons/md"
import { BiTachometer } from "react-icons/bi"
import { FaFacebook, FaTwitter } from "react-icons/fa"
import { AiOutlinePlus } from "react-icons/ai"
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
            <Button as="div" display="block" mb={8}>Click Me</Button>

            <Button colorScheme="blue" size="lg">Teriz</Button>
            <Button colorScheme="blue" variant="ghost">Button</Button>
            <Button colorScheme="blue" variant="outline">Button</Button>
            <Button colorScheme="blue" variant="link">Button</Button>
            <Button colorScheme="blue" leftIcon={<MdBuild />}>Settings</Button>
            <Button colorScheme="blue" leftIcon={<MdCall />}>Call Us</Button>
            <Button colorScheme="blue" rightIcon={<BiTachometer />}>Button</Button>
            <Button colorScheme="blue" isLoading></Button>
            <Button colorScheme="blue" isLoading loadingText="Submitting" />
            <Button colorScheme="facebook" leftIcon={<FaFacebook />}>Facebook</Button>
            <Button colorScheme="twitter" leftIcon={<FaTwitter />}>Twitter</Button>
            <ButtonGroup size="sm" variant="outline" isAttached>
                <Button>Save</Button>
                <IconButton arial-label="Add to Friends" icon={<AiOutlinePlus />} />
            </ButtonGroup>
        </ChakraProvider>
    );
}