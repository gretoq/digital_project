import './App.scss';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ContactsPage } from './pages/ContactsPage';
import { GalleryPage } from './pages/GalleryPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SertificatsPage } from './pages/SertificatsPage';

function App() {
  return (
    <div className="app">
      <main className="app__main">
        <Header />

        <div className="app__content-container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/sertificats" element={<SertificatsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        <Footer />
      </main>
    </div>
  );
}

export default App;
