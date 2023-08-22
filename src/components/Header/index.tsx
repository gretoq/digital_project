import './Header.scss';

import React from 'react';
import { NavLink } from 'react-router-dom';

import { navigationPaths } from '../../utils/constants';
import { PageNavLink } from '../PageNavLink';

export const Header = () => {
  return (
    <header className="nav-bar">
      <div className="grid nav-bar__container">
        <NavLink className="nav-bar__link grid__item--desktop-1-1" to="/">
          <img src="/logo/logo.svg" alt="logo" className="nav-bar__logo" />
        </NavLink>

        <nav className="nav-bar__naviganiton navigation grid__item--desktop-5-11">
          <ul className="navigation__list">
            {navigationPaths.map(({ title, path }) => {
              return (
                <li className="navigation__item" key={path}>
                  <PageNavLink to={path} text={title} />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
};
