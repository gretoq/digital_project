import './Header.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';

import { PageNavLink } from '../PageNavLink';

export const Header = () => {
  return (
    <header className="nav-bar">
      <div className="grid nav-bar__container">
        <NavLink className="nav-bar__logo grid__item--desktop-1-1" to="/">
          <img src="/logo/logo.svg" alt="logo" />
        </NavLink>

        <nav className="nav-bar__naviganiton navigation grid__item--desktop-5-11">
          <ul className="navigation__list">
            <li className="navigation__item">
              <PageNavLink to="/" text="Главная" />
            </li>
            <li className="navigation__item">
              <PageNavLink to="/gallery" text="Галерея" />
            </li>
            <li className="navigation__item">
              <PageNavLink to="/projects" text="Проекты" />
            </li>
            <li className="navigation__item">
              <PageNavLink to="/sertificats" text="Сертификаты" />
            </li>
            <li className="navigation__item">
              <PageNavLink to="/contacts" text="Контакти" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
