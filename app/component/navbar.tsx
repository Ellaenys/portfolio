'use client'

import {Navbar, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import {faQuoteLeft, faScrewdriverWrench, faFireFlameCurved,} from "@fortawesome/free-solid-svg-icons";
import DropdownContact from "@/app/component/dropdownContact";
import {useState} from "react";

export default function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    library.add(faQuoteLeft,faScrewdriverWrench, faFireFlameCurved);

    const menuItems = [
        {
            link: "#about",
            icon:faQuoteLeft,
            item: "Présentation"
        },
        {
            link: "#skills",
            icon: faScrewdriverWrench,
            item:"Compétences",
        },
        {
            link: "#projects",
            icon: faFireFlameCurved,
            item:"Projets",
        }
    ]

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} height={4} maxWidth={"full"} isBlurred={false} className={"bg-transparent navbar-font"}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />

                <NavbarContent className="hidden sm:flex gap-4 my-4" justify="start">
                    {menuItems.map((item, index) => (
                        <NavbarItem key={`${index}`} >
                            <Link color="foreground" href={item.link} className={"text-sm text-foreground"} isBlock >
                                <FontAwesomeIcon icon={item.icon} className={"mr-2 text-foreground/70"} /> {item.item}
                            </Link>
                        </NavbarItem>
                    ))}
                </NavbarContent>
            </NavbarContent>


            <NavbarContent justify="end" className={"my-4"}>
                <NavbarItem className="lg:flex">
                    <DropdownContact />
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link color="foreground" href={item.link} className={"text-sm navbar-font"} isBlock >
                            <FontAwesomeIcon icon={item.icon} className={"mr-2 text-secondary-100"} /> {item.item}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
