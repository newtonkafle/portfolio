const Social = () => {
  return (
    <div className='home__socials'>
      <a
        href='https://instagram.com'
        className='home__social-link'
        target='_blank'
      >
        <i className='fa-brands fa-instagram'></i>
      </a>
      <a
        href='https://twitter.com'
        className='home__social-link'
        target='_blank'
      >
        <i className='fa-brands fa-twitter'></i>
      </a>
      <a
        href='https://behance.com'
        className='home__social-link'
        target='_blank'
      >
        <i className='fa-brands fa-behance'></i>
      </a>
      <a
        href='https://dribble.com'
        className='home__social-link'
        target='_blank'
      >
        <i className='fa-brands fa-dribbble'></i>
      </a>
    </div>
  );
};

export default Social;
