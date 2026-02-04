import "./_project.scss";

interface Project {
  title: string;
  description: string;
  tech_stack: Array<string>;
  github_link: string;
  image: string;
}
export function createProject(projects: Array<Project>) {
  const project_container = document.createElement("div");

  const projectHTML = projects
    .map((project) => {
      return `
        <div class="project">
            <div class="project__content">
                <div class="project__header">
                    <h3 class="project__title">${project.title}</h3>
                    <p class="project__description">
                        ${project.description}
                    </p>
                </div>

                <div class="project__links">
                    <a href="${project.github_link}" class="btn-github" target="_blank">
                        <i class="fab fa-github"></i> View Code
                    </a>
                </div>
            </div>

            <div class="project__image">
                <img src="${project.image}" alt="Project Preview">
            </div>
        </div>
    `;
    })
    .join("");

  project_container.innerHTML = projectHTML;

  return project_container;
}
