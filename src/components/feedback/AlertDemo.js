import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription
} from "@chakra-ui/react"

export default function AlertDemo() {
    return (
        <>
            <Alert status="error" mt={8} mb={8}>
                <AlertIcon />
                <AlertTitle>Your browser is outdated!</AlertTitle>
                <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
            </Alert>

            <Alert status="error" variant="subtle" mb={8}>
                <AlertIcon />
                There was an error processing your request.
            </Alert>

            <Alert status="success" variant="solid" mb={8}>
                <AlertIcon />
                Data uploaded to the server. Fire on!
            </Alert>

            <Alert status="warning" variant="left-accent" mb={8}>
                <AlertIcon />
                Your account is about to expire. Re-subscribe before June 30, 2022.
            </Alert>

            <Alert status="info" variant="top-accent" mb={8}>
                <AlertIcon />
                Chakra is going live on August 30. Get ready!
            </Alert>

            <Alert
                status="success"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                height="200px"
                mb={8}
            >
                <AlertIcon />
                <AlertTitle mt={4} mb={1} fontSize="lg">
                    Application Submitted!
                </AlertTitle>
                <AlertDescription maxW="sm">
                    Thanks for submitting your application! Our team will get back to you soon.
                </AlertDescription>
            </Alert>
        </>
    )
}
