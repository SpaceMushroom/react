import "./App.css";
import Product from "./components/Product";

const App = () => {
  return (
    <div>
      <Product
        src="https://www.thesun.co.uk/wp-content/uploads/2021/04/MINI_Pacesitter_-_Hero.jpg?strip=all&w=960"
        title="The electric Mini Pacesetter becomes Formula E's new safety car"
        price={10.99}
        description={
          <div>
            12 unique designs
            <br />
            <br />
            The little dazzling battery-powered car will be flying around
            streets circuits.
            <br />
            <br />
            The Mini will share duties with the BMW i8 Roadster which was
            revealed by Brooklyn Beckham in Mexico last year.
            <br />
            <br />
            The new safety car will appear at the next two races in Rome.
            <br />
            <br />
          </div>
        }
        availability={10}
        category="Cars"
      />
    </div>
  );
};

export default App;
