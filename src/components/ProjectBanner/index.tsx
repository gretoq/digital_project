import './ProjectBanner.scss';

import React from 'react';

import { CustomButton } from '../CustomButton';

export const ProjectBanner = () => {
  return (
    <article className="project-banner grid__item--desktop-5-12">
      <CustomButton text="Взглянуть" isBanner isWithoutBorder />
    </article>
  );
};
