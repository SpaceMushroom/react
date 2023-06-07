import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ name, email, website, phone, id, ...rest }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    const stringId = String(id);
    navigate(`/users/${stringId}`);
    console.log(stringId);
  };

  return (
    <div onClick={handleClick} className="card" {...rest}>
      <img
        src="https://img.freepik.com/free-icon/user_318-159711.jpg"
        alt="avatar"
      />
      <div>
        <h3>Full name: {name}</h3>
        <p>Email: {email}</p>
        <p>Website: {website}</p>
        <p>Phone: {phone}</p>
      </div>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default Card;
