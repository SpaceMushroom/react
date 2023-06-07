import PropTypes from "prop-types";

const Job = ({ image, title, ...rest }) => {
  return (
    <div {...rest}>
      <img style={{ width: 200, padding: "2rem" }} src={image} alt={title} />
    </div>
  );
};

Job.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Job;
