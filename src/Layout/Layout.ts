import data from "../assets/data/data.json";
import { createBackground } from "../app/Components/Background/Background";
import { createFooter } from "../app/Components/Footer/footer";
import { createHeader } from "../app/Components/Header";
import { initRouter } from "../app/router";
import { createView } from "../app/View/PageView";

export function createLayout() {
  // this container will be a base for router to draw different pages
  const viewContainer = createView();

  // container which holds static and dynamic content
  const mainContainer = createBackground();

  // aligned with the flow of the element header -> pageView -> footer
  // static content doesn't change with the pages
  mainContainer.appendChild(createHeader(data.header));

  // this is dynamic container which  draws dynamic content inside it.
  mainContainer.appendChild(viewContainer);

  // footer is static for all pages
  mainContainer.appendChild(createFooter());

  // here router will be called to draw page on view container
  initRouter(viewContainer);

  return mainContainer;
}
