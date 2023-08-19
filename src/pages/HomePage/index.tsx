import './HomePage.scss';

import React from 'react';

import { AboutSection } from '../../components/AboutSection';
import { ProjectHome } from '../../components/ProjectHome';

export const HomePage = () => {
  return (
    <>
      <div style={{ marginBottom: '120px' }}>
        <ProjectHome />
      </div>

      <AboutSection />
    </>
  );
};
