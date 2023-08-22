import './Footer.scss';

import React from 'react';

import { FooterContacts } from '../FooterContacts';
import { FooterInformation } from '../FooterInformation';
import { FooterSocial } from '../FooterSocial';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__main-container">
        <img src="\logo\logo_footer.svg" alt="logo" className="footer__logo" />

        <div className="footer__information">
          <FooterInformation />
        </div>
        <div className="footer__contacts">
          <FooterContacts />
        </div>
        <div className="footer__social-media">
          <FooterSocial />
        </div>
      </div>
      <div className="footer__copyrights-container">
        <p className="footer__copyrights-title">
          © 2019 Digital Project. Все права защищены.
        </p>
      </div>
    </footer>
  );
};
