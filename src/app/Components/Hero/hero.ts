import "./hero.scss";
import hero_image from "../../../assets/images/profile.jpeg";

interface HeroProps {
  name: string;
  title: string;
  titleDescription: string;
  description: string;
  button: string;
  buttonIcon: string;
  status: string;

}
export function createHero(t: HeroProps): HTMLElement {
  const section = document.createElement("section");
  section.classList.add("hero");

  section.innerHTML = `
    <div class="hero__status">
      <span class="hero__glowing-circle"></span>
      <span class="hero__status-text">Available to Work</span></div>
    <div class="hero__container">
      <div class="hero__illustrations">
        <img src="${hero_image}" alt="Newton" class="hero__image">
      </div>
     <div class="hero__content">
        <p class="hero__name"> Hi, I'm ${t.name}</p>  
        <div class="hero__title">
          <h3 class="hero__title__name">${t.title}</h3>
          <span class="hero__title__seperator">|</span>
          <p class="hero__title__description">${t.titleDescription}</p>
        </div>
        <div class="hero__description">${t.description}</div>
        <a class="hero__button" href="#contacts">
        <span>${t.button}</span>
        ${t.buttonIcon}
        </a>
      </div>
    </div>
  `;


  // making the swing smooth
  const illustrations = section.querySelector('.hero__illustrations');
  console.log(illustrations);
  //only add the class if not already swinging
  illustrations?.addEventListener('mouseenter', () => {
    if (!illustrations.classList.contains('is-swinging')) {

      illustrations.classList.add('is-swinging');
    }
  });

  //remove the class only when the animation is totally done
  illustrations?.addEventListener('animationend', () => {
    illustrations.classList.remove('is-swinging');
  });
  return section;
}
