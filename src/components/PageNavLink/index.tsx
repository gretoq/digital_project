import './PageNavLink.scss';

import classNames from 'classnames';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string;
  text: string;
}

export const PageNavLink: React.FC<Props> = ({ to, text }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      classNames('navbar-item', { 'is-active': isActive })
    }
  >
    {text}
  </NavLink>
);
