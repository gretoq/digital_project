import './HomePage.scss';

import React from 'react';

import { AboutSection } from '../../components/AboutSection';
import { ContactUs } from '../../components/ContactUs';
import { GoalsSection } from '../../components/GoalsSection';
import { ProjectCollection } from '../../components/ProjectCollection';
import { ProjectHome } from '../../components/ProjectHome';

export const HomePage = () => (
  <div className="home-page">
    <section className="home-page__section">
      <ProjectHome />
    </section>

    <section className="home-page__section">
      <AboutSection />
    </section>

    <section className="home-page__section">
      <GoalsSection />
    </section>

    <section className="home-page__section">
      <ProjectCollection />
    </section>

    <section className="home-page__section">
      <ContactUs />
    </section>
  </div>
);
