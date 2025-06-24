import React from 'react'
import { Link } from 'react-router-dom'

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Projects & <span className="text-yellow-400">Other Work</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Beyond bootcamps, TechNative Digital leads transformative digital skills initiatives across Sussex and beyond. 
              Discover our broader impact in shaping the future of digital talent.
            </p>
          </div>
        </div>
      </section>

      {/* Digital Futures Accelerator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Digital Futures Accelerator
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                The Digital Futures Accelerator is our flagship programme supporting high-growth digital businesses 
                across Sussex. We provide intensive mentoring, networking opportunities, and access to funding to 
                help innovative companies scale rapidly.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Business Acceleration</h3>
                    <p className="text-gray-600">12-month intensive programme for scaling digital businesses</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Expert Mentoring</h3>
                    <p className="text-gray-600">Access to industry leaders and successful entrepreneurs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Funding Connections</h3>
                    <p className="text-gray-600">Direct access to investors and funding opportunities</p>
                  </div>
                </div>
              </div>
              <a 
                href="https://www.digitalfuturessussex.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Visit Digital Futures Sussex
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-700 mb-4">Businesses Accelerated</div>
                <div className="text-4xl font-bold text-purple-600 mb-2">£2.5M+</div>
                <div className="text-gray-700 mb-4">Funding Secured</div>
                <div className="text-4xl font-bold text-pink-600 mb-2">200+</div>
                <div className="text-gray-700">Jobs Created</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Skills Sussex Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-8 rounded-2xl">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Skills Improvement Plan</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-3xl font-bold text-yellow-600 mb-1">15,000+</div>
                    <div className="text-gray-700">People Reached</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-orange-600 mb-1">100+</div>
                    <div className="text-gray-700">Partner Organizations</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-600 mb-1">25+</div>
                    <div className="text-gray-700">Skills Programmes</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Future Skills Sussex
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                As the lead delivery partner for Digital Skills in the Local Skills Improvement Plan, 
                we're transforming how Sussex approaches digital skills development. Our comprehensive 
                strategy addresses skills gaps across all sectors and career stages.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Strategic Planning</h3>
                    <p className="text-gray-600">County-wide digital skills strategy and implementation</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Partnership Development</h3>
                    <p className="text-gray-600">Building networks between employers, educators, and learners</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-6 h-6 bg-yellow-600 rounded-full flex items-center justify-center mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-semibold text-gray-900">Programme Delivery</h3>
                    <p className="text-gray-600">Direct delivery of skills programmes across Sussex</p>
                  </div>
                </div>
              </div>
              <a 
                href="https://www.futureskillssussex.co.uk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
              >
                Visit Future Skills Sussex
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Projects Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional Projects & Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to digital transformation extends across multiple sectors and communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Corporate Training */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Corporate Training</h3>
              <p className="text-gray-700 mb-4">
                Bespoke digital skills training programmes for large organizations, helping teams 
                adapt to new technologies and improve productivity.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Custom curriculum development</li>
                <li>• On-site and remote delivery</li>
                <li>• Skills assessment and certification</li>
              </ul>
            </div>

            {/* Community Outreach */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-6 rounded-xl">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Outreach</h3>
              <p className="text-gray-700 mb-4">
                Digital inclusion programmes targeting underrepresented communities and those 
                facing barriers to digital participation.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Digital literacy workshops</li>
                <li>• Accessibility-focused training</li>
                <li>• Community partnership programmes</li>
              </ul>
            </div>

            {/* Research & Innovation */}
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-6 rounded-xl">
              <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Research & Innovation</h3>
              <p className="text-gray-700 mb-4">
                Collaborative research projects exploring the future of digital skills and 
                innovative approaches to technology education.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Skills gap analysis</li>
                <li>• Emerging technology research</li>
                <li>• Educational methodology development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Partner with TechNative Digital
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Whether you're looking to accelerate your business, develop your workforce, or 
            transform your community's digital capabilities, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/apply" 
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
            </Link>
            <a 
              href="mailto:hello@technativedigital.com" 
              className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProjectsPage

