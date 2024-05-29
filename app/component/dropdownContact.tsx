import React from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@nextui-org/react";
import {faAddressCard, faC, faVolleyball} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function DropdownContact() {
    const iconClasses = "text-2xl text-secondary-100 pointer-events-none flex-shrink-0";

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
                    "text-default-300",
                    "transition-opacity",
                    "data-[hover=true]:text-foreground",
                    "data-[hover=true]:bg-foreground/10",
                    "dark:data-[hover=true]:bg-foreground/10",
                    "data-[selectable=true]:focus:bg-foreground/10",
                    "data-[pressed=true]:opacity-50",
                    "data-[focus-visible=true]:ring-primary-50/10",
                ],
            }}>
                <DropdownItem
                    key="LinkedIn"
                    href="https://www.linkedin.com/in/laetitia-ashry/"
                    target={"_blank"}
                    showDivider
                    description="Profil et contact"
                    startContent={<FontAwesomeIcon icon={faAddressCard} className={iconClasses} />}
                >
                    LinkedIn
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
                <DropdownItem
                    key="ComeUp"
                    href="https://comeup.com/fr/"
                    target={"_blank"}
                    description="Parler Projet"
                    startContent={<FontAwesomeIcon icon={faC} className={iconClasses} />}
                >
                    ComeUp
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    );
}
