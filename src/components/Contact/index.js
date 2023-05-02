import './index.css'

const Contact = () => {
  const imgUrl = 'https://assets.ccbp.in/frontend/react-js/contact-blog-img.png'

  return (
    <div className="home-container">
      <img src={imgUrl} className="home-img" alt="home" />
      <h1 className="heading"> Contact </h1>
    </div>
  )
}

export default Contact
