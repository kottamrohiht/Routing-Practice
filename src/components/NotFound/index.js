import './index.css'

const NotFound = () => {
  const imgUrl =
    'https://assets.ccbp.in/frontend/react-js/not-found-blog-img.png'

  return (
    <div className="home-container">
      <img src={imgUrl} className="home-img" alt="home" />
      <h1 className="heading"> Not Found </h1>
    </div>
  )
}

export default NotFound
