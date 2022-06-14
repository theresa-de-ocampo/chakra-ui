import {
    Wrap,
    WrapItem,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuGroup,
    MenuDivider,
    MenuOptionGroup,
    MenuItemOption,
    Button,
    IconButton
} from "@chakra-ui/react";
import {
    FiChevronDown,
    FiMenu, FiPlus,
    FiExternalLink,
    FiRepeat
} from "react-icons/fi";
import { AiFillFolderOpen } from "react-icons/ai"


export default function MenuDemo() {
    // Letter Navigation
    // When focus is on the MenuButton, and you type a letter key, a search begins.
    return (
        <Wrap ml={5} mb={8}>
            <WrapItem>
                <Menu>
                    <MenuButton as={Button} rightIcon={<FiChevronDown />}>
                        Actions
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Download</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                    </MenuList>
                </Menu>
            </WrapItem>
            <WrapItem>
                <Menu>
                    {
                        ( {isOpen} ) => (
                            <>
                                <MenuButton as={Button} rightIcon={<FiChevronDown />}>
                                    {isOpen ? "Close": "Open"}
                                </MenuButton>
                                <MenuList>
                                    <MenuItem>Download</MenuItem>
                                    <MenuItem>Create a Copy</MenuItem>
                                </MenuList>
                            </>
                        )
                    }
                </Menu>
            </WrapItem>

            {/* 
                By default, the Menu component renders all children of MenuList to the DOM,
                meaning that invisible menu items are still rendered, but are hidden by styles.

                If you want to defer rendering of each children of MenuList until that Menu is
                open, you can use the isLazy prop. This is useful if your Menu needs to be extra
                performant, or make network calls on mount that should only happen when the
                component is displayed. Useful for notification bells.
             */}
            <WrapItem>
                {/* Adding Icons and Commands */}
                <Menu isLazy lazyBehavior>
                    <MenuButton as={IconButton} aria-label="Options" icon={<FiMenu />} />
                    <MenuList>
                        <MenuItem icon={<FiPlus />} command="⌘T">
                            New Tab
                        </MenuItem>
                        <MenuItem icon={<FiExternalLink />} command="⌘N">
                            New Window
                        </MenuItem>
                        <MenuItem icon={<FiRepeat />} command="⌘⇧N">
                            Open Closed Tab
                        </MenuItem>
                        <MenuItem icon={<AiFillFolderOpen />} command="⌘O">
                            Open File...
                        </MenuItem>
                    </MenuList>
                </Menu>
            </WrapItem>

            {/* MenuGroup */}
            <WrapItem>
                <Menu>
                    <MenuButton as={Button} colorScheme="pink">
                        Profile
                    </MenuButton>
                    <MenuList>
                        <MenuGroup title="Profile">
                            <MenuItem>My Account</MenuItem>
                            <MenuItem>Payments</MenuItem>
                        </MenuGroup>
                        <MenuDivider />
                        <MenuGroup title="Help">
                            <MenuItem>Docs</MenuItem>
                            <MenuItem>FAQ</MenuItem>
                        </MenuGroup>
                    </MenuList>
                </Menu>
            </WrapItem>

            {/*
                Menu Option Groups
                You can compose a menu for table headers to help with sorting and filtering options.
            */}
            <WrapItem>
                <Menu closeOnSelect={false}>
                    <MenuButton as={Button} colorScheme="blue">
                        Columns
                    </MenuButton>
                    <MenuList>
                        <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
                            <MenuItemOption value="asc">Ascending</MenuItemOption>
                            <MenuItemOption value="desc">Descending</MenuItemOption>
                        </MenuOptionGroup>
                        <MenuOptionGroup title="Country" type="checkbox">
                            <MenuItemOption value="email">Email</MenuItemOption>
                            <MenuItemOption value="phone">Phone</MenuItemOption>
                            <MenuItemOption value="country">Country</MenuItemOption>
                        </MenuOptionGroup>
                    </MenuList>
                </Menu>
            </WrapItem>
        </Wrap>
    )
}
