import {
    Avatar,
    AvatarBadge,
    AvatarGroup,
    Wrap,
    WrapItem
} from "@chakra-ui/react";

export default function AvatarDemo() {
    return (
        <>
            <Wrap mb={8} padding={4}>
                <WrapItem>
                    <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
                </WrapItem>
                <WrapItem>
                    <Avatar name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole" />
                </WrapItem>
                <WrapItem>
                    <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                </WrapItem>
                <WrapItem>
                    <Avatar name="Teriz De Ocampo" src="" />
                </WrapItem>
                <WrapItem>
                    <Avatar />
                </WrapItem>
                <WrapItem>
                    <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence">
                        <AvatarBadge boxSize="1.25em" bg="green.500" />
                    </Avatar>
                </WrapItem>
            </Wrap>
            <AvatarGroup max={2} mb={8}>
                <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
                <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
                <Avatar name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole" />
                <Avatar name="Teriz De Ocampo" src="" />
            </AvatarGroup>
        </>
    )
}
