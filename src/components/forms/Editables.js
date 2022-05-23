import {
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview
} from "@chakra-ui/react"

export default function Editables() {
    return (
        <>
            <Editable defaultValue="Theresa De Ocampo" my={8}>
                <EditableInput />
                <EditablePreview />
            </Editable>

            <Editable defaultValue="I'm a Web Developer Intern" my={8}>
                <EditableTextarea />
                <EditablePreview />
            </Editable>
        </>
    )
}