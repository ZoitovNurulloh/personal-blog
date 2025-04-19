import "./Button.css";
const Button = ({darkModeToggle, darkMode}) => {


  return (
      <button onClick={darkModeToggle}>
        {darkMode ? (
          <img src="/images/icon-sun.svg" alt="Sun" />
        ) : (
          <img src="/images/icon-moon.svg" alt="Moon" />
        )}
      </button>
  )
}

export default Button