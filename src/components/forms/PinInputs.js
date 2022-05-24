import {
    PinInput,
    PinInputField
} from "@chakra-ui/react"

export default function PinInputs() {
    return (
        <>
            <PinInput defaultValue="1234">
                <PinInputField my={8} />
                <PinInputField />
                <PinInputField />
                <PinInputField />
            </PinInput>
            <br />

            <PinInput type="alphanumeric" mask>
                <PinInputField mb={8} />
                <PinInputField />
                <PinInputField />
                <PinInputField />
            </PinInput>
            <br />

            {/*
                Use the otp prop on PinInput to set autocomplete="one-time-code" for
                all children PinInputField components.

                With autocomplete="one-time-code", whenever a user receives an SMS message
                while a form is open, the operating system will parse the OTP in the SMS
                heuristically, and the keyboard will suggest the OTP for the user to enter.
             */}
            <PinInput otp>
                <PinInputField mb={8} />
                <PinInputField />
                <PinInputField />
                <PinInputField />
            </PinInput>
            <br />

            <PinInput placeholder="🥳">
                <PinInputField mb={8} />
                <PinInputField />
                <PinInputField />
                <PinInputField />
            </PinInput>
            <br />

            <PinInput manageFocus={false}>
                <PinInputField mb={8} />
                <PinInputField />
                <PinInputField />
                <PinInputField />
            </PinInput>
        </>
    )
}