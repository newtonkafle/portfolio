import "./_skills.scss";
interface skills {
    softSkills: Array<string>,
    hardSkills: Array<string>,
}
export function createSkillsBar(skills:skills) {
    const section = document.createElement('section');
    section.classList.add("skills");

    section.innerHTML = `
    <div class="skills__soft">
        ${skills.softSkills.map(skill => 
            `<div class="skills__item">
                <span class="skills__dot"></span>
                ${skill}
            </div>`
        ).join('')}
    </div>

    <div class="skills__hard">
    
    </div>
    `;

    return section;
}