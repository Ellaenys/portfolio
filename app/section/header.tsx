import React from "react";
import {faCode, faCubes, faPalette,} from "@fortawesome/free-solid-svg-icons";
import {library} from "@fortawesome/fontawesome-svg-core";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {HeroHighlight} from "@/app/component/hero-hightlight";
import {quickPres} from "@/app/data/header";


export default function Header() {

    library.add(faCubes,faPalette, faCode);

    return (

        <section className={"header"} id={"up"}>
            <HeroHighlight>
                <div className={"flex flex-col justify-center items-center gap-24 md:gap-32"}>
            <div className={"px-2 md:px-0"}>
                <h1 className={"font-extrabold text-5xl md:text-7xl text-center"}>Ashry
                    Laetitia *</h1>
                <h2 className={"text-center text-2xl md:text-4xl font-medium"}>Développeuse web <span className={"undeline"}>front
                    end</span></h2>
            </div>

            <article className={"flex md:gap-8 gap-3 justify-center quickPres"}>
                {quickPres.map((item, index) => (
                    <div key={`${index}`} className={"flex flex-col gap-2 md:gap-5"}>
                            <FontAwesomeIcon icon={item.icon} className={"mr-2 text-foreground/90 text-medium md:text-2xl"} />
                        <h3 className={"text-medium md:text-lg font-bold text-foreground/90"}>{item.name}</h3>
                    </div>
                ))}
            </article>
                </div>
            </HeroHighlight>

        </section>
    );
}
