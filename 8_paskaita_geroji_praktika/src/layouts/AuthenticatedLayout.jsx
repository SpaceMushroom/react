import Topbar from "../components/Topbar/Topbar";
import Footer from "../components/Footer/Footer";

const AuthenticatedLayout = ({ children }) => {
  return (
    <>
      <Topbar />
      <div className="authenticated-container">{children}</div>
      <Footer />
    </>
  );
};

export default AuthenticatedLayout;
