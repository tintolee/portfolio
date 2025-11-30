import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/layout/Layout';
const Home = lazy(() => import(/* webpackChunkName: "home" */ './pages/Home'));
const About = lazy(() => import(/* webpackChunkName: "about" */ './pages/About'));
const Projects = lazy(() => import(/* webpackChunkName: "projects" */ './pages/Projects'));
const Skills = lazy(() => import(/* webpackChunkName: "skills" */ './pages/Skills'));
const Experience = lazy(() => import(/* webpackChunkName: "experience" */ './pages/Experience'));
const Contact = lazy(() => import(/* webpackChunkName: "contact" */ './pages/Contact'));
const Writing = lazy(() => import(/* webpackChunkName: "writing" */ './pages/Writing'));
const NotFound = lazy(() => import(/* webpackChunkName: "not-found" */ './pages/NotFound'));

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<div className="pt-32 text-center text-sm text-brand-glow animate-pulse">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
