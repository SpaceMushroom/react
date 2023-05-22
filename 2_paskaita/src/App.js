import Car from "./components/Car";
import FuncCar from "./components/FuncCar";
import FuncBestCar from "./components/FuncBestCar";
import PlusMinus from "./components/PlusMinus";
import Hero from "./components/Hero";
import Button from "./components/Button";
import MoodChecker from "./components/MoodChecker";
import "./App.css";

const App = () => {
  return (
    // <div>
    //   <h2>Class</h2>
    //   <Car />
    //   <br />
    //   <br />
    //   <br />
    //   <h2>Function with one state</h2>
    //   <FuncCar />
    //   <br />
    //   <br />
    //   <br />
    //   <h2>Function with separate states</h2>
    //   <FuncBestCar />
    //   <br />
    //   <br />
    //   <br />
    //   <PlusMinus />
    // </div>
    // ------------------ 4_paskaita ---------------
    <div>
      <Hero title="T" subtitle="S" />
      <br />
      <Button title="TEXT" variant="text" />
      <Button title="CONTAINED" variant="contained" />
      <Button title="OUTLINED" variant="belekas" />
      <br />
      <br />
      <MoodChecker />
    </div>
  );
};

export default App;
