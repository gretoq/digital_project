import './FooterSocial.scss';

import React from 'react';

import { socialData } from '../../utils/constants';

export const FooterSocial = () => (
  <div className="footer-social">
    <h4 className="footer-social__title">Социальные сети</h4>

    <ul className="footer-social__content">
      {socialData.map(({ title, link, icon }) => {
        return (
          <li className="footer-social__item" key={link}>
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              aria-label={`иконка ${title}`}
            >
              <span className="footer-social__icon">{icon}</span>
            </a>
          </li>
        );
      })}
    </ul>
  </div>
);
