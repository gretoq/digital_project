import './FooterContacts.scss';

import React from 'react';
import { FiPhone } from 'react-icons/fi';
import { IoLocationOutline } from 'react-icons/io5';
import { TiMail } from 'react-icons/ti';

export const FooterContacts = () => (
  <div className="footer-contacts">
    <h4 className="footer-contacts__title">Контакты</h4>

    <ul className="footer-contacts__list">
      <li className="footer-contacts__item">
        <IoLocationOutline className="footer-contacts__icon" />

        <a
          href="https://www.google.com/maps/place/100000,+Республика+Казахстан,+г.+Караганда,+ул.+Телевизионная+10"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-contacts__item-description footer-contacts__link"
        >
          100000, Республика Казахстан, г. Караганда, ул. Телевизионная 10
        </a>
      </li>

      <li className="footer-contacts__item">
        <FiPhone className="footer-contacts__icon" />

        <a href="tel:+380000000000" className="footer-contacts__link">
          +38 (000) 000 00 00
        </a>
      </li>

      <li className="footer-contacts__item">
        <TiMail className="footer-contacts__icon" />

        <a href="mailto:mail@gmail.com" className="footer-contacts__link">
          mail@gmail.com
        </a>
      </li>
    </ul>
  </div>
);
