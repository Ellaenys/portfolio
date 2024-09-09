import * as React from "react";
import About from "@/app/section/about";
import Projects from "@/app/section/projects";
import Skills from "@/app/section/skills";

export default function Portfolio() {
  return (
    <main className={"dark"}>
        <About/>
        <Skills/>
        <Projects/>
    </main>
  );
}
