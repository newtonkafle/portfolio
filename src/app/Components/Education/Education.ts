import "./_education.scss";

interface Degree {
  degree: string;
  institution: string;
  start: string;
  completion: string;
}

interface Education {
  icon: string;
  listOfDegree: Array<Degree>;
}

export function createEducation(education: Education) {
  const education_container = document.createElement("div");
  education_container.classList.add("education");

  education_container.innerHTML = `
  <div class="education__card-header">
      <span class="education__icon"> ${education.icon} </span>   
    <h5 class="education__card-heading">Education</h5>
  </div>

  <div class="education__degrees-wrapper">
      ${education.listOfDegree
        .map(
          (degree) => `
          <div class="education__degree-card">
              <div class="education__degree-info">
                  <span class="education__degree-title">${degree.degree}</span>
                  <span class="education__university-name">${degree.institution}</span>
              </div>
              <span class="education__degree-year">${degree.completion}</span>
          </div>
          `,
        )
        .join("")}
  </div>
`;

  return education_container;
}
