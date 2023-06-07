import { Link as RouterLink } from "react-router-dom";

const Link = ({ children, ...rest }) => {
  return <RouterLink {...rest}>{children}</RouterLink>;
};

export default Link;
