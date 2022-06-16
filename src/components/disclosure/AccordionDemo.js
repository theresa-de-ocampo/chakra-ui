import {
    VStack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
    Icon
} from "@chakra-ui/react";
import { AiOutlineMinus, AiOutlinePlus} from "react-icons/ai";

export default function AccordionDemo() {
    return (
        <VStack ml={5} mb={8} spacing={24}>
            {/*
                By default, only one item may be expanded, and it can only be collapse again by
                expanding another.

                Accordion now supports keyboard navigation between accordion buttons.
                Pressing the up and down arrow keys will move focus between accordion buttons.
            */}
            <Accordion w="400px">
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">Section 1 Title</Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        Alpha ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum, nunc eu lobortis pharetra, metus purus tristique eros, sed efficitur augue sapien et lacus. Praesent sed ultricies felis. Duis ligula mauris, consequat et mattis vitae, congue ac tortor.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">Section 2 Title</Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        Beta Integer hendrerit arcu in risus pellentesque, ac fringilla odio euismod. Quisque tincidunt, enim quis accumsan semper, elit neque aliquet lacus, vel pharetra nulla sem sit amet ligula. Praesent consectetur quam pharetra ex molestie maximus. Nam gravida euismod leo, sit amet interdum eros facilisis rhoncus. Morbi ac eleifend risus. Duis in dictum sapien. Duis fermentum eu leo ut lobortis. Donec non ipsum felis. Duis libero nunc, efficitur vitae efficitur a, condimentum at libero. Donec ac urna vel magna lobortis laoreet.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

            {/* Expand Multiple Items at Once */}
            <Accordion defaultIndex={[0]} allowMultiple w="400px">
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">Section 1 Title</Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
                        Alpha ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vestibulum, nunc eu lobortis pharetra, metus purus tristique eros, sed efficitur augue sapien et lacus. Praesent sed ultricies felis. Duis ligula mauris, consequat et mattis vitae, congue ac tortor.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">Section 2 Title</Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        Beta Integer hendrerit arcu in risus pellentesque, ac fringilla odio euismod. Quisque tincidunt, enim quis accumsan semper, elit neque aliquet lacus, vel pharetra nulla sem sit amet ligula. Praesent consectetur quam pharetra ex molestie maximus. Nam gravida euismod leo, sit amet interdum eros facilisis rhoncus. Morbi ac eleifend risus. Duis in dictum sapien. Duis fermentum eu leo ut lobortis. Donec non ipsum felis. Duis libero nunc, efficitur vitae efficitur a, condimentum at libero. Donec ac urna vel magna lobortis laoreet.
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>

            {/* 
                Toggle Each Accordion Item
                If you set allowToggle to true, any expanded item may be collapsed again.
             */}
             <Accordion allowToggle w="400px">
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">Section 1 Title</Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        Excepteur minim nisi consequat eiusmod elit cillum. Amet esse tempor dolor consequat ullamco sunt adipisicing consequat. Veniam ad sint anim excepteur amet officia quis do voluptate magna cillum aliqua.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">Section 2 Title</Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        Duis culpa veniam ex est culpa laborum do. Deserunt minim consequat commodo qui deserunt laboris adipisicing ipsum enim excepteur minim sint. Amet et sunt qui cillum consectetur officia Lorem id duis non magna laborum deserunt nostrud.
                        Veniam cillum officia magna incididunt. Enim et tempor enim non cillum et adipisicing excepteur. Eiusmod ut adipisicing mollit Lorem. Ullamco dolore cillum minim ad voluptate.
                    </AccordionPanel>
                </AccordionItem>
             </Accordion>

             {/* Styling the Expanded State */}
             <Accordion allowToggle w="400px">
                <AccordionItem>
                    <h2>
                        <AccordionButton _expanded={ {bg: "tomato", color: "white"} }>
                            <Box flex="1" textAlign="left">Section 1 Title</Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        Excepteur minim nisi consequat eiusmod elit cillum. Amet esse tempor dolor consequat ullamco sunt adipisicing consequat. Veniam ad sint anim excepteur amet officia quis do voluptate magna cillum aliqua.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    <h2>
                        <AccordionButton _expanded={ {bg: "tomato", color: "white"} }>
                            <Box flex="1" textAlign="left">Section 2 Title</Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        Duis culpa veniam ex est culpa laborum do. Deserunt minim consequat commodo qui deserunt laboris adipisicing ipsum enim excepteur minim sint. Amet et sunt qui cillum consectetur officia Lorem id duis non magna laborum deserunt nostrud.
                        Veniam cillum officia magna incididunt. Enim et tempor enim non cillum et adipisicing excepteur. Eiusmod ut adipisicing mollit Lorem. Ullamco dolore cillum minim ad voluptate.
                    </AccordionPanel>
                </AccordionItem>
             </Accordion>

             {/*
                Accessing the Internal State
                If you need access to the internal state of each accordion item, you can use a
                render prop. It provides 2 internal state props: isExpanded and isDisabled
            */}
            <Accordion allowMultiple defaultIndex={[0]} w="400px">
                <AccordionItem>
                    <h2>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">Section 1 Title</Box>
                            <AccordionIcon />
                        </AccordionButton>
                    </h2>
                    <AccordionPanel>
                        Excepteur minim nisi consequat eiusmod elit cillum. Amet esse tempor dolor consequat ullamco sunt adipisicing consequat. Veniam ad sint anim excepteur amet officia quis do voluptate magna cillum aliqua.
                    </AccordionPanel>
                </AccordionItem>
                <AccordionItem>
                    {
                        ({isExpanded}) => (
                            <>
                                <h2>
                                    <AccordionButton>
                                        <Box flex="1" textAlign="left">Section 2 Title</Box>
                                        {
                                            isExpanded ?
                                                <Icon as={AiOutlineMinus} /> :
                                                <Icon as={AiOutlinePlus} />
                                        }
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel>
                                    Excepteur minim nisi consequat eiusmod elit cillum. Amet esse tempor dolor consequat ullamco sunt adipisicing consequat. Veniam ad sint anim excepteur amet officia quis do voluptate magna cillum aliqua.
                                </AccordionPanel>
                            </>
                        )
                    }
                </AccordionItem>
            </Accordion>
        </VStack>
    )
}
