import { CardSkills} from "@/app/component/card-skills";
import React from "react";
import {HeroHighlight} from "@/app/component/hero-hightlight";

export default function Skills() {

    const intro = {
        title: "Mes compétences",
        subtitle: "Mon savoir et mes savoirs-faire",
        content: "Principalement orientée graphisme et développement front-end, j'ai également des compétences en back-end me permettant d'appréhender toute conception d'application web de manière éclairée."
    }

    const skills = [
        {
            name: "Photoshop",
            description:
                "Pratiqué depuis plus de 15 ans et de manière autodidacte, Photoshop me permet de développer l'approche graphique de mes applications web.",
            icon: "/photoshop.svg",
        },
        {
            name: "Figma",
            description:
                "Pratiqué depuis plus de 3 ans, Figma me permet de concevoir les chartes graphiques, les wireframes et les maquettes. ",
            icon: "/figma.svg",
        },
        {
            name: "Html / Css",
            description:
                "Maitrisés tout deux depuis près de dix ans, je veille tout d'abord à toujours mettre en pratique l'HTML sémantique dans mes applications ; ensuite, j'ai autant de connaissances poussées concernant le CSS que ses préprocesseurs, notamment Sass.",
            icon: "/htmlcss.svg",
        },
        {
            name: "React",
            description:
                "Maitrisé depuis 1 ans, React a été la suite logique dans ma courbe d'exploration des langages orientés front-end suite à une première pratique de Javascript et de Typescript. Aujourd'hui, j'utilise le framework Next.js.",
            icon: "/react.svg",
        },
        {
            name: "Symfony",
            description:
                "Maitrisé depuis 3 ans, Symfony a été mon premier framework back-end après avoir découvert et pratiqué PHP. Avec lui, j'ai également des connaissances touchant aux bases de données (SQL) et aux ORM (Doctrine).",
            icon: "/symfony.svg",
        },
        {
            name: "Wordpress",
            description:
                "A partir de mes connaissances en PHP, j'utilise le CMS afin de créer des thèmes et des applications.",
            icon: "/wordpress.svg",
        },
        {
            name: "NodeJs",
            description:
                "D'Express.js à Nest.js en passant par Next.js, l'environnement d'exécution me permet de concevoir le back-end des applications web. Nest.js m'a notamment permis d'appréhender l'approche architecturale microservice.",
            icon: "/nodejs.svg",
        },
        {
            name: "Docker",
            description:
                "Maitrisé dans le cadre de l'apprentissage de l'approche microservice, elle me permet désormais de conteneuriser mes applications.",
            icon: "/docker.svg",
        },
        {
            name: "Git",
            description:
                "Maitrisé depuis les premières heures de mon apprentissage du développement, mes dépots se trouvent sur GitHub.",
            icon: "/git.svg",
        }
    ];


    return (
        <section id={"skills"} className={"skills"}>
            <HeroHighlight>
                <div className={"flex flex-col justify-center items-center"}>
            <article
                className={"m-auto px-3 md:w-1/2 text-right pt-10"}>
                <h3 className="font-bold text-foreground/70 text-medium">{intro.subtitle}</h3>
                <h1 className="text-3xl font-bold">{intro.title}</h1>
                <p className={"pt-8"}>{intro.content}</p>
            </article>
            <article
                className={"container md:w-2/3"}>
                <CardSkills items={skills}/>
            </article>
                </div>
            </HeroHighlight>
        </section>
    );
}

