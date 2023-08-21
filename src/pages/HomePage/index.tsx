import './HomePage.scss';

import React from 'react';

import { AboutSection } from '../../components/AboutSection';
import { GoalsSection } from '../../components/GoalsSection';
import { ProjectCollection } from '../../components/ProjectCollection';
import { ProjectHome } from '../../components/ProjectHome';

export const HomePage = () => {
  return (
    <>
      <div style={{ marginBottom: '120px' }}>
        <ProjectHome />
      </div>

      <div style={{ marginBottom: '120px' }}>
        <AboutSection />
      </div>

      <div style={{ marginBottom: '120px' }}>
        <GoalsSection />
      </div>

      <div style={{ marginBottom: '120px' }}>
        <ProjectCollection />
      </div>
    </>
  );
};
