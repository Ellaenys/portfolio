"use client"

import { cn } from "@/app/lib/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import {Popover, PopoverTrigger, PopoverContent, Card, User} from "@nextui-org/react";
import React, { useState } from "react";
import {PopoverSkill} from "@/app/component/popover-skill";
import {PopoverItem} from "@/app/interface/popoverSkill";

export const CardSkills = ({items, className}: {
    items: PopoverItem[];
    className?: string;
}) => {
    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
                className
            )}
        >
            {items.map((item, idx) => (
                <div
                    key={item?.name}
                    className="relative group  block p-2 h-full w-full"
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    <AnimatePresence>
                        {hoveredIndex === idx && (
                            <motion.span
                                className="absolute inset-0 h-full w-full glass-hover block rounded-xl"
                                layoutId="hoverBackground"
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: 1,
                                    transition: { duration: 0.15 },
                                }}
                                exit={{
                                    opacity: 0,
                                    transition: { duration: 0.15, delay: 0.2 },
                                }}
                            />
                        )}
                    </AnimatePresence>
                    <CardSkill>
                        <Popover
                            showArrow
                            placement="bottom"
                            classNames={{
                                base: [
                                    "before:bg-secondary-50"
                                ],
                                content: [
                                    "py-3 px-4 border border-secondary-50",
                                    "glass"
                                ],
                            }}>
                            <PopoverTrigger>
                                <User
                                    as="button"
                                    name={item.name}
                                    className="transition-transform skill gap-5 ico-skill"
                                    avatarProps={{
                                        src: `${item.icon}`,
                                        isDisabled: false,
                                        color: "secondary",
                                        radius: "md",
                                        size: "md"
                                    }}
                                />
                            </PopoverTrigger>
                            <PopoverContent className="p-1">
                                <PopoverSkill  item={item} />
                            </PopoverContent>
                        </Popover>
                    </CardSkill>
                </div>
            ))}
        </div>
    );
};

export const CardSkill = ({ className, children }: {
    className?: string;
    children: React.ReactNode;
}) => {
    return (

        <Card
            className={cn(
                "h-full w-full p-3 overflow-hidden relative z-20 glass",
                className
            )}
        >
            <div className={"flex gap-4 items-center"}>{children}</div>

        </Card>
    );
};
