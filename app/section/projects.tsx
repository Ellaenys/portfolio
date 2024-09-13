"use client";
import React from "react";
import {Accordion, AccordionItem, Image} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHashtag} from "@fortawesome/free-solid-svg-icons";
import {Badge, Chip, Button, Link} from "@nextui-org/react";
import {intro, items} from "@/app/data/projects";
import {
    CardProject
} from "@/app/component/card-project";

export default function Projects() {

    return (
        <section className={"projects container md:w-[75vw]"} id={"projects"}>

            <article
                className={"pt-10 mb-5 intro-projects my-14 md:my-16 px-5"}>
                <h3 className="font-bold text-foreground/70 text-medium">{intro.subtitle}</h3>
                <h1 className="text-3xl font-bold">{intro.title}</h1>
                <p className={"md:py-8 pb-8 pt-3 mt-4 md:mt-0"}>{intro.content}</p>
            </article>

            <article
                className={"flex flex-col justify-center items-center container"} >
            <CardProject/>
            </article>
        </section>
    );
}



