import {
    FormControl,
    FormLabel,
    FormHelperText,
    FormErrorMessage,
    Input,
    RadioGroup,
    Radio,
    Select
} from "@chakra-ui/react"

export default function FormControls() {
    return (
        <>
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
        </>
    )
}