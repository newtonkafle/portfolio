import { createHeader } from "../Components/Header/header";
import { createHero } from "../Components/Hero/hero";
import data from "../../assets/data/data.json";
import { createFooter } from "../Components/Footer/footer";
import { createSkillsBar } from "../Components/Skills/skill";

export function createHome(): HTMLElement {
  const home = document.createElement("div");
  home.className = "site-container";
  //   home.classList.add("container");
  home.appendChild(createHeader(data.header));
  home.appendChild(createHero(data.hero));
  home.appendChild(createSkillsBar(data.skills));
  home.appendChild(createFooter());
  return home;
}
