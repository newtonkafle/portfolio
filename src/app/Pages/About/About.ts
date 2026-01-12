import "./_about.scss";
import { createAboutComponent } from "../../Components/About/AboutComponent";
import data from "../../../assets/data/data.json";

export default function createAbout() {
  const about = document.createElement("div");
  about.classList.add("site-about");
  about.appendChild(createAboutComponent(data.skills, data.education));
  // about.appendChild(createTriangle());
  return about;
}
