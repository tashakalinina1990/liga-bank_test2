import React from "react";
import "./Header.scss";
import { Routes } from "../../const";
import { ReactComponent as LogoSvg } from "./img/logo.svg";
import { ReactComponent as TitleSvg } from "./img/title.svg";
import { ReactComponent as LoginSvg } from "./img/login.svg";

const Header = () => {
  return (
    <header className="header__wrapper">
      <div className="header__main">
        <div className="header__container">
          <a className="header__logo" href={Routes.HOME}>
            <LogoSvg className="header__logo-svg" />
            <TitleSvg className="header__title-svg" />
          </a>
          <nav className="header__nav">
            <ul className="header__menu">
              <li className="header__menu-item">
                <a className="header__link" href={Routes.ERROR404}>
                  <p>Услуги</p>
                </a>
              </li>
              <li className="header__menu-item">
                <a className="header__link" href={Routes.ERROR404}>
                  <p>Рассчитать кредит</p>
                </a>
              </li>
              <li className="header__menu-item">
                <a
                  className="header__link header__link-current"
                  href={Routes.HOME}
                >
                  <p>Конвертер валют</p>
                </a>
              </li>
              <li className="header__menu-item">
                <a className="header__link" href={Routes.ERROR404}>
                  <p>Контакты</p>
                </a>
              </li>
              <li className="header__menu-item">
                <a className="header__link" href={Routes.ERROR404}>
                  <p>Задать вопрос</p>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <a className="header__login-internet-bank" href={Routes.ERROR404}>
          <LoginSvg className="header__login-svg" />
          <p>Войти в Интернет-банк</p>
        </a>
      </div>
    </header>
  );
};

export default Header;
