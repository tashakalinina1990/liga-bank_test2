import React from "react";
import cn from "classnames";
import s from "./Error404.module.scss";
import { Routes } from "../../const";
import { ReactComponent as LogoSvg } from "./img/logo.svg";
import { ReactComponent as TitleSvg } from "./img/title.svg";

const Error404 = () => {
  return (
    <div className={cn(s.root)}>
      <a className={cn(s.logo)} href={Routes.HOME}>
        <LogoSvg className={cn(s.svg)} />
        <TitleSvg />
      </a>
      <p>Page not found</p>
    </div>
  );
};

export default Error404;
