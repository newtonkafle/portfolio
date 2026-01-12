import "./styles/style.scss";
import { createLayout } from "./Layout/Layout";
const app = document.getElementById("app") as HTMLElement;

const mainContainer = createLayout();

app.appendChild(mainContainer);
