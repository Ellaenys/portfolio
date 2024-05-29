import {Image} from "@nextui-org/react";
export default function About() {

    const about = {
        picture: "/portrait.png",
        title: "A propos de moi",
        content: "Lorem ipsum odor amet, consectetuer adipiscing elit. Efficitur imperdiet venenatis facilisi hac dapibus vivamus etiam placerat. Nisi habitant eros finibus orci maximus leo dolor dis primis."
    }

    return (

        <section className={"wave-about"}>
            <div className={"about flex flex-wrap gap-10 md:justify-center md:items-center container my-10 md:w-1/2"} id={"about"}>

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
