// import FuncButton from "./components/FuncButton";
// import FuncDiv from "./components/FuncDiv";
// import ClassButton from "./components/ClassButton";
// import ClassDiv from "./components/ClassDiv";
// import Greeting from "./components/Greeting";
// import Card from "./components/Card";
// import Avatar from "./components/Avatar";
import Products from "./components/Products";
import "./App.css";

function App() {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      {/* <FuncDiv title="Button title" />
      <br></br>
      <FuncButton title="Spausk mane" />
      <FuncButton />
      <hr></hr>
      <ClassButton name="ClassButtonas" />
      <ClassButton />
      <ClassDiv />
      <Greeting name="Ignas" />
      <Greeting /> */}

      {/* <Card
        imageUrl="https://a-z-animals.com/media/green-anole-2.jpg"
        title="Lizard"
        subtitle="Lizards blizards"
      />
      <Card
        imageUrl="https://upload.wikimedia.org/wikipedia/commons/7/75/Hilu_the_Australian_Kelpie_dog.jpg"
        title="Australian Kelpie"
        subtitle="Breed Standard: A description of the ideal dog of each recognized breed...."
      />
      <div>
        <Avatar name="Ignas Grinius" />
        <Avatar name="Jonas Jonka" />
        <Avatar name="Benas bonka" />
      </div> */}

      <Products />
    </div>
  );
}

export default App;
