import './AboutSection.scss';

import React from 'react';

import { CustomButton } from '../CustomButton';

export const AboutSection = () => {
  return (
    <div className="about-section grid">
      <div className="about-section__double-photo-container grid__item--desktop-2-4">
        <img
          src="images/about/building_mini.svg"
          alt="building"
          className="about-section__double-photo-container--bigger"
        />

        <img
          src="images/about/building_mini_smaller.svg"
          alt="building"
          className="about-section__double-photo-container--smaller"
        />
      </div>

      <div className="about-section__single-photo-container grid__item--desktop-5-7">
        <img
          src="images/about/building_main.svg"
          alt="building"
          className="about-section__single-photo-container--smaller"
        />
      </div>

      <div className="about-section__descrition-container grid__item--desktop-8-12">
        <h2 className="about-section__title">О компании</h2>
        <p className="about-section__description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry&apos;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. It has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>

        <CustomButton text="Читать" isWithoutBorder />
      </div>
    </div>
  );
};
