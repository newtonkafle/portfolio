import createAbout from "./Pages/About/About";
import { createHome } from "./Pages/Home/Home";

//define routes here
const routes: { [key: string]: () => HTMLElement } = {
  "/": createHome,
  "/about": createAbout,
};
export const initRouter = (appElement: HTMLElement) => {
  const handleRoute = () => {
    //get the current path from hash
    const path = window.location.hash.slice(1) || "/";

    // clear the current content
    appElement.innerHTML = "";

    // get the page function or default to home
    const pageFunction = routes[path] || routes["/"];

    // append the new page
    appElement.appendChild(pageFunction());
  };

  window.addEventListener("hashchange", handleRoute);

  // handile initial load
  handleRoute();
};
