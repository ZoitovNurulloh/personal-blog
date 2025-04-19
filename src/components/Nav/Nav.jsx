import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";

const Nav = ({darkModeToggle,  darkMode}) => {
  return (
    <header className="header">
      <div className="header__container container">
        <Link to="/">
          <img src="/images/image-avatar.jpg"
            className="header__logo" alt="Logo avatar" width="40" height="40" />
        </Link>

        <nav className="header__nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/newsletter">Newsletter</NavLink>
        </nav>

        <Button darkModeToggle={darkModeToggle} darkMode={darkMode}/>
      </div>
    </header>
  )
}

export default Nav