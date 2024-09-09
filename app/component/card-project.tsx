"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/app/hooks/use-outside-click";
import {items} from "@/app/data/projects";
import {Badge, Chip} from "@nextui-org/react";
import {
    FontAwesomeIcon
} from "@fortawesome/react-fontawesome";
import {
    faHashtag
} from "@fortawesome/free-solid-svg-icons";

export function CardProject() {
    const [active, setActive] = useState<(typeof items)[number] | boolean | null>(
        null
    );
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 glass h-full w-full z-10"
                    />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0  grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col accordeon-project overflow-hidden"
                        >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <Chip variant="shadow" color={active.badge === "à venir" ? "secondary" : "primary"} className={"badge-project"}>{active.badge}</Chip>
                                <Image
                                    priority
                                    width={1000}
                                    height={1000}
                                    src={active.img}
                                    alt={active.title}
                                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top img-project"
                                />
                            </motion.div>

                            <div>
                                <div className="flex flex-col items-start p-4 gap-4">
                                    <div>
                                        <motion.h1
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-foreground text-2xl"
                                        >
                                            {active.name}

                                        </motion.h1>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400 text-base mt-2"
                                        >
                                            {active.description}
                                        </motion.p>
                                        <motion.div
                                        className={"py-5"}>
                                            {active.tags.map((
                                                                 tag,
                                                                 index
                                                             ) => (
                                                <Chip key={index}
                                                      size="sm"
                                                      radius={"sm"}
                                                      className="chip-project text-foreground/70 hover:text-foreground bg-neutral-200 m-1"
                                                      startContent={<FontAwesomeIcon icon={faHashtag}
                                                                                     className={"text-foreground/70 hover:text-foreground mx-1"}/>}
                                                      variant="solid"
                                                >
                                                    {tag}
                                                </Chip> ))}
                                        </motion.div>
                                    </div>

                                    <motion.a
                                        layout
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                        exit={{opacity: 0}}
                                        href={active.link}
                                        target="_blank"
                                        className={active.link === "" ? "hidden" : "px-4 py-3 btn-project-alt "}
                                    >
                                        {active.contentLink}
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="container mx-auto w-full flex justify-center gap-4 flex-wrap">
                {items.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={card.title}
                        onClick={() => setActive(card)}
                        className="p-4 glass-project-hover rounded-xl cursor-pointer"
                    >
                        <div className="flex gap-4 flex-col w-full md:w-[18em] h-56 project-glass">
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                <Image
                                    width={1000}
                                    height={1000}
                                    src={card.img}
                                    alt={card.contentLink}
                                    className="h-36 w-full  rounded-lg object-cover"
                                />
                            </motion.div>
                            <div className="flex justify-start items-start flex-col px-5">
                                <motion.h2
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-sm font-bold pb-5"
                                >
                                    {card.title}
                                </motion.h2>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </ul>
        </>
    );
}

export const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 bg-background text-white close-btn"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

