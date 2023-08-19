import './ProjectController.scss';

import React from 'react';
import { FaSlash } from 'react-icons/fa';

import { CustomButton } from '../CustomButton';
export const ProjectController = () => {
  return (
    <article className="project-controller grid__item--desktop-1-4">
      <div className="project-controller__title-container">
        <span className="project-controller__title project-controller__title--light">
          Project
        </span>
        <span className="project-controller__title project-controller__title--dark">
          Home
        </span>
      </div>

      <div className="project-controller__controllers-container">
        <CustomButton isLeft={true} />
        <CustomButton />
      </div>

      <div className="project-controller__paging">
        <span className="project-controller__counter">1</span>
        <FaSlash className="project-controller__delimetr" />
        <span className="project-controller__counter">2</span>
      </div>
    </article>
  );
};
