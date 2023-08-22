import './ProjectHome.scss';

import React from 'react';

import { ProjectBanner } from '../ProjectBanner';
import { ProjectController } from '../ProjectController';

export const ProjectHome = () => (
  <div className="project-home grid">
    <ProjectController />

    <ProjectBanner />
  </div>
);
