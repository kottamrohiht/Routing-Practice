import './index.css'

const About = () => {
  const imgUrl = 'https://assets.ccbp.in/frontend/react-js/about-blog-img.png'

  return (
    <div className="home-container">
      <img src={imgUrl} className="home-img" alt="home" />
      <h1 className="heading"> About </h1>
      <p className="about-para">
        {' '}
        I love to create! I am a frontend web developer{' '}
      </p>
    </div>
  )
}

export default About
