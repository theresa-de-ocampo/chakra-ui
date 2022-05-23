import {
    ChakraProvider,
    theme,
    Box,
    Text,
    Button,
    ButtonGroup,
    IconButton,
    Checkbox,
    CheckboxGroup,
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
    FormControl,
    FormLabel,
    FormHelperText,
    FormErrorMessage,
    Input,
    RadioGroup,
    Radio,
    Select
} from "@chakra-ui/react"
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
            <br />
            
            <Box mt={8}>
                <Checkbox defaultChecked ml={5} icon={<AiOutlinePlus />}>Are you happy?</Checkbox>
                <Checkbox isDisabled ml={5}>Are you friendly?</Checkbox>
                <Checkbox colorScheme="green" ml={5} size="lg">You want money?</Checkbox>
                <Checkbox isInvalid ml={5}>I agree to the terms and conditions.</Checkbox>
                <Checkbox defaultChecked spacing="2rem" ml={5}>Do you need space?</Checkbox>
                <Checkbox iconColor="red" iconSize="3rem">Stop?</Checkbox>
                <br />
                <p>Skills</p>
                <CheckboxGroup colorScheme="pink" defaultValue={["html", "css"]} ml={5}>
                    <Checkbox value="html">HTML</Checkbox>
                    <Checkbox value="css">CSS</Checkbox>
                    <Checkbox value="javascript">JavaScript</Checkbox>
                    <Checkbox value="php">PHP</Checkbox>
                </CheckboxGroup>
            </Box>

            <Editable defaultValue="Theresa De Ocampo" my={8}>
                <EditableInput />
                <EditablePreview />
            </Editable>

            <Editable defaultValue="I'm a Web Developer Intern" my={8}>
                <EditableTextarea />
                <EditablePreview />
            </Editable>

            <FormControl isRequired mb={8}>
                <FormLabel htmlFor="email">Email</FormLabel>
                <Input id="email" type="email" />
                <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>

            <FormControl as="fieldset" mb={8}>
                <FormLabel as="legend">Favorite Stardew Valley Characters</FormLabel>
                <RadioGroup defaultValue="Shane">
                    <Radio value="sebastian">Sebastian</Radio>
                    <Radio value="shane">Shane</Radio>
                    <Radio value="harvey">Harvey</Radio>
                    <Radio value="alex">Alex</Radio>
                </RadioGroup>
            </FormControl>

            <FormControl mb={8}>
                <FormLabel htmlFor="country">Country</FormLabel>
                <Select id="country" placeholder="Select Country">
                    <option>Philippines</option>
                    <option>Singapore</option>
                    <option>New Zealand</option>
                    <option>Canada</option>
                </Select>
            </FormControl>
        </ChakraProvider>
    );
}