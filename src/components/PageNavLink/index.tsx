import './PageNavLink.scss';

import classNames from 'classnames';
import React, { MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';

interface Props {
  to: string;
  text: string;
  footer?: boolean;
  onClick?: (to: string) => MouseEventHandler<HTMLAnchorElement> | undefined;
}

export const PageNavLink: React.FC<Props> = ({
  to,
  text,
  footer = false,
  onClick,
}) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      classNames(
        'navbar-item',
        { 'navbar-item--active': isActive && !footer },
        { 'navbar-item--footer': footer },
      )
    }
    onClick={onClick && onClick(to)}
  >
    {text}
  </NavLink>
);
