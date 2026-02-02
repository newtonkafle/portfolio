import "./_about.scss";
import { createAboutComponent } from "../../Components/About/AboutComponent";

export default function createAbout() {
  const about = document.createElement("div");
  about.classList.add("site-about");
  about.appendChild(createAboutComponent());
  return about;
}
