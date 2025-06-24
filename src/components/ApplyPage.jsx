import React from 'react'
import HubSpotForm from './HubSpotForm'
import techNativeAcademyLogo from '../assets/WhiteTextAcademy_logo_transparent_background.png'

const ApplyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Apply to TechNative Bootcamps
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-blue-100">
              Ready to rewrite the rules? Build your future? Change the game? Start your application today.
            </p>
          </div>
        </div>
      </div>

      {/* Application Form Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">General Application Form</h2>
              <p className="text-lg text-gray-600">
                Express your interest in our bootcamps and we'll guide you through the specific application process for your chosen program.
              </p>
            </div>

            {/* HubSpot Form */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 border border-blue-100">
              <div className="text-center mb-6">
                <img 
                  src={techNativeAcademyLogo} 
                  alt="TechNative Academy" 
                  className="h-16 w-auto mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Apply to TechNative Academy</h3>
                <p className="text-gray-600 text-sm">
                  Please complete the below to register to apply for a place on one of the upcoming TechNative Academy bootcamps. We will be in touch with further info on how to complete your full application!
                </p>
              </div>
              
              {/* HubSpot Form Component */}
              <HubSpotForm 
                title=""
                subtitle=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* What Happens Next Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Happens Next?</h2>
            <p className="text-lg text-gray-600">
              Your journey to a new career starts here
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Application Review</h3>
              <p className="text-gray-600 text-sm">We'll review your application and contact you within 2 business days</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Initial Assessment</h3>
              <p className="text-gray-600 text-sm">Complete a skills assessment and motivation interview</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Acceptance & Onboarding</h3>
              <p className="text-gray-600 text-sm">Get accepted and complete pre-bootcamp preparation</p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-yellow-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Start Your Journey</h3>
              <p className="text-gray-600 text-sm">Begin your bootcamp and transform your career</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Questions?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Get in touch with our team for more information
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-gray-600 text-sm">hello@technativedigital.com</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Phone</h3>
                <p className="text-gray-600 text-sm">+44 (0) 1273 123456</p>
              </div>
              <div className="text-center">
                <div className="bg-pink-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold mb-1">Address</h3>
                <p className="text-gray-600 text-sm">Sussex Innovation Centre, Brighton</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplyPage

