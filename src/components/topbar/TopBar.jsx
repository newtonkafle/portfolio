import Logo from "../../assets/logo.svg";
import "./topbar.css";
const Topbar = () => {
  return (
    <div className='topbar'>
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

      <div className='nav-footer'>
        <span className='copyright'>&copy; 2023-2024.</span>
      </div>
    </div>
  );
};

export default Topbar;
