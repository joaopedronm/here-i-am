// CSS
import './Header.css'

// Packages
import { Link } from 'react-router-dom';

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
  <header>

    <div className="siteHeader">
      <img src="./logo-horizontal.png" alt="" width={'150px'} />
      <ul className='linksHeader'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/apis'}>Apis</Link></li>
      </ul>

      <div className='icons'>
        <a href={'https://github.com/joaopedronm'} target={'_blank'}><FontAwesomeIcon icon={faGithub} className='icon' /></a>
        <a href={'https://www.linkedin.com/in/joaopedronascimento/'} target={'_blank'}><FontAwesomeIcon icon={faLinkedin} className='icon' /></a>
      </div>
      
    </div>

  </header>
  )
}

export default Header