import createAbout from "./Pages/About/About";
import { createHome } from "./Pages/Home/Home";

//define routes here
const routes: { [key: string]: () => HTMLElement } = {
  "/": createHome,
  "/about": createAbout,
};
export const initRouter = (appElement: HTMLElement) => {
  const handleRoute = () => {
    // get the real path
    const path = window.location.pathname;

    // check if the user typed route exist other wise retured to home.
    if (!routes[path]) {
      window.history.replaceState({}, "", "/");
      handleRoute();
      return;
    }

    // clear the current content
    appElement.innerHTML = "";

    // get the page function or default to home
    const pageFunction = routes[path];
    // append the new page
    appElement.appendChild(pageFunction());
  };

  window.addEventListener("popstate", handleRoute);

  // handile initial load
  handleRoute();
};

// helper function to navigate without refreshing the page
export const navigate = (path: string) => {
  window.history.pushState({}, "", path);
  const navEvent = new PopStateEvent("popstate");
  window.dispatchEvent(navEvent);
};
