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

        <section className={"header flex flex-col justify-center items-center"} id={"up"}>

            <div className={"px-2 md:px-0 md:mt-48 mt-44"}>
                <h1 className={"font-extrabold text-7xl text-center"}>Ashry
                    Laetitia *</h1>
                <h2 className={"text-center text-4xl font-medium"}>Développeuse web <span className={"undeline"}>front
                    end</span></h2>
            </div>

            <article className={"flex md:gap-8 gap-3 justify-center pb-14 md:mt-24 mt-20 z-20 quickPres"}>
                {quickPres.map((item, index) => (
                    <div key={`${index}`} className={"flex flex-col gap-2 md:gap-5"}>
                            <FontAwesomeIcon icon={item.icon} className={"mr-2 text-foreground/90 text-2xl"} />
                        <h3 className={"text-lg font-bold text-foreground/90"}>{item.name}</h3>
                    </div>
                ))}
            </article>
            <BackgroundBeams />

        </section>
    );
}
