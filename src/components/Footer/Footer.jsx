import './Footer.css';
import '../NavFooter/NavFooter';
import NavFooter from '../NavFooter/NavFooter';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__container container-main">
        <div className="footer__wrapper">
          <h4 className="footer__title">Made with ❤️ and ☕️</h4>
          <NavFooter/>
        </div>
      </div>
    </footer>
  )
}

export default Footer