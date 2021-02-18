import React from "react";
import "./Hero.scss";
import { Routes } from "../../const";
import WhiteCard from "./img/white_card.png";
import BlackCard from "./img/black_card.png";

const Hero = () => {
  return (
    <section className="hero__wrapper">
      <div className="hero__main">
        <div className="hero__center">
          <div className="hero__left_border"></div>
          <div className="hero__right_border"></div>
          <img
            className="hero__white_card"
            src={WhiteCard}
            width="335px"
            height="228px"
            alt="Card"
          />
          <img
            className="hero__black_card"
            src={BlackCard}
            width="335px"
            height="228px"
            alt="Card"
          />
          <p className="hero__caption">Лига Банк</p>
          <p className="hero__text">Кредиты на любой случай</p>
          <a className="hero__link" href={Routes.ERROR404}>
            <span>Рассчитать кредит</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
