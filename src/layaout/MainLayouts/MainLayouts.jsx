import { Outlet } from "react-router-dom";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";

const MainLayouts = () => {
  return (
    <>
      <Nav />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default MainLayouts;
