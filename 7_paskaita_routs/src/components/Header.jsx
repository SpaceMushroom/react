import Links from "./Links";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "rgb(208, 208, 214)",
      }}
    >
      <img
        style={{ height: "70px", marginLeft: 20 }}
        src="https://1000logos.net/wp-content/uploads/2023/01/Yahoo-logo.png"
        alt="logo"
      />
      <Links />
    </header>
  );
};

export default Header;
