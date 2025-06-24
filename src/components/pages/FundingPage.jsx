import React from 'react';
import { Link } from 'react-router-dom';

const FundingPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-700 py-16">
        <div className="absolute inset-0 bg-black opacity-20 pattern-grid-lg"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Funding for Bootcamps</h1>
            <p className="text-xl text-white opacity-90">
              Making tech education accessible with fully funded and employer-sponsored opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">How Our Funding Works</h2>
          <p className="text-lg text-gray-700 mb-6">
            At TechNative Digital, we believe that financial barriers shouldn't prevent talented individuals from 
            pursuing careers in tech. That's why we've developed multiple funding pathways to make our bootcamps 
            accessible to a wide range of learners.
          </p>
          <p className="text-lg text-gray-700 mb-10">
            Our bootcamps are worth over £4,000 per place, but thanks to our partnerships with local authorities 
            and employers, many learners can access them at reduced cost or completely free.
          </p>

          {/* Funding Options */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6">Funding Options</h3>
            
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold">100% Funded Places</h4>
                </div>
                <p className="text-gray-700 ml-14">
                  If you're a jobseeker, freelancer, or career changer based in a funded Local Authority area, 
                  you may qualify for a fully funded place. This means you pay nothing for your bootcamp.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold">Employer-Sponsored Places</h4>
                </div>
                <p className="text-gray-700 ml-14">
                  For employed learners, we offer co-funded places where your employer contributes a portion of the cost:
                </p>
                <ul className="list-disc ml-20 mt-2 text-gray-700 space-y-1">
                  <li>Small and Medium Enterprises (SMEs): 10% employer contribution</li>
                  <li>Large Companies: 30% employer contribution</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold">Self-Employed & Freelancers</h4>
                </div>
                <p className="text-gray-700 ml-14">
                  If you're self-employed or freelancing and based in a funded Local Authority area, 
                  you may qualify for a fully funded place to help grow your business with new tech skills.
                </p>
              </div>
            </div>
          </div>

          {/* Eligibility Requirements */}
          <h3 className="text-2xl font-bold mb-6">Eligibility Requirements</h3>
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-12">
            <h4 className="text-xl font-bold mb-4">To qualify for funded bootcamp places, you must:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Be aged 19 or over</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Live or work in the specified Local Authority area for the bootcamp</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Have the right to work in the UK</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-2 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <span className="text-gray-700">Meet the technical prerequisites for your chosen bootcamp (varies by course)</span>
              </li>
            </ul>
          </div>

          {/* Local Authority Areas */}
          <h3 className="text-2xl font-bold mb-6">Funded Local Authority Areas</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-lg mb-3">West Sussex</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Software Development Bootcamp</li>
                <li>• AI for Business Bootcamp</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-lg mb-3">East Sussex</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Data Analytics Bootcamp</li>
                <li>• AI Video Production Bootcamp</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-lg mb-3">Brighton & Hove</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Studio Video Production Bootcamp</li>
                <li>• AI for Business Bootcamp</li>
              </ul>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-lg mb-3">Multi-location</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Some bootcamps are available across multiple areas</li>
                <li>• Check individual course pages for details</li>
              </ul>
            </div>
          </div>

          {/* FAQ Section */}
          <h3 className="text-2xl font-bold mb-6">Frequently Asked Questions</h3>
          <div className="space-y-6 mb-12">
            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-xl font-medium mb-2">What if I'm not eligible for funding?</h4>
              <p className="text-gray-700">
                If you don't meet the eligibility criteria for funded places, please contact us to discuss alternative 
                options. We may be able to suggest other pathways or payment plans.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-xl font-medium mb-2">How do I apply for a funded place?</h4>
              <p className="text-gray-700">
                The funding eligibility assessment is part of our standard application process. Simply apply for 
                your chosen bootcamp, and we'll guide you through the funding options available to you.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-xl font-medium mb-2">Can my employer sponsor me if they're not in the funded area?</h4>
              <p className="text-gray-700">
                Yes, employers from any location can sponsor employees for our bootcamps. The local authority 
                restrictions only apply to fully funded (free) places.
              </p>
            </div>
            
            <div className="border-b border-gray-200 pb-4">
              <h4 className="text-xl font-medium mb-2">What documentation will I need to prove eligibility?</h4>
              <p className="text-gray-700">
                You'll typically need proof of address, right to work documentation, and possibly proof of 
                employment status. We'll provide a detailed list during the application process.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-700 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Take the Next Step?</h2>
            <p className="text-xl text-white opacity-90 mb-8">
              Apply now to check your eligibility for funded bootcamp places.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/apply" className="bg-white text-blue-700 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Apply Now
              </Link>
              <Link to="/courses" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-medium hover:bg-white/10 transition-colors">
                Explore Bootcamps
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FundingPage;
