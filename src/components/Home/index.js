import './index.css'

const Home = () => {
  const imgUrl = 'https://assets.ccbp.in/frontend/react-js/home-blog-img.png'

  return (
    <div className="home-container">
      <img src={imgUrl} className="home-img" alt="home" />
      <h1 className="heading"> Home </h1>
    </div>
  )
}

export default Home
