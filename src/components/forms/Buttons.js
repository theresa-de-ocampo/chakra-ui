import {
    Button,
    ButtonGroup,
    IconButton
} from "@chakra-ui/react"
import { MdBuild, MdCall} from "react-icons/md"
import { BiTachometer } from "react-icons/bi"
import { FaFacebook, FaTwitter } from "react-icons/fa"
import { AiOutlinePlus } from "react-icons/ai"

export default function Buttons() {
    return (
        <>
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
        </>
    )
}