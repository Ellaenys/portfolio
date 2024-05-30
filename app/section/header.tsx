import React from "react";
import {faCode, faCubes, faPalette,} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {BackgroundBeams} from "@/app/component/background-beams";


export default function Header() {

    library.add(faCubes,faPalette, faCode);

    const quickPres = [
        {
            name: "Conceptrice",
            icon:faCubes,
        },
        {
            name: "Designeuse",
            icon: faPalette,
        },
        {
            name: "Developpeuse",
            icon: faCode,
        }
    ]

    return (

        <section className={"header flex flex-col items-center relative left-0"} id={"up"}>

            <div className={"md:mt-64 mt-52 px-2 md:px-0"}>
                <h1 className={"font-extrabold text-7xl text-center"}>Ashry
                    Laetitia *</h1>
                <h2 className={"text-center text-4xl font-medium"}>Développeuse web <span className={"undeline"}>front
                    end</span></h2>
            </div>

            <article className={"flex md:gap-8 gap-3 justify-center md:mt-36 mt-20 quickPres mb-20 md:mb-0"}>
                {quickPres.map((item, index) => (
                    <div key={`${index}`} className={"flex flex-col gap-5"}>
                            <FontAwesomeIcon icon={item.icon} className={"mr-2 text-foreground/70 text-2xl"} />
                        <h3 className={"text-lg font-bold text-foreground"}>{item.name}</h3>
                    </div>
                ))}
            </article>
            <BackgroundBeams />

        </section>
    );
}
