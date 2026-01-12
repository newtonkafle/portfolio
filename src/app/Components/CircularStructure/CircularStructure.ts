import "./_circular_structure.scss";
export function createCircularStructure() {
  const diagramContainer = document.createElement("div");
  diagramContainer.classList.add("grid-container");

  diagramContainer.innerHTML = `
  <div class="arc"></div>
  <div class="box top-left">Top Left</div>
  <div class="box top-right">Top Right</div>
  
  <div class="center-circle">
    <span>Circle</span>
  </div>
  
  <div class="box bottom-left">Bottom Left</div>
  <div class="box bottom-right">Bottom Right</div>
  `;

  return diagramContainer;
}
