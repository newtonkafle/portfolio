import "./_skills.scss";

interface Skills {
  title: string;
  icon: string;
  skills: Array<string>;
}

export function createSkills(hardSkills: Array<Skills>) {
  const skills_container = document.createElement("div");

  // We add the wrapper class to the container itself or its innerHTML
  skills_container.innerHTML = `
    <div class="skills-grid">
      ${hardSkills
        .map((category) => {
          // Explicitly returning the string for each category
          return `
            <div class="skills-card">
                <div class="skills-card__header">
                    <span class="skills-card__icon">${category.icon}</span>
                    <h5 class="skills-card__heading">${category.title}</h5>
                </div>
               
                <div class="skills-card__badges">
                    ${category.skills
                      .map(
                        (skill) => `
                        <span class="skills-card__badges__badge">
                            ${skill}
                        </span>
                      `,
                      )
                      .join("")}
                </div>
            </div>
          `;
        })
        .join("")}
    </div>
  `;

  return skills_container;
}
