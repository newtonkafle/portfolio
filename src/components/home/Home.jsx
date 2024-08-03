import Me from "../../assets/avatar.svg";
import Scroll from "./Scroll";
import Shapes from "./Shapes";
import Social from "./Social";
import "./home.css";

function Home() {
  return (
    <section className='home container' id='home'>
      <img src={Me} alt='' className='profile__image' />
      <div className='intro'>
        <div className='introduction'>
          <h1 className='profile__name'>Newton Kafle</h1>
          <span className='profile__quality'>I&apos;m a Junior Developer</span>
        </div>
        <Social />
        <a href='#contact' className='btn'>
          Hire Me
        </a>
      </div>
      <Shapes />
      <Scroll />
    </section>
  );
}

export default Home;
