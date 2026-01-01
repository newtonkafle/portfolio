import "./_background.scss";

export function createBackground() {
  // the div that holds the background
  const background = document.createElement("div");
  background.className = "container";

  background.innerHTML = `
  <div class="container__background">
      <div class="container__background__grid">
        <div class="container__background__dots"></div>
        <div class="container__background__beams"></div>
      </div>
   </div>  
      `;

  return background;
}
