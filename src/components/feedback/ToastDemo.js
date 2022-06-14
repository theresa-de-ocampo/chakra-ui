import { useToast, Button, Box } from "@chakra-ui/react"

export default function ToastDemo() {
    const toast = useToast()
    const id = 3
    return (
        <>
            <Button
                onClick={() =>
                    toast({
                        title: "Account Created",
                        description: "We've created an account for you.",
                        status: "success",
                        duration: 9000,
                        isClosable: true
                    })
                }
                ml={5}
                mb={8}
                colorScheme="blue"
            >
                Show Toast
            </Button>

            {/* Custom Component */}
            <Button
                onClick={() =>
                    toast({
                        position: "bottom-left",
                        render: () => (
                            <Box color="white" p={3} bg="blue.500">
                                Hello World
                            </Box>
                        )
                    })
                }
                colorScheme="blue"
                ml={5}
                mb={8}
            >
                Show Toast
            </Button>

            {/* Preventing Duplicate Toast */}
            <Button
                onClick={() => {
                    if (toast.isActive(id)) {
                        toast({
                            id,
                            title: "You can't create multiple toasts for this one."
                        })
                    }
                }}
                colorScheme="blue"
                ml={5}
                mb={8}
            >
                Show Toast
            </Button>
        </>
    )
}
