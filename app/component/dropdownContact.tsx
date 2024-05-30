import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import {
    faAddressCard,
    faCodeBranch,
    faVolleyball
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function DropdownContact() {
    const iconClasses = "text-2xl text-secondary pointer-events-none flex-shrink-0";

    return (
        <Dropdown classNames={{
            base: "before:bg-black-100",
            content: "p-0 border-divider glass",
        }}>
            <DropdownTrigger>
                <Button radius={"md"} size={"sm"} className={"btn-top navbar-font text-foreground"} startContent={<span className={"asterix"}>*</span>}>
                    <span className={"contact"}>Me contacter</span>
                </Button>
            </DropdownTrigger>
            <DropdownMenu variant="faded" aria-label="Dropdown contact"  itemClasses={{
                base: [
                    "rounded-md",
                    "text-foreground",
                    "transition-opacity",
                    "data-[hover=true]:text-foreground",
                    "data-[hover=true]:bg-foreground/10",
                    "dark:data-[hover=true]:bg-foreground/10",
                    "data-[selectable=true]:focus:bg-foreground/10",
                    "data-[pressed=true]:opacity-50",
                    "data-[focus-visible=true]:ring-secondary",
                ],
            }}>
                <DropdownItem
                    key="LinkedIn"
                    href="https://www.linkedin.com/in/laetitia-ashry/"
                    target={"_blank"}
                    description="Mon profil et me contacter"
                    startContent={<FontAwesomeIcon icon={faAddressCard} className={iconClasses} />}
                >
                    LinkedIn
                </DropdownItem>
                <DropdownItem
                    key="GitHub"
                    href="https://github.com/Ellaenys/"
                    target={"_blank"}
                    showDivider
                    description="Mes projets"
                    startContent={<FontAwesomeIcon icon={faCodeBranch} className={iconClasses} />}
                >
                    GitHub
                </DropdownItem>
                <DropdownItem
                    key="Malt"
                    description="Parler Projet"
                    href="https://www.malt.fr/"
                    target={"_blank"}
                    startContent={<FontAwesomeIcon icon={faVolleyball} className={iconClasses} />}
                >
                    Malt
                </DropdownItem>

            </DropdownMenu>
        </Dropdown>
    );
}
