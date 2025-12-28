import MainScreen from "./component/MainScreen";
import Header from "./component/header";
import "./styles/global.css";
import { characters } from "./data/character";
import Loader from "./component/Loader";
import { useEffect, useState } from "react";

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
