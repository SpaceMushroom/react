import { StyledButton } from "./style";

const Button = ({ title, color, outline }) => {
  return (
    <StyledButton outline={outline ? "true" : ""} color={color}>
      {title}
    </StyledButton>
  );
};

export default Button;
