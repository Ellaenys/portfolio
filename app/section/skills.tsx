import { CardSkills} from "@/app/component/card-skills";
import {BackgroundBeams} from "@/app/component/background-beams";
import React from "react";

export default function Skills() {

    const intro = {
        title: "Mes compétences",
        content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Efficitur imperdiet venenatis facilisi hac dapibus vivamus etiam placerat. Nisi habitant eros finibus orci maximus leo dolor dis primis."
    }

    const skills = [
        {
            name: "Photoshop",
            description:
                "A technology company that builds economic infrastructure for the internet.",
            icon: "/photoshop.svg",
        },
        {
            name: "Figma",
            description:
                "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
            icon: "/figma.svg",
        },
        {
            name: "Html / Css",
            description:
                "A multinational technology company that specializes in Internet-related services and products.",
            icon: "/htmlcss.svg",
        },
        {
            name: "React",
            description:
                "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
            icon: "/react.svg",
        },
        {
            name: "Symfony",
            description:
                "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
            icon: "/symfony.svg",
        },
        {
            name: "Wordpress",
            description:
                "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
            icon: "/wordpress.svg",
        },
        {
            name: "NodeJs",
            description:
                "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
            icon: "/nodejs.svg",
        },
        {
            name: "Docker",
            description:
                "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
            icon: "/docker.svg",
        },
        {
            name: "Git",
            description:
                "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
            icon: "/git.svg",
        }
    ];


    return (
        <section className={"skills pb-10"}
                 id={"skills"}>
                <article
                    className={"m-auto pt-12 md:pt-28 px-3 md:w-1/2 text-right"}>
                    <h4 className={"font-bold text-4xl"}>{intro.title}</h4>
                    <p className={"md:p-2 pb-2 pt-3"}>{intro.content}</p>
                </article>
                <article className={"container md:w-1/2"}>
                    <CardSkills items={skills}/>
                </article>
            <BackgroundBeams />
        </section>
    );
}

