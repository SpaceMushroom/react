import Header from "../components/Header";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <div style={{ padding: 0 }}>
        <img
          style={{ width: "100%", height: "calc(100dvh - 160px)" }}
          src="https://files.123freevectors.com/wp-content/original/169293-purple-and-grey-texture-background.jpg"
          alt="akis"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
