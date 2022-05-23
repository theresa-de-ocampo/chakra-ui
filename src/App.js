import {
    ChakraProvider,
    theme
} from "@chakra-ui/react"
import StyleProps from "./components/StyleProps"
import Buttons from "./components/forms/Buttons"
import Checkboxes from "./components/forms/Checkboxes"
import Editables from "./components/forms/Editables";
import FormControls from "./components/forms/FormControls";

export default function App() {
    return (
        <ChakraProvider theme={theme}>
            <StyleProps />
            <Buttons />
            <Checkboxes />
            <Editables />
            <FormControls />
        </ChakraProvider>
    );
}