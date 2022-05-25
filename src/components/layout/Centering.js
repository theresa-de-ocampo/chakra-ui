import {
    Center,
    Circle,
    Square
} from "@chakra-ui/react"
import { MdEmail } from "react-icons/md"

export default function Centering() {
    return (
        <>
            <Center bg="tomato" h="80px" color="white" mb={8}>
                Theresa De Ocampo
            </Center>

            <Center bg="teal.300" color="white" w="55px" h="55px" mb={8}>
                <MdEmail />
            </Center>

            <Center bg="teal.300" color="white" w="55px" h="55px" mb={8}>
                1
            </Center>

            <Circle bg="tomato" color="white" w="55px" h="55px" mb={8}>
                <MdEmail />
            </Circle>

            <Square bg="tomato" color="white" w="55px" h="55px" mb={8}>
                <MdEmail />
            </Square>
        </>
    )
}