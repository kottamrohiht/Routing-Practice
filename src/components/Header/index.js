import {Link} from 'react-router-dom'

import './index.css'

const Header = () => {
  const wave = 'https://assets.ccbp.in/frontend/react-js/wave-logo-img.png'

  return (
    <div className="main-container">
      <div className="img-container">
        <img src={wave} alt="wave" className="wave" />
        <p className="wave-text"> Wave </p>
      </div>
      <ul className="list-item-container">
        <li className="item">
          <Link to="/" className="link">
            {' '}
            Home{' '}
          </Link>
        </li>

        <li className="item">
          <Link to="/about" className="link">
            {' '}
            About{' '}
          </Link>
        </li>

        <li className="item">
          <Link to="/contact" className="link">
            {' '}
            Contact{' '}
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
