import { useState, useEffect } from "react";
import Header from "./componets/header/header";
import Main from "./componets/main/main";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme !== null ? JSON.parse(savedTheme) : "light";
  });
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  const changeTheme = () => {
    setTheme(prevTheme => prevTheme === "light" ? "dark" : "light" )
  };

  const [countBasket, setCountBasket] = useState(() => {
    const savedCount = localStorage.getItem("countBasket");
    return savedCount !== null ? JSON.parse(savedCount) : 0;
  });
  const [countStar, setCountStar] = useState(() => {
    const savedCount = localStorage.getItem("countStar");
    return savedCount !== null ? JSON.parse(savedCount) : 0;
  });
  useEffect(() => {
    localStorage.setItem("countBasket", JSON.stringify(countBasket));
  }, [countBasket]);

  const increaseCountBasket = () => {
    setCountBasket((prevCount) => prevCount + 1);
  };
  useEffect(() => {
    localStorage.setItem("countStar", JSON.stringify(countStar));
  }, [countStar]);
  const increaseCountStar = () => {
    setCountStar((prevCount) => prevCount + 1);
  };
  const decreaseCountStar = () => {
    setCountStar((prevCount) => prevCount - 1);
  };
  return (
    <>
      <Header
        countBasket={countBasket}
        countStar={countStar}
        changeTheme={changeTheme}
        theme={theme}
      ></Header>
      <Main
        decreaseCountStar={decreaseCountStar}
        increaseCountBasket={increaseCountBasket}
        increaseCountStar={increaseCountStar}
        theme={theme}
      ></Main>
    </>
  );
}

export default App;
