import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper
} from "@chakra-ui/react"

export default function NumberInputs() {
    return (
        <>
            <NumberInput mb={8} defaultValue={7} min={1} max={10}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>

            <NumberInput mb={8} step={10} min={1} max={50}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>

            <NumberInput defaultValue={5} mb={8} min={1} max={5} precision={2} step={0.25}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>

            <NumberInput mb={8} step={10} min={1} max={50} clampValueOnBlur={false}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>

            <NumberInput mb={8} step={10} min={1} max={50} defaultValue={30}>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper
                        bg="green.200"
                        _active={{bg: "green.300"}}
                        children="+"
                    />
                    <NumberDecrementStepper
                        bg="pink.200"
                        _active={{bg: "pink.300"}}
                        children="-"
                    />
                </NumberInputStepper>
            </NumberInput>

            <NumberInput min={1} allowMouseWheel>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </>
    )
}