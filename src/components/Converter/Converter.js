import React from "react";
import "./Converter.scss";
import Exchange from "../../components/Exchange/Exchange";
import ExchangeHistory from "../../components/ExchangeHistory/ExchangeHistory";

const Converter = () => {
  return (
    <section className="converter__wrapper">
      <div className="converter__main">
        <h1 className="converter__header">Конвертер валют</h1>
        <Exchange />
        <ExchangeHistory />
      </div>
    </section>
  );
};

export default Converter;
