import {
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
    InputLeftElement,
    InputRightElement,
    Button
} from "@chakra-ui/react"
import { FaPhoneAlt } from "react-icons/fa"
import { BsCurrencyDollar } from "react-icons/bs"
import { AiOutlineCheck } from "react-icons/ai"

export default function Inputs() {
    return (
        <>
            <Input placeholder="First Name" mb={8} />
            <Input placeholder="First Name" mb={8} variant="outline" />
            <Input placeholder="First Name" mb={8} variant="filled" />
            <Input placeholder="First Name" mb={8} variant="flushed" />
            <Input placeholder="First Name" mb={8} variant="unstyled" />

            <InputGroup mb={8}>
                <InputLeftAddon children="+63" />
                <Input placeholder="Cellphone Number" />
            </InputGroup>

            <InputGroup mb={8}>
                <InputLeftAddon children="https://" />
                <Input placeholder="Your Website" />
                <InputRightAddon children=".com" />
            </InputGroup>

            <InputGroup mb={8}>
                <InputLeftElement
                    pointerEvents="none"
                    children={<FaPhoneAlt />}
                />
                <Input placeholder="Phone Number" />
            </InputGroup>

            <InputGroup mb={8}>
                <InputLeftElement
                    pointerEvents="none"
                    children={<BsCurrencyDollar />}
                />
                <Input placeholder="Principal" />
                <InputRightElement
                    pointerEvents="none"
                    children={<AiOutlineCheck color="green" />}
                />
            </InputGroup>

            <InputGroup size="md" mb={8}>
                <Input
                    type="password"
                    placeholder="Enter password"
                />
                <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm">
                    Show
                    </Button>
                </InputRightElement>
            </InputGroup>

            <Input focusBorderColor="pink.400" placeholder="Last Name" mb={8} />
            <Input 
                focusBorderColor="blue.200" 
                errorBorderColor="red.500"
                isInvalid
                placeholder="Last Name"
                mb={8}
            />

            <Input placeholder="Last Name" _placeholder={{opacity: 1, color: "green.800"}} mb={8} />
        </>
    )
}