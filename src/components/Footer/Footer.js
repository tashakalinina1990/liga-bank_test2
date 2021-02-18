import React from "react";
import "./Footer.scss";
import { Routes } from "../../const";
import { ReactComponent as LogoSvg } from "./img/logo.svg";
import { ReactComponent as TitleSvg } from "./img/title.svg";
import { ReactComponent as PhoneSvg } from "./img/phone.svg";
import { ReactComponent as PhoneOldSvg } from "./img/phone_old.svg";
import { ReactComponent as FbSvg } from "./img/fb.svg";
import { ReactComponent as InstaSvg } from "./img/insta.svg";
import { ReactComponent as TwitSvg } from "./img/twit.svg";
import { ReactComponent as YoutubeSvg } from "./img/youtube.svg";

const Footer = () => {
  return (
    <footer className="footer__wrapper">
      <div className="footer__main">
        <div>
          <a className="footer__logo" href={Routes.HOME}>
            <LogoSvg className="footer__logo-svg" />
            <TitleSvg className="footer__title-svg" />
          </a>
          <p className="footer__adress">
            150015, г. Москва, ул. Московская, д. 32 Генеральная лицензия Банка
            России №1050
            <br />Ⓒ Лига Банк, 2019
          </p>
        </div>
        <div>
          <ul className="footer__menu">
            <li className="footer__menu-item">
              <a className="footer__item-link" href={Routes.ERROR404}>
                <p>Услуги</p>
              </a>
            </li>
            <li className="footer__menu-item">
              <a className="footer__item-link" href={Routes.ERROR404}>
                <p>Рассчитать кредит</p>
              </a>
            </li>
            <li className="footer__menu-item">
              <a className="footer__item-link" href={Routes.HOME}>
                <p>Конвертер валют</p>
              </a>
            </li>
            <li className="footer__menu-item">
              <a className="footer__item-link" href={Routes.ERROR404}>
                <p>Задать вопрос</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__tel-block">
          <PhoneSvg className="footer__tel-svg" />
          <div className="footer__tel-link">
            <a className="footer__tel" href="tel:*0904">
              *0904
            </a>
            <p className="footer__tel-text">
              Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2
            </p>
          </div>
        </div>
        <div className="footer__tel-block">
          <PhoneOldSvg className="footer__tel-old-svg" />
          <div className="footer__tel-link">
            <a className="footer__tel" href="tel:+78001112233">
              8 800 111 22 33
            </a>
            <p className="footer__tel-text footer__tel-text--small">
              Бесплатный для всех городов России
            </p>
          </div>
        </div>
        <div className="footer__social-block">
          <a className="footer__social" href={Routes.ERROR404}>
            <FbSvg className="footer__social-fb" />
          </a>
          <a className="footer__social" href={Routes.ERROR404}>
            <InstaSvg className=" footer__social-insta" />
          </a>
          <a className="footer__social" href={Routes.ERROR404}>
            <TwitSvg className="footer__social-twit" />
          </a>
          <a className="footer__social" href={Routes.ERROR404}>
            <YoutubeSvg className=" footer__social-youtube" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
