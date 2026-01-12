import "./_about.scss";
import aboutImage from "./../../../assets/images/profile.jpeg";

interface HardSkills {
  name: string;
  detail_title: string;
  description: string;
  category: string;
}

interface Degree {
  degree: string;
  institution: string;
  start: string;
  completion: string;
}

interface Education {
  icon: string;
  degrees: Array<Degree>;
}

interface Skills {
  icon: string;
  softSkills: Array<string>;
  hardSkills: Array<HardSkills>;
}

export function createAboutComponent(Skills: Skills, Education: Education) {
  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("about-container");

  //toggle button change

  aboutContainer.innerHTML = `
<div class="story-box"> 
  <div class="story-box__header">
      <h4 class="story-box__subheading">
        <span class="story-box__subheading__typing-text">~/HOME/NEWTON/JOURNEY/STORY_V1.txt</span>
      </h4>
      <div class="story-box__profile-image-frame">
        <img src="${aboutImage}" alt="Newton" class="story-box__profile-image">
      </div> 
  </div>
  
    <div class="story-box__reveal-content">
    <div class="story-box__story">
<h2 class="story-box__heading">The Story So Far</h2>

        <p class="story-box__lead">
          Driven by a lifelong curiosity for how hardware and software interact, I build high-level web applications with a deep-seated respect for the systems that power them.
        </p>
    <p class="story-box__para">
            Unlike many who come to software through a specific framework, my journey began with the machine itself. It started with an old <strong>IBM ThinkPad</strong> and a fascination with how <strong>Windows XP</strong> and <strong>Linux</strong> interacted with the hardware beneath them.
          </p>
          <p class="story-box__para">
            Hardware constraints were my first mentors. Trying to get games and software to run on limited power forced me to learn the internals of <strong>GPUs, RAM, and networking</strong>. I didn't just use my computer; I broke it, tinkered with it, and fixed it—eventually daily-driving Linux and exploring <strong>virtualisation</strong> to see how far I could push the silicon.
          </p>
          <p class="story-box__para">
            Today, I bring that same <strong>problem-solving grit</strong> to Backend Development. Whether I’m building robust APIs with <strong>ASP.NET Core</strong> or scaling <strong>Django</strong> applications, my focus is always on creating software that is clean, modular, and deeply informed by the systems it runs on.
          </p> 
    </div> 

    <div class="story-box__core-values-box">
          <blockquote class="story-box__core-values">
            I believe that great software is inseparable from the system it runs on. I strive to write clean, purposeful code that respects the underlying architecture, ensuring reliability from the kernel to the API.
          </blockquote> 
    </div>
    </div>
  </div>
    
  `;

  return aboutContainer;
}

// <div class="bio">
//     <div class="bio__edu-skill-box">
//       <div class="bio__edu-skill-toggle">
//         <span id="btn-edu" class="bio__edu-skill-toggle__item">${Education.icon}</span>
//         <span class="bio__edu-skill-toggle__divider"></span>
//         <span id="btn-skill" class="bio__edu-skill-toggle__item">${Skills.icon}</span>
//       </div>
//       <div class="bio__skills">

//       </div>

//       <div class="bio__education">
//       </div>
//       </div>
//     </div>
