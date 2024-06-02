import React from "react";
import PropTypes from "prop-types";
import s from "./main.module.scss";
import { useState, useEffect } from "react";
import MainItems from "./mainItems/mainItems";
const Main = ({
  increaseCountBasket,
  increaseCountStar,
  decreaseCountStar,
  theme,
}) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className={s.main}>
      <div className={s.main__grid}>
        {products &&
          products.map((el) => {
            return (
              <MainItems
                decreaseCountStar={decreaseCountStar}
                starClick={increaseCountStar}
                firstClick={increaseCountBasket}
                key={el.id}
                items={el}
                className={`${s.main__grid__item} ${
                  theme === "light" ? s.light : s.dark
                }`}
                theme={theme}
              ></MainItems>
            );
          })}
      </div>
    </div>
  );
};

Main.propTypes = {
  increaseCountBasket: PropTypes.func.isRequired,
  increaseCountStar: PropTypes.func.isRequired,
  decreaseCountStar: PropTypes.func.isRequired,
};

export default Main;
