import Links from "./Links";

const Footer = () => {
  return (
    <footer
      style={{
        display: "flex",
        justifyItems: "center",
        backgroundColor: "rgb(208, 208, 214)",
        height: "60px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Links />
      <div
        style={{
          paddingBottom: "10px",
          color: "rgb(157, 148, 168)",
          width: "100%",
          backgroundColor: "rgb(208, 208, 214)",
          textAlign: "center",
        }}
      >
        Copyright © {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
