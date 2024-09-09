"use client";
import React from "react";
import {Accordion, AccordionItem, Image} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHashtag} from "@fortawesome/free-solid-svg-icons";
import {Badge, Chip, Button, Link} from "@nextui-org/react";
import {intro, items} from "@/app/data/projects";

export default function Projects() {

    return (
        <section className={"projects"} id={"projects"}>

            <article
                className={"m-auto pt-10 md:pt-28 px-3 mb-5 md:w-1/2 intro-projects"}>
                <h3 className="font-bold text-foreground/70 text-medium">{intro.subtitle}</h3>
                <h1 className="text-3xl font-bold">{intro.title}</h1>
                <p className={"md:py-8 pb-8 pt-3 mt-4 md:mt-0"}>{intro.content}</p>
            </article>

            <article
                className={"m-auto container md:w-1/2 "} >
                <Accordion variant={"splitted"}>
                    {items.map((item, idx) => (
                        <AccordionItem
                            key={idx}
                            className={"accordeon-project my-1 !bg-neutral-100"}
                        aria-label={item.title}
                        subtitle={<div
                            className="flex gap-2 flex-wrap mt-3 ml-3">
                            {item.tags.map((
                                            tag,
                                            index
                                        ) => (
                                <Chip key={index}
                                      size="sm"
                                      radius={"sm"}
                                      className="chip-project text-foreground/70 hover:text-foreground bg-neutral-200"
                                      startContent={<FontAwesomeIcon icon={faHashtag} className={"text-foreground/70 hover:text-foreground mx-1"}/>}
                                      variant="solid"
                                >
                                    {tag}
                                </Chip>
                            ))}
                        </div>}
                        title={
                        <span className={"txt-project"}>
                            {item.title}
                            <Badge variant="solid" content={item.badge} color={item.badge === "à venir" ? "secondary" : "primary"} size="sm" placement="top-right" className={"ml-16 border-transparent"}> <span className={"px-3 py-2"}></span> </Badge>
                        </span>

                    }
                    >
                        <div
                            className={"overflow-x-clip py-2"}>
                            <div className="flex items-center flex-col md:flex-row gap-5 p-3">
                                        <Image
                                            isZoomed={true}
                                            alt={item.title}
                                            className="object-cover md:max-w-[200px] md:min-w-[200px]"
                                            height="100%"
                                            src={item.img}
                                            width="100%"

                                        />
                                            <div className="flex flex-col md:shrink md:p-2 title-project">
                                                <h3 className="font-bold text-foreground/70 text-medium">{item.badge === "à venir" ? "Projet en réflexion en" : "Réalisé en" } {item.tags[0]}</h3>
                                                <h1 className="text-2xl font-bold">{item.name}</h1>
                                                <p className="px-1 py-2 mt-5">{item.description}</p>
                                                <div className={item.link === "" ? "hidden" : "flex justify-end mt-3 btn-project"}>
                                                    <Button
                                                    href={item.link}
                                                    target={"_blank"}
                                                    as={Link}
                                                    size={"sm"}
                                                    showAnchorIcon
                                                    variant="flat"
                                                    className={"font-bold text-foreground/80 uppercase"}
                                                >
                                                        {item.contentLink}

                                                </Button>
                                                </div>
                                            </div>
                                </div>
                    </div>
                    </AccordionItem>
                ))}
                </Accordion>
            </article>
        </section>
    );
}



