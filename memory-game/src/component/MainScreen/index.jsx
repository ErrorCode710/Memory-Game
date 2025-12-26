import Card from "../card";
import { characters } from "../../data/character";
import styles from "../../styles/mainScreen.module.css";
import { useEffect, useState } from "react";
import randomCard from "../../utils/utils";

function MainScreen() {
  // HOOKS
  const [charName, setCharName] = useState();
  const [clicked, setClicked] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [currentScore, setCurrentScore] = useState(0);

  const [cards, setCards] = useState(() => randomCard(characters));

  // EFFECT

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

    setCards(randomCard(characters));
  };

  // Render Logic

  return (
    <div>
      <div className={styles["card-container"]}>
        {cards.map((char) => {
          return (
            <Card
              key={char.id}
              img={char.img}
              name={char.name}
              onClick={() => handleClick(char.id)}
              isCliked={clicked}
            ></Card>
          );
        })}
      </div>
      <h4>{currentScore}</h4>
      <h4>{highScore}</h4>
    </div>
  );
}

export default MainScreen;
