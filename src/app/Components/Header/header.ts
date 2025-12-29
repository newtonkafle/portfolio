import "./header.scss";

/* Neet to add Routes the links and need to work on hamburger menu */
interface NavItem {
  name: string;
  href: string;
  icon:string;
}


interface HeaderProps {
  logo: string;
  modeDarkLightIcon:string;
  navItems: NavItem[];
}
export function createHeader(t: HeaderProps): HTMLElement {
  const header = document.createElement("header");
  header.classList.add("header");

  header.innerHTML = `

    <!-- Logo Section -->
    <div class="header__logo">
      <a class="header__logo__link" href="/">
      ${t.logo}
     </a>
    </div>

    <!-- Navigation Section -->
    <nav class="header__nav" id="main-nav">
      <div class="header__links">
        ${t.navItems
          .map(
            (item) =>
              `<a class="header__link" href="${item.href}" aria-label="${item.name}" title="${item.name}">${item.icon}</a>`
          )
          .join("")}
      </div>
    </nav>

    <!-- Light SwitchMode Section -->
    <a class="header__theme-toggle">${t.modeDarkLightIcon}</a>
    <!-- Hamburger -->
    <button class="header__toggle" id="nav-toggle" aria-label="toggle navigation">
    <span></span>
    <span></span>
    <span></span>
    </button>
            

    `;


  //hamburger toggle
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("main-nav")
  console.log(toggle)

  toggle?.addEventListener("click", () => {
    alert('clicked');
    nav?.classList.toggle("header__nav--open")
  });
  
  return header;
}
