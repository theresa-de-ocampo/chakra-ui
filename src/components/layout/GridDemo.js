import { Grid, GridItem } from "@chakra-ui/react"

export default function GridDemo() {
    return (
        <>
            <Grid templateColumns="repeat(5, 1fr)" gap={6} mb={8}>
                <GridItem w="100%" h="10" bg="blue.500" />
                <GridItem w="100%" h="10" bg="blue.500" />
                <GridItem w="100%" h="10" bg="blue.500" />
                <GridItem w="100%" h="10" bg="blue.500" />
                <GridItem w="100%" h="10" bg="blue.500" />
                <GridItem w="100%" h="10" bg="blue.500" />
            </Grid>

            <Grid h="200px" templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={4}>
                <GridItem rowSpan={2} colSpan={1} bg="tomato" />
                <GridItem colSpan={2} bg="papayawhip" />
                <GridItem colSpan={2} bg="papayawhip" />
                <GridItem colSpan={4} bg="tomato" />
            </Grid>

            <Grid templateColumns="repeat(5, 1fr)" gap={4} my={8}>
                <GridItem h="50px" colStart={2} bg="tomato" />
                <GridItem h="50px" colEnd={6} bg="papayawhip" />
            </Grid>
        </>
    )
}