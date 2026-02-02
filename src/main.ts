import "./styles/style.scss";
import { createLayout } from "./Layout/Layout";
import { navigate } from "./app/router";
const app = document.getElementById("app") as HTMLElement;

const mainContainer = createLayout();

// we use manually catching all the clicks events on maincontainer where our routed lives and preventing page from reloading
// then updating the path(url) according to the href attribute
// catch all the clicks on main container
mainContainer.addEventListener("click", (e) => {
  const link = (e.target as HTMLElement).closest("a");
  console.log(link);

  if (link && link.getAttribute("href")?.startsWith("/")) {
    e.preventDefault();
    const path = link.getAttribute("href");
    if (path) navigate(path);
  }
});

app.appendChild(mainContainer);
