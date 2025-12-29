import "./styles/style.scss";
import { createHome } from "./app/Views/Home";
const app = document.getElementById("app") as HTMLElement;



//appending the page/container
app.appendChild(createHome());
