import "./_pageview.scss";

// this component renders a page with the help of router. ALl the page will be drawn
// on this component.
export function createView() {
  const view = document.createElement("div");
  view.classList.add("view-container");

  return view;
}
