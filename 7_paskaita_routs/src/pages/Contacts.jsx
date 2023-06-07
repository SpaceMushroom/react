import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactsForm from "../components/ContactsForm";

const Contacts = () => {
  return (
    <div>
      <Header />
      <div
        style={{
          width: "100%",
          height: "calc(100dvh - 160px)",
        }}
      >
        <div style={{ padding: "1rem" }}>
          <h3>Contacts:</h3>
          <p>VšĮ Lietuvos nacionalinis radijas ir televizija</p>
          <p>Phone: (8 5) 236 30 00</p>
          <p>Email: lrt@lrt.lt</p>
          <p>Address: S. Konarskio g. 49, LT-03123 Vilnius</p>
        </div>
        <ContactsForm />
      </div>
      <Footer />
    </div>
  );
};

export default Contacts;
