import './FooterInformation.scss';

import React from 'react';
import { useLocation } from 'react-router-dom';

import { navigationPaths } from '../../utils/constants';
import { PageNavLink } from '../PageNavLink';

export const FooterInformation = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  const handleNavClick = (to: string) =>
    location.pathname === to ? scrollToTop : undefined;

  return (
    <div className="form-information">
      <h4 className="form-information__title">Информация</h4>

      <ul className="form-information__list">
        {navigationPaths.map(({ title, path }) => {
          return (
            <li className="form-information__item" key={path}>
              <PageNavLink
                to={path}
                text={title}
                onClick={handleNavClick}
                footer
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
