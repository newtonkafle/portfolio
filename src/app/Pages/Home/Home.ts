import "./_home.scss";
import { createHero } from "../../Components/Hero/hero";
import data from "../../../assets/data/data.json";
import { createSkillsBar } from "../../Components/Skills/skill";

export function createHome(): HTMLElement {
  const home = document.createElement("div");
  home.classList.add("site-home");

  //create a spacer for home which still keep content to middle
  const spacer = document.createElement("div");
  spacer.classList.add("site-home__spacer");

  home.appendChild(spacer);
  home.appendChild(createHero(data.hero));
  home.appendChild(createSkillsBar(data.skills));

  return home;
}
