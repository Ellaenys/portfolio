import {Image} from "@nextui-org/react";
export default function About() {

    const about = {
        picture: "/portrait.png",
        title: "A propos de moi",
        content: "Designeuse pour de nombreuses communautés en ligne durant plus de dix ans, je suis depuis devenue développeuse web front-end. De mes appétences en graphisme à mes compétences en développement, je suis en mesure d'élaborer des applications web, de leur maquette jusqu'au déploiement.   "
    }

    return (

        <section className={"wave-about"}>
            <div className={"about flex flex-wrap gap-10 md:justify-center md:items-center container my-10 w-4/5"} id={"about"}>

                <article className={"m-auto px-3 md:w-1/2"}>
                    <h4 className={"font-bold text-4xl"}>{about.title}</h4>
                    <p className={"md:p-7 pb-8 pt-3"}>{about.content}</p>
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
