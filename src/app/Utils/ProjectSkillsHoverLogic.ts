export function initSkillsHighlight() {
  // holds into the target component project and the skill badges of left side
  const projectCards = document.querySelectorAll(".project");
  const sidebarBadges = document.querySelectorAll(
    ".skills-card__badges__badge",
  );

  // get the tags which are stored with each project components
  projectCards.forEach((card) => {
    const skillTags =
      card
        .getAttribute("data-tech")
        ?.toLocaleLowerCase()
        .split(",")
        .map((tag) => tag.trim()) || [];

    // if badge content is within a project skillTags, highlight on hover and remove.
    card.addEventListener("mouseenter", () => {
      //hightlight on hover
      sidebarBadges.forEach((badge) => {
        const text = badge.textContent?.trim() || "";
        if (skillTags.includes(text.toLocaleLowerCase())) {
          badge.classList.add("is-highlighted");
        }
      });
    });

    //remove after the hover event done.
    card.addEventListener("mouseleave", () => {
      sidebarBadges.forEach((badge) =>
        badge.classList.remove("is-highlighted"),
      );
    });
  });
}
