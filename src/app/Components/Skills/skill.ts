import "./_skills.scss";

interface HardSkills {
  name: string;
  detail_title: string;
  description: string;
  category: string;
}
interface skills {
  softSkills: Array<string>;
  hardSkills: Array<HardSkills>;
}
export function createSkillsBar(skills: skills) {
  const section = document.createElement("section");
  section.classList.add("skills");

  // Use optional chaining (?.) and fallbacks ([]) to prevent errors
  const softSkillsHTML = (skills?.softSkills || [])
    .map(
      (skill: string) => `
      <div class="skills__soft__item">
        <span class="skills__dot"></span>
        <span class="skills__text">${skill}</span>
      </div>`
    )
    .join("");

  const hardSkillsHTML = (skills?.hardSkills || [])
    .map(
      (skill: any) => `
      <div class="skills__hard__item">
        <span class="skills__dot"></span>
        <span class="skills__text">${skill.name}</span>
      </div>`
    )
    .join("");

  section.innerHTML = `
    <div class="skills__soft">
        ${softSkillsHTML}
    </div>
    <div class="skills__hard">
        ${hardSkillsHTML}${hardSkillsHTML}
    </div>
  `;

  return section;
}
