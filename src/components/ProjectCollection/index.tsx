import './ProjectCollection.scss';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { projects } from '../../utils/constants/index';
import { CustomButton } from '../CustomButton';
import { ProjectCard } from '../ProjectCard';

export const ProjectCollection = () => {
  const navigation = useNavigate();

  const handleClick = () => {
    navigation('/projects');
  };

  return (
    <div className="project-collection">
      <h3 className="project-collection__title">Наши проекты</h3>

      <div className="project-collection__container">
        <div className="project-collection__first-row grid">
          <div className="grid__item--desktop-1-6">
            <ProjectCard projectData={projects[0]} />
          </div>

          <div className="grid__item--desktop-7-12">
            <ProjectCard projectData={projects[1]} />
          </div>
        </div>

        <div className="project-collection__second-row grid">
          <div className="grid__item--desktop-1-3">
            <ProjectCard projectData={projects[2]} />
          </div>

          <div className="grid__item--desktop-4-8">
            <ProjectCard projectData={projects[3]} />
          </div>

          <div className="grid__item--desktop-9-12">
            <ProjectCard projectData={projects[4]} />
          </div>
        </div>
      </div>

      <div className="project-collection__button">
        <CustomButton
          text="все проекты"
          isWithoutBorder
          dark
          onClick={handleClick}
        />
      </div>
    </div>
  );
};
