import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import techNativeAcademyLogo from '../assets/WhiteTextAcademy_logo_transparent_background.png'
import heroImage from '../assets/AdobeStock_594275471.jpeg'
import academyBgImage from '../assets/AdobeStock_397986008.jpeg'
import '../styles/dynamic-effects.css'
import HubSpotForm from './HubSpotForm'

// Course tile images
import westSussexSoftwareDevImage from '../assets/AdobeStock_447707088.jpeg'
import eastSussexDataAnalyticsImage from '../assets/AdobeStock_715435848.jpeg'
import aiForBusinessImage from '../assets/AdobeStock_817016553.jpeg'
import aimiAIVideoProductionImage from '../assets/AdobeStock_508464473.jpeg'
import latestTVStudioVideoProductionImage from '../assets/AdobeStock_629572803.jpeg'

// Partner logos
import aimiAcademyLogo from '../assets/partners/duncan-thomsen.png'
import latestTVLogo from '../assets/partners/latest-tv.jpeg'
import aiPotentialLogo from '../assets/partners/ai-potential.jpeg'
import datakoveLogo from '../assets/partners/datacove.avif'
import petef90Logo from '../assets/partners/pete-f90.png'

// Funding Modal Component
const FundingModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white/95 backdrop-blur-md rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold text-gray-900 flex items-center">
              <span className="mr-2">💡</span>
              Funding Details
            </h3>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Eligibility & Coverage:</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• <strong>Anyone over 19+</strong> can apply - whether you are working, unemployed, freelance, or self-employed</li>
                <li>• <strong>Fully funded</strong> for eligible learners living or working in the listed local authority</li>
                <li>• <strong>Worth over £4000</strong> per place</li>
                <li>• If you live or work in the funded local authority, you will be able to apply for a funded place on the programme</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Employer Contributions:</h4>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• <strong>10% employer contribution</strong> for SMEs (Small & Medium Enterprises)</li>
                <li>• <strong>30% employer contribution</strong> for large companies</li>
              </ul>
            </div>
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Not sure about eligibility?</strong> Get in touch with us and we'll help determine if you qualify for funding.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const [isFundingModalOpen, setIsFundingModalOpen] = useState(false);

  const openFundingModal = () => setIsFundingModalOpen(true);
  const closeFundingModal = () => setIsFundingModalOpen(false);
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Dynamic Effects */}
      <div className="relative animated-gradient text-white overflow-hidden particle-bg">
        <div className="absolute inset-0 bg-black/40 geometric-overlay-subtle"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 duotone-blue-yellow"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Rewrite the rules.<br />
              Build your future.<br />
              <span className="text-yellow-400">Change the game.</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100">
              Employer-led digital skills bootcamps that fast-track you into real tech careers. 
              Learn from industry experts, work on live projects, and land your dream job.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/apply" 
                className="inline-block bg-gradient-to-r from-yellow-400 to-pink-500 text-black px-8 py-4 rounded-full text-lg font-bold hover:from-yellow-300 hover:to-pink-400 transition-all duration-200 transform hover:scale-105 neon-glow"
              >
                I'm a Learner - Start My Journey
              </Link>
              <a 
                href="#bootcamps" 
                className="inline-block bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-white/30 transition-all duration-200 card-hover-effect"
              >
                I'm an Employer - Hire Talent
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* TechNative Academy Section */}
      <div className="py-16 bg-gray-900 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${academyBgImage})` }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="mb-8">
            <img 
              src={techNativeAcademyLogo} 
              alt="TechNative Academy" 
              className="h-24 mx-auto mb-6"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Welcome to TechNative Academy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our bootcamps are more than training—they're part of a bold, employer-backed movement to build real skills and launch real careers in tech and digital.
            </p>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mt-4">
              Each programme is co-designed with industry pros who know what it takes to succeed, offering hands-on, work-like experiences that reflect the realities of modern tech roles. Whether you're employed, self-employed, freelancing or job-seeking—if you're 19 or over, you could qualify for one of our fully funded opportunities.
            </p>
            <div className="bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg p-6 max-w-4xl mx-auto mt-6 border border-green-400/30">
              <p className="text-lg text-gray-200 text-center mb-3">
                Each course is worth over £4,000 but can be accessed <span className="font-bold text-green-400">FREE</span> for eligible learners.
              </p>
              <p className="text-base text-gray-300 text-center">
                <span className="font-medium">Eligibility:</span> Over 19 years old and living or working in the funded local authority listed on each course tile.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bootcamps Section */}
      <div id="bootcamps" className="py-20 bg-gray-100 geometric-overlay">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose Your <span className="text-yellow-500">Digital Future</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Six cutting-edge bootcamps designed with industry partners to get you job-ready in high-demand digital skills.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Software Development */}
            <Link 
              to="/course/software-development" 
              className="block bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="relative h-48 geometric-overlay-subtle">
                <img 
                  src={westSussexSoftwareDevImage} 
                  alt="Software Development" 
                  className="w-full h-full object-cover duotone-blue-yellow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Software Development - Tech Finishing School</h3>
                  <div className="inline-block bg-blue-600 text-white text-xs font-medium px-2 py-0.5 rounded-full mt-1">West Sussex</div>
                </div>
                <div className="absolute top-2 right-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      openFundingModal();
                    }}
                    className="bg-white rounded-full w-6 h-6 flex items-center justify-center cursor-pointer text-blue-600 shadow-md hover:shadow-lg transition-shadow duration-200"
                    aria-label="View funding details"
                  >
                    <span className="text-sm font-bold">ℹ️</span>
                  </button>
                </div>
              </div>
              <div className="p-6 relative z-10">
                <p className="text-gray-700 mb-3">
                  Designed for those with some coding experience, this comprehensive software development bootcamp in West Sussex helps you sharpen your skills and get job-ready. Master full-stack development with React, Node.js, and PostgreSQL. Build REST APIs, deploy real-world apps, and collaborate using GitHub workflows and Agile sprints — all while working on live client projects in Brighton's thriving tech scene.
                </p>
                <div className="text-sm text-gray-600 mb-3">
                  <span className="font-medium">Live Online · 12 Weeks · Funded & Paid Places Available</span>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-yellow-500">12 weeks</span>
                    <span className="text-sm text-gray-500">Next cohort starts: 15 September 2025</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <span 
                    className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-200"
                  >
                    Learn More & Apply
                  </span>
                </div>
              </div>
            </Link>

            {/* East Sussex Data Analytics */}
            <Link 
              to="/course/east-sussex-data-analytics" 
              className="block bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="relative h-48 geometric-overlay-subtle">
                <img 
                  src={eastSussexDataAnalyticsImage} 
                  alt="East Sussex Data Analytics" 
                  className="w-full h-full object-cover duotone-pink-cyan"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Data Analytics</h3>
                  <div className="inline-block bg-pink-600 text-white text-xs font-medium px-2 py-0.5 rounded-full mt-1">East Sussex</div>
                </div>
                <div className="absolute top-2 right-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      openFundingModal();
                    }}
                    className="bg-white rounded-full w-6 h-6 flex items-center justify-center cursor-pointer text-pink-600 shadow-md hover:shadow-lg transition-shadow duration-200"
                    aria-label="View funding details"
                  >
                    <span className="text-sm font-bold">ℹ️</span>
                  </button>
                </div>
              </div>
              <div className="p-6 relative z-10">
                <p className="text-gray-700 mb-3">
                  Transform data into actionable business insights with our comprehensive data analytics bootcamp in East Sussex. Master Python, SQL, and advanced analytics tools including Tableau and Power BI. Work with real datasets from Brighton-based industry partners and learn to drive data-driven decision making in today's competitive market.
                </p>
                <div className="text-sm text-gray-600 mb-3">
                  <span className="font-medium">Live Online · 12 Weeks · Funded & Paid Places Available</span>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-pink-500">12 weeks</span>
                    <span className="text-sm text-gray-500">Next cohort starts: 15 September 2025</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <span 
                    className="bg-gradient-to-r from-pink-500 to-red-600 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-red-700 transition-all duration-200"
                  >
                    Learn More & Apply
                  </span>
                </div>
              </div>
            </Link>

            {/* AI for Business */}
            <Link 
              to="/course/artificial-intelligence" 
              className="block bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="relative h-48 geometric-overlay-subtle">
                <img 
                  src={aiForBusinessImage} 
                  alt="AI for Business" 
                  className="w-full h-full object-cover duotone-yellow-purple"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">AI for Business</h3>
                  <div className="inline-block bg-purple-600 text-white text-xs font-medium px-2 py-0.5 rounded-full mt-1">Multi-location</div>
                </div>
                <div className="absolute top-2 right-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      openFundingModal();
                    }}
                    className="bg-white rounded-full w-6 h-6 flex items-center justify-center cursor-pointer text-purple-600 shadow-md hover:shadow-lg transition-shadow duration-200"
                    aria-label="View funding details"
                  >
                    <span className="text-sm font-bold">ℹ️</span>
                  </button>
                </div>
              </div>
              <div className="p-6 relative z-10">
                <p className="text-gray-700 mb-3">
                  Harness the power of artificial intelligence and machine learning for business applications across Brighton and Sussex. Learn to implement AI solutions that drive real results, from automation to predictive analytics. Master cutting-edge AI tools and techniques with hands-on projects designed by industry experts.
                </p>
                <div className="text-sm text-gray-600 mb-3">
                  <span className="font-medium">Live Online · 12 Weeks · Funded & Paid Places Available</span>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-purple-500">12 weeks</span>
                    <span className="text-sm text-gray-500">Next cohort starts: 15 September 2025</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <span 
                    className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-indigo-700 transition-all duration-200"
                  >
                    Learn More & Apply
                  </span>
                </div>
              </div>
            </Link>
            {/* AI Video Production */}
            <Link 
              to="/course/aimi-ai-video-production" 
              className="block bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="relative h-48 geometric-overlay-subtle">
                <img 
                  src={aimiAIVideoProductionImage} 
                  alt="AI Video Production" 
                  className="w-full h-full object-cover duotone-blue-yellow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">AI Video Production</h3>
                  <div className="inline-block bg-cyan-600 text-white text-xs font-medium px-2 py-0.5 rounded-full mt-1">AIMI Partnership</div>
                </div>
                <div className="absolute top-2 right-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      openFundingModal();
                    }}
                    className="bg-white rounded-full w-6 h-6 flex items-center justify-center cursor-pointer text-cyan-600 shadow-md hover:shadow-lg transition-shadow duration-200"
                    aria-label="View funding details"
                  >
                    <span className="text-sm font-bold">ℹ️</span>
                  </button>
                </div>
              </div>
              <div className="p-6 relative z-10">
                <p className="text-gray-700 mb-3">
                  Create cutting-edge video content using AI tools and techniques in Brighton's creative quarter. Master the future of digital media production with hands-on training in AI-powered video editing, automated content creation, and intelligent post-production workflows. Learn from industry professionals at the forefront of AI video innovation.
                </p>
                <div className="text-sm text-gray-600 mb-3">
                  <span className="font-medium">Live Online · 12 Weeks · Funded & Paid Places Available</span>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-cyan-500">12 weeks</span>
                    <span className="text-sm text-gray-500">Next cohort starts: 15 September 2025</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <span 
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                  >
                    Learn More & Apply
                  </span>
                </div>
              </div>
            </Link>

            {/* Studio Video Production */}
            <Link 
              to="/course/latest-tv-video-production" 
              className="block bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="relative h-48 geometric-overlay-subtle">
                <img 
                  src={latestTVStudioVideoProductionImage} 
                  alt="Studio Video Production" 
                  className="w-full h-full object-cover duotone-pink-cyan"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Digital Video - Streaming and Marketing Content Production</h3>
                  <div className="inline-block bg-red-600 text-white text-xs font-medium px-2 py-0.5 rounded-full mt-1">Latest TV Partnership</div>
                </div>
                <div className="absolute top-2 right-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      openFundingModal();
                    }}
                    className="bg-white rounded-full w-6 h-6 flex items-center justify-center cursor-pointer text-red-600 shadow-md hover:shadow-lg transition-shadow duration-200"
                    aria-label="View funding details"
                  >
                    <span className="text-sm font-bold">ℹ️</span>
                  </button>
                </div>
              </div>
              <div className="p-6 relative z-10">
                <p className="text-gray-700 mb-3">
                  Professional video production training in a real TV studio environment in Brighton. Learn from industry professionals at Latest TV and master traditional video production techniques, studio operations, and broadcast-quality content creation. Perfect for aspiring filmmakers and content creators in Sussex's growing media industry.
                </p>
                <div className="text-sm text-gray-600 mb-3">
                  <span className="font-medium">Live Online · 12 Weeks · Funded & Paid Places Available</span>
                </div>
                <div className="mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-red-500">12 weeks</span>
                    <span className="text-sm text-gray-500">Next cohort starts: 15 September 2025</span>
                  </div>
                </div>
                <div className="flex justify-center">
                  <span 
                    className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-6 py-2 rounded-full hover:from-red-600 hover:to-pink-700 transition-all duration-200"
                  >
                    Learn More & Apply
                  </span>
                </div>
              </div>
            </Link>

          </div>
        </div>
      </div>

      {/* 2025-26 Bootcamp Offer */}
      <div className="py-16 bg-gradient-to-r from-purple-700 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Over 150 Funded Places Available Across Sussex
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-10">
              <div className="flex items-start text-left">
                <div className="flex-shrink-0 mr-4 text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-xl">Guaranteed interviews for jobseekers</p>
              </div>
              <div className="flex items-start text-left">
                <div className="flex-shrink-0 mr-4 text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-xl">Career progression opportunities for those in work</p>
              </div>
              <div className="flex items-start text-left">
                <div className="flex-shrink-0 mr-4 text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-xl">Support to grow your business for freelancers and the self-employed</p>
              </div>
              <div className="flex items-start text-left">
                <div className="flex-shrink-0 mr-4 text-green-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-xl">5 flexible bootcamp pathways to choose from</p>
              </div>
            </div>
            <p className="text-xl max-w-4xl mx-auto">
              All bootcamps are co-designed with employers to give you real, work-like experience and the skills the industry actually needs. If you're 19 or over—whether you're employed, self-employed, or seeking work—you could qualify.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            What Our <span className="text-yellow-500">Graduates and Partners Say</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-yellow-400 p-8 rounded-lg shadow-lg text-gray-900 relative">
              <div className="absolute top-4 left-4 text-6xl leading-none">"</div>
              <div className="absolute bottom-4 right-4 text-6xl leading-none">"</div>
              <p className="text-lg italic mb-6 relative z-10 pt-6">
                My favourite part of the whole experience has definitely been the projects. Collaboratively working on something from scratch and seeing it come to life has been really cool
              </p>
              <div className="w-16 h-1 bg-gray-900 mx-auto mb-4"></div>
              <p className="font-bold text-center">SUSANNAH - NOW EMPLOYED AS A JUNIOR DEVELOPER AT DABAPPS</p>
              <div className="flex justify-center mt-2">
                <span className="text-xl">★★★★★</span>
              </div>
            </div>
            
            <div className="bg-yellow-400 p-8 rounded-lg shadow-lg text-gray-900 relative">
              <div className="absolute top-4 left-4 text-6xl leading-none">"</div>
              <div className="absolute bottom-4 right-4 text-6xl leading-none">"</div>
              <p className="text-lg italic mb-6 relative z-10 pt-6">
                I've been programming for quite some time, but it was so good to ground out my experience, work on real life projects and gain soft skills and other competencies I hadn't covered before.
                
                I feel much more prepared for the job market now.
              </p>
              <div className="w-16 h-1 bg-gray-900 mx-auto mb-4"></div>
              <p className="font-bold text-center">NICO - NOW EMPLOYED AS A JUNIOR DEVELOPER AT CERTN</p>
              <div className="flex justify-center mt-2">
                <span className="text-xl">★★★★★</span>
              </div>
            </div>
            
            <div className="bg-yellow-400 p-8 rounded-lg shadow-lg text-gray-900 relative">
              <div className="absolute top-4 left-4 text-6xl leading-none">"</div>
              <div className="absolute bottom-4 right-4 text-6xl leading-none">"</div>
              <p className="text-lg italic mb-6 relative z-10 pt-6">
                I have no doubt that all of them will go on to get jobs in tech, which is brilliant. The hardest part was choosing who to employ as they were all so employable!
              </p>
              <div className="w-16 h-1 bg-gray-900 mx-auto mb-4"></div>
              <p className="font-bold text-center">CATRINA - MANAGING DIRECTOR AT DABAPPS - SPONSOR EMPLOYER</p>
              <div className="flex justify-center mt-2">
                <span className="text-xl">★★★★★</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Industry Partners */}
      <div className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Our <span className="text-blue-600">Industry Partners</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* AIMI Academy */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-yellow-500 hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex flex-col sm:flex-row items-center mb-4">
                  <a href="https://duncanthomsen.com/" target="_blank" rel="noopener noreferrer" className="mb-4 sm:mb-0 sm:mr-6">
                    <img src={aimiAcademyLogo} alt="AIMI Academy" className="h-16 object-contain" />
                  </a>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">🎥 AIMI Academy</h3>
                    <p className="text-gray-600 font-medium">Led by Duncan Thomsen</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  A trailblazer in AI-powered video, AIMI brings cutting-edge production skills from the world of advertising, streaming, and digital content. Duncan and his team are redefining what's possible in media training.
                </p>
              </div>
            </div>
            
            {/* Latest TV */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-red-500 hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex flex-col sm:flex-row items-center mb-4">
                  <a href="https://thelatest.co.uk/latest-tv/" target="_blank" rel="noopener noreferrer" className="mb-4 sm:mb-0 sm:mr-6">
                    <img src={latestTVLogo} alt="Latest TV" className="h-16 object-contain" />
                  </a>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">📺 Latest TV</h3>
                  </div>
                </div>
                <p className="text-gray-700">
                  Brighton's broadcast and streaming experts. Holding the Local TV license since 2013, Latest TV knows what it takes to produce for real platforms—from studio to screen.
                </p>
              </div>
            </div>
            
            {/* AI Potential */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-yellow-400 hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex flex-col sm:flex-row items-center mb-4">
                  <a href="https://simplerwith.ai/" target="_blank" rel="noopener noreferrer" className="mb-4 sm:mb-0 sm:mr-6">
                    <img src={aiPotentialLogo} alt="AI Potential" className="h-16 object-contain" />
                  </a>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">🤖 AI Potential</h3>
                  </div>
                </div>
                <p className="text-gray-700">
                  One of the UK's top AI consultancies, working with everyone from local SMEs to global brands like Mars. AI Potential brings real-world use cases into our AI Bootcamps.
                </p>
              </div>
            </div>
            
            {/* Datacove */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-blue-600 hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <div className="flex flex-col sm:flex-row items-center mb-4">
                  <a href="https://datacove.co.uk/" target="_blank" rel="noopener noreferrer" className="mb-4 sm:mb-0 sm:mr-6">
                    <img src={datakoveLogo} alt="Datacove" className="h-16 object-contain" />
                  </a>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">📊 Datacove</h3>
                  </div>
                </div>
                <p className="text-gray-700">
                  Data analytics leaders behind national Python and R communities—and the EARL Conference. They help learners build real data skills and join the UK's growing analytics sector.
                </p>
              </div>
            </div>
            
            {/* Pete Goodman */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-orange-500 hover:shadow-xl transition-shadow duration-300 md:col-span-2">
              <div className="p-6">
                <div className="flex flex-col sm:flex-row items-center mb-4">
                  <a href="https://f90.co.uk/" target="_blank" rel="noopener noreferrer" className="mb-4 sm:mb-0 sm:mr-6">
                    <img src={petef90Logo} alt="Pete Goodman F90" className="h-16 object-contain" />
                  </a>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">💻 Pete Goodman</h3>
                  </div>
                </div>
                <p className="text-gray-700">
                  Our lead tutor and 20+ year software veteran. Pete has already helped dozens of learners launch their careers through TechNative's bootcamps—and he's just getting started.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Events */}
      <div className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Upcoming <span className="text-yellow-500">Events</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">EVOLVE Tech Conference 2025</h3>
              <p className="text-gray-400 mb-4">Join industry leaders and TechNative alumni for a day of insights, networking, and innovation.</p>
              <p className="text-lg font-semibold text-yellow-400">Date: October 26, 2025</p>
              <p className="text-lg font-semibold text-yellow-400">Location: Brighton Centre</p>
              <button className="mt-4 bg-yellow-500 text-gray-900 px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-colors duration-200">Register Now</button>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">DigiFest Eastbourne</h3>
              <p className="text-gray-400 mb-4">A celebration of digital creativity and innovation in Eastbourne, featuring workshops and showcases.</p>
              <p className="text-lg font-semibold text-pink-400">Date: November 15, 2025</p>
              <p className="text-lg font-semibold text-pink-400">Location: Eastbourne Digital Hub</p>
              <button className="mt-4 bg-pink-500 text-white px-6 py-2 rounded-full font-bold hover:bg-pink-400 transition-colors duration-200">Learn More</button>
            </div>
          </div>
        </div>
      </div>

      {/* HubSpot Express Interest Form */}
      <HubSpotForm 
        title="Ready to Transform Your Career?"
        subtitle="Express your interest and take the first step towards your new future in tech. Our team will be in touch to discuss your options and answer any questions."
      />

      {/* Funding Modal */}
      <FundingModal isOpen={isFundingModalOpen} onClose={closeFundingModal} />
    </div>
  );
};

export default HomePage;


