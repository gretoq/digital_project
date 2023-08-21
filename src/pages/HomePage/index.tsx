import './HomePage.scss';

import React from 'react';

import { AboutSection } from '../../components/AboutSection';
import { ContactUs } from '../../components/ContactUs';
import { GoalsSection } from '../../components/GoalsSection';
import { ProjectCollection } from '../../components/ProjectCollection';
import { ProjectHome } from '../../components/ProjectHome';

export const HomePage = () => {
  return (
    <>
      <section style={{ marginBottom: '120px' }}>
        <ProjectHome />
      </section>

      <section style={{ marginBottom: '120px' }}>
        <AboutSection />
      </section>

      <section style={{ marginBottom: '120px' }}>
        <GoalsSection />
      </section>

      <section style={{ marginBottom: '120px' }}>
        <ProjectCollection />
      </section>

      <section style={{ marginBottom: '120px' }}>
        <ContactUs />
      </section>
    </>
  );
};
