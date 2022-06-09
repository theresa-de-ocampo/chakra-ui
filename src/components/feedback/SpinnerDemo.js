import { Spinner } from "@chakra-ui/react";

export default function SpinnerDemo() {
    return (
        <>
            <Spinner />
            <Spinner size="xl" color="blue" />
            <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
        </>
    )
}
