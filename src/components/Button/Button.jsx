import "./Button.css";
import { useState, useEffect } from "react";
const Button = () => {
  const [darkMode, setDarkMode] = useState(false);

  function darkModeToggle() {
    setDarkMode(prev => !prev)
  }

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);



  return (
        <>
        <button className="btn" onClick={() => darkModeToggle()}>
          {darkMode && <img className="btn-img" src="/public/images/icon-sun.svg" width="14" height="14"/>}
          {!darkMode && <img className="btn-img" src="/public/images/icon-moon.svg" width="14" height="14"/>}
        </button>
        </>
  )
}

export default Button