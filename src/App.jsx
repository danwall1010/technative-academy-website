import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navigation from './components/Navigation'
import HomePage from './components/HomePage'
import CoursePage from './components/CoursePage'
import ApplyPage from './components/ApplyPage'
import ProjectsPage from './components/ProjectsPage'
import BlogPage from './components/BlogPage'
import AboutPage from './components/pages/AboutPage'
import FundingPage from './components/pages/FundingPage'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/course/:courseId" element={<CoursePage />} />
            <Route path="/apply" element={<ApplyPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/funding" element={<FundingPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App

