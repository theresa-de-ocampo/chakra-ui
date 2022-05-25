import {
    Flex,
    Text,
    Center,
    Square,
    Box,
    Spacer
} from "@chakra-ui/react"

export default function FlexDemo() {
    return (
        <>
            <Flex color="white" mb={8}>
                <Center w="100px" bg="green.500">
                    <Text>Box 1</Text>
                </Center>
                <Square bg="blue.500" size="150px">
                    <Text>Box 2</Text>
                </Square>
                <Box bg="tomato" flex="1">
                    <Text>Box 3</Text>
                </Box>
            </Flex>

            <Flex color="white" mb={8}>
                <Box bg="tomato" p="4">
                    Box 1
                </Box>
                <Spacer />
                <Box bg="green.500" p={4}>
                    Box 2
                </Box>
            </Flex>
        </>
    )
}