import "./_networkbackground.scss";

export function CreateNetworkBackground() {
  // the div that holds the background
  const networkbackground = document.createElement("div");
  networkbackground.className = "network-background";

  const svgNS = "http://www.w3.org/2000/svg";

  // Create the SVG
  const svg = document.createElementNS(svgNS, "svg");
  svg.setAttribute("width", "100%");
  svg.setAttribute("height", "100%");
  svg.classList.add("plexus-svg");

  // This group holds your exact paths from the URL you provided
  const lineGroup = document.createElementNS(svgNS, "g");
  lineGroup.classList.add("plexus-svg__lines");

  const paths = [
    "M10 40 L50 20 L90 50 L130 10 L180 40 L200 20",
    "M0 80 L40 100 L80 70 L120 110 L170 80 L200 120",
    "M20 150 L70 130 L110 160 L160 140 L200 170",
    "M50 20 L40 100 L70 130",
    "M90 50 L80 70 L110 160",
    "M130 10 L120 110 L160 140",
    "M180 40 L170 80 L200 170",
  ];

  paths.forEach((d) => {
    const path = document.createElementNS(svgNS, "path");
    path.setAttribute("d", d);
    lineGroup.appendChild(path);
  });

  const dotGroup = document.createElementNS(svgNS, "g");
  dotGroup.classList.add("plexus-svg__dots");

  const dots = [
    [50, 20],
    [90, 50],
    [130, 10],
    [40, 100],
    [80, 70],
    [120, 110],
    [70, 130],
    [110, 160],
    [160, 140],
  ];

  dots.forEach(([cx, cy]) => {
    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("cx", cx.toString());
    circle.setAttribute("cy", cy.toString());
    circle.setAttribute("r", "1.5");
    dotGroup.appendChild(circle);
  });

  svg.appendChild(lineGroup);
  svg.appendChild(dotGroup);
  networkbackground.appendChild(svg);

  return networkbackground;
}
