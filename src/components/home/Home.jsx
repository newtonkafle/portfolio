import Me from "../../assets/avatar.svg";
import Shapes from "./Shapes";
import Social from "./Social";
import Topbar from "../topbar/TopBar";
import "./home.css";
import Greeting from "./Greeting";

function Home() {
  return (
    <section className='home container' id='home'>
      <Topbar />
      <div className='profile'>
        <img src={Me} alt='' className='profile__image' />
        <div className='intro'>
          <Greeting />
          <div className='introduction'>
            <h1 className='profile__name'>I&apos;m</h1>

            <h1 className='profile__name'> Newton Kafle</h1>
            <span className='profile__quality'>Aspiring Junior Developer</span>
          </div>
          <Social />
          <a href='#contact' className='btn'>
            Hire Me
          </a>
        </div>
      </div>
      <div className='dots'>
        <span className='dot dot-1'></span>
        <span className='dot dot-2'></span>
        <span className='dot dot-3'></span>
      </div>

      <Shapes />
      {/* <Scroll /> */}
    </section>
  );
}

export default Home;
