import "./Nav.css";
import { Link, NavLink } from "react-router-dom";
import Button from "../Button/Button";

const Nav = () => {

  return (
    <header className="header">
      <div className="header__container container">
        <div className="header__wrapper">
        <Link className="header__logo" to="/">
          <img src="/images/image-avatar.jpg"
            className="header__img" alt="Logo avatar" width="40" height="40" />
        </Link>

        <nav className="header__nav">
          <NavLink className="header__link" to="/">Home</NavLink>
          <NavLink className="header__link" to="/blog">Blog</NavLink>
          <NavLink className="header__link" to="/about">About</NavLink>
          <NavLink className="header__link" to="/newsletter">Newsletter</NavLink>
        </nav>
        <Button  />
        </div>
      </div>
    </header>
  )
}

export default Nav