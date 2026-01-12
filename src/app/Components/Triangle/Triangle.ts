import "./_triangle.scss";
export function createTriangle() {
  const triangleContainer = document.createElement("div");
  triangleContainer.classList.add("triangle-container");

  triangleContainer.innerHTML = `
    <div class="triangle-container__triangle"></div>
   `;

  return triangleContainer;
}

//   </div>
//     <div class="intro__heading">
//     <div class="intro_picture"></div>
//       <p class="intro__heading">About Me</p>
//      </div>
//     <div class="intro__description">

//       <p class="intro__description__intro">Hey, My name is Newton</p>
//         <p class="intro__devside">
//            I am a Junior Backend Developer driven by the challenge of architecting reliable APIs and scalable server-side systems. With a foundation in ASP.NET Core and Django, I focus on writing clean, layered code that adheres to industry best practices like separation of concerns and robust system design.
//         </p>

//         <p class="intro_it-side">
//          Beyond the code, I am a Linux power user (since 2018) and infrastructure enthusiast. Through my home lab, I bridge the gap between development and deployment by experimenting with virtualization, Docker containerization, and reverse proxies. I thrive on self-learning and building the 'hidden' systems that make modern web applications work.
//         </p>

//         <p class="intro__philosopy">
//         I’ve always been drawn to the 'logic under the hood.' While many are drawn to the visual side of the web, I find my flow in the complexity of backend architecture—designing how data moves, how APIs communicate, and how to keep systems secure and efficient. I view software development as the art of building reliable digital foundations.
//         </p>
//     </div>
