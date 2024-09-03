"use client";
import React from "react";
import {Accordion, AccordionItem, Image} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHashtag} from "@fortawesome/free-solid-svg-icons";
import {Badge, Chip, Button, Link} from "@nextui-org/react";

export default function Projects() {

    const intro = {
        title: "Mon portfolio",
        subtitle: "Mes réalisations et mes projets",
        content: "Titulaire de deux titres professionnels, mes apprentissages mêlés à mes expériences m'ont permis d'élaborer et de collaborer dans le cadre de projets divers.      "
    };


    const items = [
        {
            title: "Maquettage des pages d'une application web",
            tags: ["2022", "stage", "maquette", "design", "figma"],
            description: "Lors de mon stage de formation DWWM au sein de CEZAM - le réseau de coopération entre CSE -, j'ai participé au projet d'extension de l'application web en effectuant la maquette des nouvelles pages. Les pages sont aujourd'hui en ligne.",
            link: "https://www.figma.com/design/Ycql2hpMfNJ14L5a1N33X1/CEZAM?node-id=0-1&t=CYBqB5AFV2Ntn0TU-1",
            contentLink: "Découvrir la maquette",
            img: "/cezam.png",
            name: "CEZAM",
            badge: "en ligne",
        },
        {
            title: "Conception d'un forum orienté jeu de rôle textuel",
            tags: ["2022 - 2023", "forum", "identité visuelle", "design", "symfony", "css", "html", "js", "figma", "photoshop"],
            description: "Projet de développement réalisé dans le cadre de la préparation du titre professionnel de développeuse web et web mobile. Sa première version comprends un forum ainsi que son interface administrateur.",
            link: "/aether-video.mp4",
            contentLink: "Découvrir en vidéo",
            img: "/aether.png",
            name: "Aether",
            badge: "réalisé",
        },
        {
            title: "Identité visuelle et design de forum",
            tags: ["2022 - 2024", "forum", "identité visuelle", "design", "php", "css", "html", "js", "figma", "photoshop"],
            description: "Maintien et mise en ligne de versions pour un forum comptant une communauté de plus de 100 personnes. J'ai été en charge de l'identité visuelle et du graphisme dans son ensemble. Activité arrêtée en avril 2024.",
            link: "/apercu-sop.png",
            contentLink: "Aperçu du forum",
            img: "/sop.gif",
            name: "Spring of power",
            badge: "en ligne",
        },
        {
            title: "Plateforme de gestion de chantier pour particulier",
            tags: ["2023 - 2024" , "design", "identité visuelle", "react", "expressJs", "nestJs", "css", "html", "figma", "photoshop"],
            description: "Projet de développement réalisé, au sein d'une équipe, dans le cadre d'une immersion professionelle en vue de la préparation du titre professionnel de conceptrice développeuse d'application. La première version a été déployée.",
            link:"https://chappy.mbourkel.com/",
            contentLink: "Visiter",
            img: "/chappy.png",
            name: "Chappy",
            badge: "en ligne",
        },
        {
            title: "Portfolio pour développeur web",
            tags: ["2024" , "design", "identité visuelle", "figma", "photoshop"],
            description: "Conception de la charte graphique, du logo ainsi que de la maquette d'un portfolio pour développeur back-end et devOps.",
            link:"https://portfolio.mbourkel.com/",
            contentLink: "Visiter",
            img: "/mathieu.png",
            name: "Portfolio de Mathieu Bourkel",
            badge: "en ligne",
        },
        {
            title: "Portfolio personnel",
            tags: ["2024" , "design", "identité visuelle", "react", "nextJs", "css", "html", "figma", "photoshop"],
            description: "Conception de mon portfolio en Next.js avec les librairies de composants Aceternity UI et NextUi. Il s'agit de sa version 3, mise en ligne en mai 2024.",
            link:"",
            contentLink: "rien",
            img: "/portfolio.png",
            name: "Mon portfolio",
            badge: "en ligne",
        },
        {
            title: "Elaboration de modèles de portfolio",
            tags: ["2024", "en cours" , "projet", "conception", "maquette" ],
            description: "Projet en cours de développement.",
            link:"",
            contentLink: "rien",
            img: "/soon.png",
            name: "Elaboration de modèles de portfolio",
            badge: "à venir",
        },
        {
            title: "Application de carnets pour écrivain",
            tags: ["2024" ,"à venir" , "projet", "personnel" ],
            description: "Projet d'espaces de réflexion, d'écriture et de partage pour auteurs.",
            link:"",
            contentLink: "rien",
            img: "/soon.png",
            name: "Cosima",
            badge: "à venir",
        }

    ];

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
                            className={"accordeon-project my-1"}
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
                                      className="chip-project text-foreground/70 hover:text-foreground"
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
                            <Badge content={item.badge} color={item.badge === "à venir" ? "secondary" : "primary"} size="sm" placement="top-right" className={"ml-16"}> <span className={"px-3 py-2"}></span> </Badge>
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



