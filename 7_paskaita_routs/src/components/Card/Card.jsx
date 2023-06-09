import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./Card.css";

const Card = ({ name, email, website, phone, id, ...rest }) => {
  const navigate = useNavigate();
  const { idArray, blockUser, unblockUser } = useContext(UserContext);

  const handleClick = () => {
    const stringId = String(id);
    navigate(`/users/${stringId}`);
    console.log(stringId);
  };

  const isBlocked = idArray.includes(id);

  const handleBlock = (event) => {
    event.stopPropagation();
    blockUser(id);
  };

  const handleUnblock = (event) => {
    event.stopPropagation();
    unblockUser(id);
  };

  return (
    <div
      onClick={handleClick}
      className={isBlocked ? "card redCard" : "card"}
      {...rest}
    >
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

      {isBlocked ? (
        <button className="button" onClick={handleUnblock}>
          Unblock
        </button>
      ) : (
        <button className="button" onClick={handleBlock}>
          Block
        </button>
      )}
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  rest: PropTypes.any,
};

export default Card;
