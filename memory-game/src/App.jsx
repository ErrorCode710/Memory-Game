import MainScreen from "./component/MainScreen";
import Header from "./component/header";
import "./styles/global.css";
import { characters } from "./data/character";
import Loader from "./component/Loader";
import { useEffect, useState } from "react";

const preloadImages = (images) =>
  Promise.all(
    images.map(
      (src) =>
        new Promise((resolve) => {
          const img = new Image();
          img.src = src;
          img.onload = resolve;
          img.onerror = resolve; // don't hang if one fails
        })
    )
  );

function App() {
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   async function preloadAssets() {
  //     const images = characters.map((c) => c.img);

  //     await Promise.all([preloadImages(images)]);
  //     setLoading(true);

  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 5000);
  //   }

  //   preloadAssets();
  // }, []);
  return (
    <>
      <MainScreen></MainScreen>
    </>
  );

  // if (loading) {
  //   return <Loader />;
  // }

  // return <MainScreen />;
}

export default App;
