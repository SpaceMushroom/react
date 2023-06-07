import Header from "../components/Header";
import Footer from "../components/Footer";
import Service from "../components/Service";

const Services = () => {
  return (
    <div>
      <Header />
      <div style={{ width: "100%", height: "calc(100dvh - 160px)" }}>
        <div style={{ padding: "2rem" }}>
          <Service
            title={"Paslauga 1"}
            subtitle={"tekstas po ja ................................."}
          />
          <Service
            title={"Paslauga 2"}
            subtitle={"tekstas po ja ................................."}
          />
          <Service
            title={"Paslauga 3"}
            subtitle={"tekstas po ja ................................."}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
