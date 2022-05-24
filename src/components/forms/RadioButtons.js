import {
    RadioGroup,
    Radio
} from "@chakra-ui/react"

export default function RadioButtons() {
    return (
        <>
            <RadioGroup mb={8}>
                <Radio value="blue" colorScheme="blue">Blue</Radio>
                <Radio value="pink" colorScheme="pink" ml={6}>Pink</Radio>
                <Radio value="green" colorScheme="green" ml={6}>Green</Radio>
                <Radio value="orange" colorScheme="orange" ml={6} isDisabled>Orange</Radio>
                <Radio value="triangle" ml={6} isInvalid>Triangle</Radio>
            </RadioGroup>
        </>
    )
}