import { AspectRatio } from "@chakra-ui/react";

export default function AspectRatios() {
    return (
        <>
            <AspectRatio maxW={560} ratio={16/9} mb={8}>
                <iframe src="https://www.youtube.com/embed/QhBnZ6NPOY0" title="Hood Naruto"></iframe>
            </AspectRatio>
        </>
    )
}