import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import {
  PROFILE_ROUTE,
  MAIN_ROUTE,
  topbarNavigationItems,
} from "../../routes/const";
import { showUserFullName } from "../../utils/user";
import { FaUserCircle } from "react-icons/fa";
import "./Topbar.scss";
import logo from "../../images/logo.jpg";

const Topbar = () => {
  const { user } = useContext(UserContext);

  return (
    <nav className="navigation">
      <div>
        <Link to={MAIN_ROUTE}>
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navigation-items">
        {topbarNavigationItems.map((navItem) => (
          <Link to={navItem.route} key={navItem.title}>
            {navItem.title}
          </Link>
        ))}
      </div>
      <Link to={PROFILE_ROUTE} className="user-container">
        <FaUserCircle />
        {showUserFullName(user)}
      </Link>
    </nav>
  );
};

export default Topbar;
