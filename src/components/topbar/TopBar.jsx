import { useEffect, useState } from "react";
import Logo from "../../assets/logo.svg";
import "./topbar.css";
const Topbar = () => {
  const [topBarPosition, setTopBarPosition] = useState(5);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        if (!isScrolling) setIsScrolling(true);
        setTopBarPosition(2);
      } else {
        if (isScrolling) setIsScrolling(false);
        setTopBarPosition(5);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolling]);

  return (
    <div
      className={`topbar ${isScrolling ? "scrolling" : ""}`}
      style={{ top: `${topBarPosition}%` }}
    >
      <a href='#home' className='nav__logo'>
        <img src={Logo} alt='home logo' />
      </a>
      <nav className='nav'>
        <div className='nav__menu'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <a href='#home' className='nav__link select'>
                <i className='icon-home'></i>
              </a>
            </li>

            <li className='nav__item'>
              <a href='#about' className='nav__link'>
                <i className='icon-user-following'></i>
              </a>
            </li>
            <li className='nav__item'>
              <a href='#services' className='nav__link'>
                <i className='icon-briefcase'></i>
              </a>
            </li>
            <li className='nav__item'>
              <a href='#resume' className='nav__link'>
                <i className='icon-graduation'></i>
              </a>
            </li>
            <li className='nav__item'>
              <a href='#contact' className='nav__link'>
                <i className='icon-bubble'></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <div className='resume'>
        <span className='copyright'>Resume</span>
      </div>
    </div>
  );
};

export default Topbar;
