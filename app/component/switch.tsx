'use client'
import React from "react";
import {Switch} from "@nextui-org/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import {useTheme} from "next-themes";
import { useEffect, useState } from "react";

export default function SwitchButton() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if(!mounted) return null

    return (
        <Switch
            isSelected={theme=="dark"}
            size="md"
            color="secondary"
            onValueChange={()=> setTheme(theme == "dark" ? "light" : "dark")}
            thumbIcon={({ isSelected, className }) =>
                isSelected ? (
                    <FontAwesomeIcon icon={faSun} className={className} onClick={() => setTheme('light')} />
                ) : (
                    <FontAwesomeIcon icon={faMoon} className={className} onClick={() => setTheme('dark')} />
                )
            }
        >
        </Switch>
    );
}
