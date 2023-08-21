import './ProjectCard.scss';

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { IProjectData } from '../../types';
import { CustomButton } from '../CustomButton';

interface Props {
  projectData: IProjectData;
}

export const ProjectCard: React.FC<Props> = ({ projectData }) => {
  const { image, title, link } = projectData;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <article className="project-card">
      <img className="project-card__image" src={image} alt={title} />

      <div className="project-card--hover">
        <div className="project-card__hover-container">
          <h4 className="project-card__title">{title}</h4>
          <div className="project-card__button">
            <CustomButton text="Подробнее" ghost onClick={handleClick} />
          </div>
        </div>
      </div>
    </article>
  );
};
