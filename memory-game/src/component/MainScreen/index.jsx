import Card from "../card";
import { characters } from "../../data/character";
import styles from "../../styles/mainScreen.module.css";
import { useEffect, useState } from "react";
import randomCard from "../../utils/utils";
import Header from "../header";

function MainScreen() {
  // HOOKS

  const [clicked, setClicked] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);
  const [flipped, toggleFlip] = useState(false);

  const [cards, setCards] = useState(() => randomCard(characters));

  // EFFECT
  //   useEffect(() => [highScore]);

  // HELPERS

  // EVENT HANDLER

  const handleClick = (id) => {
    if (clicked.includes(id)) {
      setClicked([]);
      setCurrentScore((prevScore) => {
        setHighScore((prevHigh) => Math.max(prevHigh, prevScore));
        return 0;
      });
    } else {
      setCurrentScore((s) => s + 1);
      setClicked((prev) => [...prev, id]);
    }

    toggleFlip(true);

    setTimeout(() => {
      setCards(randomCard(characters));
      toggleFlip(false);
    }, 600);
  };

  // Render Logic

  return (
    <div className={styles["wrapper"]}>
      <Header highScore={highScore} currentScore={currentScore}></Header>
      <div className={styles["card-container"]}>
        {cards.map((char) => {
          return (
            <Card
              key={char.id}
              img={char.img}
              name={char.name}
              onClick={() => handleClick(char.id)}
              flipped={flipped}
              isCliked={clicked}
            ></Card>
          );
        })}
      </div>
    </div>
  );
}

export default MainScreen;
