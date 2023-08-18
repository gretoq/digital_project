import './App.scss';

import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header';
import { ContactsPage } from './pages/ContactsPage';
import { GalleryPage } from './pages/GalleryPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { SertificatsPage } from './pages/SertificatsPage';

function App() {
  return (
    <div className="app">
      <main className="main">
        <Header />

        <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/sertificats" element={<SertificatsPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>

        {/* <Footer /> */}
      </main>
    </div>
  );
}

export default App;