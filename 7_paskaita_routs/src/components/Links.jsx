import Link from "./Link";
import { useNavigate } from "react-router-dom";

const Links = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/users");
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Link to="/">Home</Link>
      <div style={{ padding: "1rem", cursor: "pointer" }} onClick={handleClick}>
        <strong>Users</strong>
      </div>
      <Link to="../about">About</Link>
      <Link to="../news">News</Link>
      <Link to="../services">Services</Link>
      <Link to="../jobs">Fulfilled Jobs</Link>
      <Link to="../contacts">Contacts</Link>
    </div>
  );
};

export default Links;
