import {
    Button,
    Image,
    Link
} from "@nextui-org/react";
import React from "react";
export default function About() {

    const about = {
        picture: "/portrait.png",
        title: "A propos de moi",
        cv: "/cv.pdf",
        content: "Designeuse pour de nombreuses communautés en ligne durant plus de dix ans, je suis depuis devenue développeuse web front-end. De mes appétences en graphisme à mes compétences en développement, je suis en mesure d'élaborer des applications web, de leur maquette jusqu'au déploiement.   "
    }

    return (

        <section className={"wave-about"}>
            <div className={"about flex flex-wrap gap-10 md:justify-center md:items-center container my-10 w-4/5"} id={"about"}>

                <article
                    className={"m-auto px-3 md:w-1/2"}>
                    <h4 className={"font-bold text-4xl"}>{about.title}</h4>
                    <p className={"md:p-7 pb-8 pt-3"}>{about.content}</p>
                    <div className={"flex justify-end mt-3 btn-project"}>
                        <Button
                            href={about.cv}
                            target={"_blank"}
                            as={Link}
                            size={"sm"}
                            showAnchorIcon
                            variant="flat"
                            className={"font-bold text-foreground/80 uppercase"}
                        >
                            Accéder à mon cv

                        </Button>
                    </div>
                </article>
                <aside>
                    <Image
                        width={400}
                        alt="Portrait"
                        src={about.picture}
                        className={"portrait"}
                    />
                </aside>

            </div>
        </section>
    );
}
