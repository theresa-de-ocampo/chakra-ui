import { Container, Box } from "@chakra-ui/react"

export default function Containers() {
    return (
        <>
            <Container mb={8}>
                There are many benefits to a joint design and development system. Not only
                does it bring benefits to the design team, but it also brings benefits to
                engineering teams. It makes sure that our experiences have a consistent look
                and feel, not just in our design specs, but in production.
            </Container>

            <Container maxW="2xl" bg="blue.600" centerContent mb={8}>
                <Box maxW="md" p={8} bg="blue.400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum, nunc eu lobortis pharetra, metus purus tristique eros, sed efficitur augue sapien et lacus. Praesent sed ultricies felis. Duis ligula mauris, consequat et mattis vitae, congue ac tortor. Integer hendrerit arcu in risus pellentesque, ac fringilla odio euismod. Quisque tincidunt, enim quis accumsan semper, elit neque aliquet lacus, vel pharetra nulla sem sit amet ligula. Praesent consectetur quam pharetra ex molestie maximus. Nam gravida euismod leo, sit amet interdum eros facilisis rhoncus. Morbi ac eleifend risus. Duis in dictum sapien. Duis fermentum eu leo ut lobortis. Donec non ipsum felis. Duis libero nunc, efficitur vitae efficitur a, condimentum at libero. Donec ac urna vel magna lobortis laoreet.
                </Box>
            </Container>
        </>
    )
}