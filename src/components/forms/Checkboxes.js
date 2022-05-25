import {
    Checkbox,
    CheckboxGroup,
    Box
} from "@chakra-ui/react"

export default function Checkboxes() {
    return (
        <>
            <Box mt={8}>
                <Checkbox defaultChecked ml={5}>Are you happy?</Checkbox>
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
        </>
    )
}