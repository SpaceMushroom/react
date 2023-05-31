import "./Page.css";

const Card = ({ imgUrl, title, ...rest }) => {
  return (
    <div {...rest} className="card">
      <img src={imgUrl} alt={title} />
      <div>{title}</div>
    </div>
  );
};

export default Card;
