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
import RadioButtons from "./components/forms/RadioButtons";
import DropDown from "./components/forms/DropDown";
import AspectRatios from "./components/layout/AspectRatios";
import Centering from "./components/layout/Centering";
import Containers from "./components/layout/Containers";
import FlexDemo from "./components/layout/FlexDemo";
import GridDemo from "./components/layout/GridDemo";
import StackDemo from "./components/layout/StackDemo";
import SpinnerDemo from "./components/feedback/SpinnerDemo";
import AlertDemo from "./components/feedback/AlertDemo";

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
            <RadioButtons />
            <DropDown />
            <AspectRatios />
            <Centering />
            <Containers />
            <FlexDemo />
            <GridDemo />
            <StackDemo />
            <SpinnerDemo />
            <AlertDemo />
        </ChakraProvider>
    );
}