import {
    Stack,
    Box,
    VStack,
    StackDivider
} from "@chakra-ui/react"

export default function StackDemo() {
    return (
        <>
            <Stack direction={["column", "row"]} spacing={24} mb={8}>
                <Box w={70} h={70} bg="yellow.200">1</Box>
                <Box w={70} h={70} bg="tomato">2</Box>
                <Box w={70} h={70} bg="yellow.200">3</Box>
            </Stack>

            <VStack
                divider={<StackDivider borderColor="gray.200" />}
                spacing={4}
                align="stretch"
                mb={8}
            >
                <Box h={70} bg="yellow.200">1</Box>
                <Box h={70} bg="tomato">2</Box>
                <Box h={70} bg="yellow.200">3</Box>
            </VStack>
        </>
    )
}