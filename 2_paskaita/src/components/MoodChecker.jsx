import { useState } from "react";
import Button from "./Button";

const MoodChecker = () => {
  const [message, setMessage] = useState("Kaip jaučiatės?");

  const changeMessage = (msg) => {
    setMessage(msg);
    setTimeout(() => {
      setMessage("Kaip jaučiatės?");
    }, 3000);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2>{message}</h2>
      <div>
        <Button
          title="Jaučiuosi prastai :/"
          variant="text"
          click={() => changeMessage("Nieko tokio, viskas bus gerai!")}
        />
        <Button
          title="Jaučiuosi normaliai :|"
          variant="contained"
          click={() =>
            changeMessage("Gerai, nujaučiu, kad greitu metu jausitės puikiai!")
          }
        />
        <Button
          title=" Jaučiuosi puikiai :)"
          variant="belekas"
          click={() => changeMessage("Smagu girdėti, taip ir toliau!")}
        />
      </div>
    </div>
  );
};

export default MoodChecker;
