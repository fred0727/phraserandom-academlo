import { useState } from "react";
import { getRandom } from "./utils/random";
import Card from "./components/Card";
import Space from "./components/Space";
import dbQuotes from "./db/quote.json";
import Button from "./components/Button";
import "./App.css";
const bgImages = ["back1", "back2", "back3", "back4"];

function App() {
  const [phrase, setPharse] = useState(getRandom(dbQuotes));
  const [bgImg, setBackground] = useState(getRandom(bgImages));

  const handleClickRandomBackground = () => {
    const newpharse = getRandom(dbQuotes)
    const newimg = getRandom(bgImages)
    if (phrase.phrase !== newpharse.phrase && newimg !== bgImg) {
      setPharse(newpharse);
      setBackground(newimg);
    } else {
      handleClickRandomBackground();
    }
  };

  return (
    <>
      <div className={`main ${bgImg}`}>
        <h1 className="title">INFOGALAX</h1>
        <Card phrase={phrase.phrase} bgImg={bgImg} />
        <Button handleRamdon={handleClickRandomBackground} />
        <Space bgImg={bgImg} />
        <footer>
          <h3>Fuente: {phrase.author}</h3>
        </footer>
      </div>
    </>
  );
}

export default App;
