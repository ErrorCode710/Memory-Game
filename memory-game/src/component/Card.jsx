import style from "../styles/card.module.css";
import Tilt from "react-parallax-tilt";

function Card({ img, name, onClick, flipped }) {
  const [first, second = ""] = name.split(" ");
  // const [flipped, setFlipped] = useState(false);

  // const handleFlip = () => {
  //   setFlipped(true);
  //   onClick();
  //   setTimeout(() => setFlipped(false), 600); // reset flip after animation
  // };

  return (
    <div className={`${style.cardWrapper} ${flipped ? style.cardWrapperFlipped : ""}`} onClick={onClick}>
      <Tilt
        glareEnable={true}
        glareMaxOpacity={0.6}
        glareColor="#ffffffff"
        glarePosition="bottom"
        glareBorderRadius="20px"
        style={{ width: "220px", height: "420px" }}
      >
        <div className={style.card}>
          <div className={style.cardFront}>
            <img src={img}></img>
            <h4 className="card-label">
              {first}
              <br />
              {second}
            </h4>
          </div>
          <div className={style.cardBack}></div>
        </div>
      </Tilt>
    </div>
  );
}

export default Card;
