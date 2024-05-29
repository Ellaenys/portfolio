import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faCopyright,
    faSquareCaretUp
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "@nextui-org/react";

export default function Footer() {
    return (
        <footer className={"footer mt-12 flex justify-between"}>

            <h4 className={"p-5 opacity-50 text-xl font-semibold flex gap-2 items-center"}><span className={"text-foreground/50 font-bold mt-1"}><FontAwesomeIcon icon={faCopyright} /></span> Ashry Laetitia, 2024</h4>
            <div className={"p-5"}><Link href={"#up"}><FontAwesomeIcon icon={faSquareCaretUp} className={"text-2xl text-foreground/50 hover:text-secondary/50"}/></Link></div>

        </footer>
    );
}
