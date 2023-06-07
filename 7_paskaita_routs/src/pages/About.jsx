import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          width: "100%",
          height: "calc(100dvh - 160px)",
          display: "grid",
          justifyItems: "center",
        }}
      >
        <h1>Puslapio pavadinimas</h1>
        <img
          style={{
            height: "300px",
          }}
          src="https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
          alt="akis"
        />
        <p
          style={{
            margin: 16,
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
          voluptatum. Aliquid, laborum. Nostrum quae eius rem non ducimus ipsa
          minima, cumque id nisi voluptatum deleniti numquam eum ullam dolorem
          commodi.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default About;
