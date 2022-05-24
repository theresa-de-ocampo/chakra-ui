import { Select } from "@chakra-ui/react"
import { AiOutlineCaretDown } from "react-icons/ai"

export default function DropDown() {
    return (
        <>
            <Select icon={<AiOutlineCaretDown />} placeholder="Select" mb={8}>
                <option value="shane">Shane</option>
                <option value="sebastian">Sebastian</option>
                <option value="alex">Alex</option>
            </Select>

            <Select placeholder="Select" mb={8} bgColor="teal.500" color="white">
                <option value="shane">Shane</option>
                <option value="sebastian">Sebastian</option>
                <option value="alex">Alex</option>
            </Select>
        </>
    )
}