import {
    Button,
    Image,
    Link
} from "@nextui-org/react";
import React from "react";
export default function About() {

    const about = {
        picture1: "/porange.png",
        picture2: "/pmidorange.png",
        picture3: "/pmidviolet.png",
        picture4: "/pviolet.png",
        title: "A propos de moi",
        subtitle: "Une petite présentation",
        cv: "/cv.pdf",
        content: "Designeuse pour de nombreuses communautés en ligne durant plus de dix ans, je suis depuis devenue développeuse web front-end. De mes appétences en graphisme à mes compétences en développement, je suis en mesure d'élaborer des applications web, de leur maquette jusqu'au déploiement.   "
    }

    return (

        <section>
            <div className={"about flex flex-wrap gap-2 md:justify-center md:items-center container my-5 md:w-2/3"} id={"about"}>

                <article
                    className={"m-auto px-3 md:w-1/2"}>
                    <h3 className="font-bold text-foreground/70 text-medium">{about.subtitle}</h3>
                    <h1 className="text-3xl font-bold">{about.title}</h1>
                    <p className={"md:py-8 pb-8 pt-3 mt-4 md:mt-0"}>{about.content}</p>
                    <div
                        className={"flex justify-start btn-project"}>
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
                <aside className={"grid md:grid-cols-2 grid-rows-2 gap-4 md:w-1/3 md:place-items-center"}>

                    <Image
                        alt={"portrait"}
                        className="object-cover hidden md:block md:max-w-[100px] md:min-w-[100px] portrait"
                        height="100%"
                        src={about.picture1}
                        width="100%"

                    />

                    <Image
                        alt={"portrait"}
                        className="object-cover md:max-w-[180px] md:block md:min-w-[180px] hidden portrait"
                        height="100%"
                        src={about.picture2}
                        width="100%"

                    />

                    <Image
                        alt={"portrait"}
                        className="object-cover md:max-w-[150px] md:min-w-[150px] portrait row-start-2"
                        height="100%"
                        src={about.picture3}
                        width="100%"

                    />

                    <Image
                        alt={"portrait"}
                        className="object-cover md:max-w-[110px] md:block md:min-w-[110px] hidden portrait row-start-2"
                        height="100%"
                        src={about.picture4}
                        width="100%"

                    />
                </aside>

            </div>
        </section>
    );
}
