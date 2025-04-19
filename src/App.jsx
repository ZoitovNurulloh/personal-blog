import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayouts from "./layaout/MainLayouts/MainLayouts";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Newsletter from "./pages/NewsLetter/Newsletter";
// import { useEffect, useState } from "react";

function App() {
  // const [darkMode, setDarkMode] = useState(true);


  // console.log(darkMode)

  // useEffect(() => {
  //   if (darkMode) {
  //     document.body.classList.add("dark");
  //   } else {
  //     document.body.classList.remove("dark");
  //   }
  // }, [darkMode]);

  // function darkModeToggle() {
  //   setDarkMode(prev => !prev)
  // }

  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/newsletter",
          element: <Newsletter />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
