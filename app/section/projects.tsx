"use client";
import React from "react";
import { Accordion, AccordionItem, Image } from "@nextui-org/react";
import { WobbleCard } from "@/app/component/wobble-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHashtag} from "@fortawesome/free-solid-svg-icons";
import {Badge, Chip, Button, Link} from "@nextui-org/react";
import {
    BackgroundBeams
} from "@/app/component/background-beams";

export default function Projects() {

    const intro = {
        title: "Mes projet",
        content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Efficitur imperdiet venenatis facilisi hac dapibus vivamus etiam placerat. Nisi habitant eros finibus orci maximus leo dolor dis primis."
    };


    const items = [
        {
            title: "Conception d'un forum orienté jeu de rôle textuel",
            tags: ["2022 - 2023", "forum", "identité visuelle", "design", "symfony", "css", "html", "js", "figma", "photoshop"],
            description: "Projet de développement réalisé dans le cadre de la préparation du titre professionnel de développeuse web et web mobile. ",
            link: "/aether-video.mp4",
            contentLink: "Découvrir en vidéo",
            img: "/aether.png",
            name: "Aether",
            badge: "terminé",
        },
        {
            title: "Identité graphique et design de forum",
            tags: ["2022 - 2024", "forum", "identité visuelle", "design", "php", "css", "html", "js", "figma", "photoshop"],
            description: "Projet de développement réalisé, au sein d'une équipe, dans le cadre d'une immersion professionelle en vue de la préparation du titre professionnel de conceptrice développeuse d'application.",
            link: "/apercu-sop.png",
            contentLink: "Aperçu du forum",
            img: "/sop.gif",
            name: "Spring of power",
            badge: "terminé",
        },
        {
            title: "Plateforme de gestion de chantier pour particulier",
            tags: ["2023 - 2024" , "design", "identité visuelle", "react", "expressJs", "nestJs", "css", "html", "figma", "photoshop"],
            description: "Projet de développement réalisé, au sein d'une équipe, dans le cadre d'une immersion professionelle en vue de la préparation du titre professionnel de conceptrice développeuse d'application.",
            link:"https://chappy.mbourkel.com/",
            contentLink: "Visiter",
            img: "",
            name: "Chappy",
            badge: "terminé",
        },
        {
            title: "Portfolio pour développeur web",
            tags: ["2024" , "design", "identité visuelle", "figma", "photoshop"],
            description: "Experience the power of AI in generating unique content.",
            link:"https://portfolio.mbourkel.com/",
            contentLink: "Visiter",
            img: "",
            name: "Portfolio de Mathieu Bourkel",
            badge: "terminé",
        },
        {
            title: "Portfolio personnel",
            tags: ["2024" , "design", "identité visuelle", "react", "nextJs", "css", "html", "figma", "photoshop"],
            description: "Experience the power of AI in generating unique content.",
            link:"",
            contentLink: "rien",
            img: "",
            name: "Mon portfolio",
            badge: "terminé",
        },
        {
            title: "Générateur d'infrastructure pour développeurs web",
            tags: ["2024", "à venir" , "projet" ],
            description: "Experience the power of AI in generating unique content.",
            link:"",
            contentLink: "rien",
            img: "",
            name: "Nom à venir",
            badge: "à venir",
        },
        {
            title: "Application de carnets pour écrivain",
            tags: ["2024" ,"à venir" , "projet" ],
            description: "Experience the power of AI in generating unique content.",
            link:"",
            contentLink: "rien",
            img: "",
            name: "Cosima",
            badge: "à venir",
        },

    ];

    return (
        <section className={"projects"} id={"projects"}>

            <article
                className={"m-auto pt-20 md:pt-20 px-3 mb-5 md:w-1/2"}>
                <h4 className={"font-bold text-4xl"}>{intro.title}</h4>
                <p className={"md:p-7 pb-8 pt-3"}>{intro.content}</p>
            </article>

            <article className={"m-auto container md:w-1/2"}>
                <Accordion selectionMode="multiple">
                    {items.map((item, idx) => (
                    <AccordionItem
                        key={idx}
                        className={"project"}
                        aria-label={item.title}
                        subtitle={<div
                            className="flex gap-2 flex-wrap mt-3 ml-3">
                            {item.tags.map((
                                            tag,
                                            index
                                        ) => (
                                <Chip key={index}
                                      size="sm"
                                      className="glass chip-project"
                                      startContent={<FontAwesomeIcon icon={faHashtag} className={"text-foreground/70 hover:text-primary-100/50 mx-1"}/>}
                                      variant="faded"
                                >
                                    {tag}
                                </Chip>
                            ))}
                        </div>}
                        title={
                        <span className={"txt-project"}>
                            {item.title}
                            <Badge content={item.badge} color={item.badge === "terminé" ? "primary" : "secondary"} size="sm" placement="top-right" className={"ml-16"}> <span className={"px-3 py-2"}></span> </Badge>
                        </span>

                    }
                    >
                        <div
                            className={"overflow-x-clip p-5"}>
                            <WobbleCard>
                            <div className="flex items-center flex-col md:flex-row gap-5 p-3">
                                        <Image
                                            isZoomed={true}
                                            alt={item.title}
                                            className="object-cover md:max-w-[200px] md:min-w-[200px]"
                                            height="100%"
                                            shadow="lg"
                                            src={item.img}
                                            width="100%"

                                        />
                                            <div className="flex flex-col md:shrink md:p-2">
                                                <h3 className="font-bold text-foreground/70 text-medium">réalisé en {item.tags[0]}</h3>
                                                <h1 className="text-2xl font-bold">{item.name}</h1>
                                                <p className="px-1 py-2 mt-2 pl-3">{item.description}</p>
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
                                                    <BackgroundBeams className={"-z-10"}/>
                                                </div>
                                            </div>
                                </div>
                        </WobbleCard>
                    </div>
                    </AccordionItem>
                ))}
                </Accordion>
            </article>
        </section>
    );
}



