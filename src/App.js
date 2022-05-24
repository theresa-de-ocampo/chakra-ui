import {
    ChakraProvider,
    theme
} from "@chakra-ui/react"
import StyleProps from "./components/StyleProps"
import Buttons from "./components/forms/Buttons"
import Checkboxes from "./components/forms/Checkboxes"
import Editables from "./components/forms/Editables";
import FormControls from "./components/forms/FormControls";
import Inputs from "./components/forms/Inputs";
import NumberInputs from "./components/forms/NumberInputs";
import PinInputs from "./components/forms/PinInputs";

export default function App() {
    return (
        <ChakraProvider theme={theme}>
            <StyleProps />
            <Buttons />
            <Checkboxes />
            <Editables />
            <FormControls />
            <Inputs />
            <NumberInputs />
            <PinInputs />
        </ChakraProvider>
    );
}