import { CardSkills} from "@/app/component/card-skills";
import React from "react";
import {HeroHighlight} from "@/app/component/hero-hightlight";
import {intro, skills} from "@/app/data/skills";

export default function Skills() {


    return (
        <section id={"skills"} className={"skills"}>
            <HeroHighlight>
                <div className={"flex flex-col justify-center items-center container my-20 md:my-16"}>
            <article
                className={"pt-10 mb-5 intro-projects"}>
                <h3 className="font-bold text-foreground/70 text-medium">{intro.subtitle}</h3>
                <h1 className="text-3xl font-bold">{intro.title}</h1>
                <p className={"pt-8"}>{intro.content}</p>
            </article>
            <article
                className={"container md:w-5/6"}>
                <CardSkills items={skills}/>
            </article>
                </div>
            </HeroHighlight>
        </section>
    );
}

