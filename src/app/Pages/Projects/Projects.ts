import { createEducation } from "../../Components/Education/Education";
import { createProject } from "../../Components/Projects/Project";
import "./_projects.scss";
import data from "../../../assets/data/data.json";
import { createSkills } from "../../Components/Skills/Skills";
import { initSkillsHighlight } from "@/app/Utils/ProjectSkillsHoverLogic";

export function createProjects() {
  const projects_container = document.createElement("div");
  projects_container.classList.add("project-container");

  //create a two column layout

  //creating the left side bar structure for education and skills.
  const left_view = document.createElement("div");
  left_view?.classList.add("project-container__left-view");
  left_view.appendChild(createSkills(data.skills.hardSkills));
  left_view.appendChild(createEducation(data.education));

  //create the main right layout to display the projects.
  const right_view = document.createElement("div");
  right_view.classList.add("project-container__right-view");
  right_view.appendChild(createProject(data.projects));

  projects_container.appendChild(left_view);
  projects_container.appendChild(right_view);

  //adding the logic to highlight skills tag when hover on the project card
  requestAnimationFrame(() => {
    initSkillsHighlight();
  });
  return projects_container;
}
