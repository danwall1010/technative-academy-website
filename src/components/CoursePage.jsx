import React from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import HubSpotForm from './HubSpotForm'

const CoursePage = () => {
  const { courseId } = useParams()

  // Master course data extracted from working website https://owvrsbaw.manus.space
  const courses = {
    'software-development': {
      title: 'Software Development - Tech Finishing School: Your Launchpad Into a Tech Career',
      subtitle: 'Our Software Development Bootcamp is a 12-week intensive programme designed for aspiring junior developers who already know the basics, but are "stuck at the start." Whether you\'re a self-taught coder, computer science grad, or career changer with some experience, this bootcamp will help you sharpen your skills, build confidence, and get hired.',
      duration: '12 weeks',
      format: 'Hybrid (in-person + online)',
      price: 'Funded through the West Sussex County Council Skills Bootcamp Initiative',
      location: 'West Sussex',
      heroDescription: 'Our Software Development Bootcamp is a 12-week intensive programme designed for aspiring junior developers who already know the basics, but are "stuck at the start." Whether you\'re a self-taught coder, computer science grad, or career changer with some experience, this bootcamp will help you sharpen your skills, build confidence, and get hired.',
      
      technicalSkills: [
        'Full-stack web development using modern frameworks',
        'JavaScript, React, Node.js, and database management',
        'Version control with Git and collaborative development',
        'Testing, debugging, and deployment strategies',
        'Agile methodologies and project management'
      ],
      
      professionalSkills: [
        'Industry-standard development workflows',
        'Code review and pair programming practices',
        'Client communication and requirement gathering',
        'Professional portfolio development',
        'Interview preparation and technical assessments'
      ],
      
      realWorldProjects: [
        'Real-world client projects with local businesses',
        'Capstone project showcasing full-stack capabilities',
        'Collaborative team projects using Agile methodologies',
        'Open-source contributions and GitHub portfolio building'
      ],
      
      partner: {
        name: 'Pete',
        title: 'Software Developer & Mentor',
        description: 'Years of experience in data analytics, marketing, consumer insights & sales. Working experience: Leads national data research across UK, US, China and Singapore for various brands and & international companies. Pete brings extensive experience in software development, having worked with companies ranging from startups to enterprise organizations. His expertise in full-stack development and passion for mentoring make him the perfect partner for this bootcamp.',
        videoTitle: 'Pete\'s Story',
        videoStatus: 'Coming Soon'
      },
      
      careerPaths: [
        'Junior Developer',
        'Full-Stack Developer',
        'Software Engineer',
        'Tech Lead'
      ],
      
      salaryData: {
        average: '£48,901',
        averageDescription: 'UK Average Developer Salary',
        senior: '£100k+',
        seniorDescription: 'Senior Developer Roles'
      },
      
      industryInsights: [
        'UK tech industry projected to grow to USD 2.80 trillion by 2033 with 7.60% CAGR',
        'UK tech sector attracted £24 billion investment in 2022',
        'Software professionals doubled from 209,000 to 418,000',
        '93% of UK businesses report shortage of qualified tech candidates'
      ],
      
      topSkills: ['Python', 'JavaScript', 'Java', 'Cloud Computing', 'AI/ML'],
      
      perfectFor: [
        'Aspiring developers wanting to enter tech',
        'Career changers seeking high-demand skills',
        'Recent graduates interested in software development',
        'Professionals wanting to advance their technical skills'
      ]
    },
    
    'data-analytics': {
      title: 'Transform Data into Insights: Master Analytics, Drive Business Decisions.',
      subtitle: 'The East Sussex Data Analytics Bootcamp is designed for professionals looking to harness the power of data. This comprehensive program covers everything from data collection and cleaning to advanced analytics and visualization, preparing you for high-demand roles in the data-driven economy.',
      duration: '12 weeks',
      format: 'Part-time',
      price: 'Skills Bootcamp funding available',
      location: 'East Sussex',
      heroDescription: 'The East Sussex Data Analytics Bootcamp is designed for professionals looking to harness the power of data. This comprehensive program covers everything from data collection and cleaning to advanced analytics and visualization, preparing you for high-demand roles in the data-driven economy.',
      
      technicalSkills: [
        'Python programming for data analysis',
        'SQL database querying and management',
        'Data visualization with Power BI and Tableau',
        'Statistical analysis and machine learning basics',
        'Data cleaning and preprocessing techniques'
      ],
      
      professionalSkills: [
        'Data storytelling and presentation skills',
        'Business intelligence and analytics',
        'Stakeholder communication and requirements gathering',
        'Ethics in data analysis and privacy considerations'
      ],
      
      realWorldProjects: [
        'Real business data analysis projects',
        'Interactive dashboard creation',
        'Predictive modeling for business outcomes',
        'Data cleaning and preparation workflows'
      ],
      
      partner: {
        name: 'Jeremy Horne',
        title: 'Lead Curriculum Partner',
        description: 'Years of experience in data analytics, marketing, consumer insights & sales. Working experience: Leads national data research across UK, US, China and Singapore for various brands and & international companies.',
        videoTitle: 'Jeremy\'s Story',
        videoStatus: 'Coming Soon'
      },
      
      partnerCompany: {
        name: 'Datacore',
        title: 'Lead Data Analytics Partner',
        description: 'Brighton-based Data Analytics specialists co-designing and delivering our curriculum. Datacore brings deep expertise in data analytics and business intelligence, having helped organizations transform their decision-making processes through data-driven insights. Why Datacore partners with TechNative: Dedicated knowledge: Datacore brings deep expertise ensuring our curriculum stays with industry best practices and emerging technologies. Industry Standards: As well as educational best practices, we believe that industry standards should be the foundation for all our training programmes.'
      },
      
      careerPaths: [
        'Data Analyst',
        'Business Intelligence Analyst',
        'Junior Data Scientist',
        'Business Analyst'
      ],
      
      salaryData: {
        average: '£49,640',
        averageDescription: 'Average Starting Salary',
        senior: '25%',
        seniorDescription: 'Projected Industry Growth'
      },
      
      industryInsights: [
        'Data from our industry partner about the current job market, career progression opportunities, and what employers are really looking for in junior developers.',
        'High-Growth East Sussex Data Analytics Market',
        'According to recent data from the Office for National Statistics, the data analytics sector in East Sussex is experiencing rapid growth, with a 35% increase in job openings over the past year.'
      ],
      
      topSkills: ['Python', 'SQL', 'Tableau', 'Power BI', 'Statistics'],
      
      perfectFor: [
        'Professionals with spreadsheets daily',
        'Business professionals seeking data skills',
        'Career changers interested in analytics',
        'Recent graduates with analytical mindsets',
        'Those wanting to make data-driven decisions'
      ]
    },
    
    'artificial-intelligence': {
      title: 'Harness the Power of AI: Drive Productivity and Innovation in Your Career.',
      subtitle: 'The TechNative AI for Business Bootcamp is designed to help adult learners build practical, ethical, and commercially relevant skills in the use of generative AI and automation tools. It aims to drive productivity and growth for SMEs, freelancers, and individuals in or seeking employment by helping them harness AI to solve real-world challenges.',
      duration: '12 weeks',
      format: 'Hybrid (live online + asynchronous)',
      price: 'Commissioned under West Sussex County Council\'s Bootcamp commissioning',
      location: 'West Sussex or neighboring LEP areas',
      heroDescription: 'The TechNative AI for Business Bootcamp is designed to help adult learners build practical, ethical, and commercially relevant skills in the use of generative AI and automation tools. It aims to drive productivity and growth for SMEs, freelancers, and individuals in or seeking employment by helping them harness AI to solve real-world challenges.',
      
      technicalSkills: [
        'Introduction to AI and machine learning',
        'Python programming for data analysis',
        'SQL database querying and management',
        'Data visualization with Power BI and Tableau',
        'Statistical analysis and machine learning basics',
        'Data cleaning and preprocessing techniques'
      ],
      
      professionalSkills: [
        'Create an AI implementation plan for your workplace or business',
        'Data storytelling and presentation skills',
        'Project management for data initiatives',
        'Ethics in data analysis and privacy considerations',
        'Stakeholder communication and requirements gathering'
      ],
      
      realWorldProjects: [
        'Real business data analysis projects',
        'Interactive dashboard creation',
        'Predictive modeling for business outcomes',
        'AI powered business and operations planning'
      ],
      
      partner: {
        name: 'AI Business Expert',
        title: 'Lead AI for Business Partner',
        description: 'AI Business Expert brings extensive experience in business AI implementation, helping organizations transform their operations through intelligent automation and data-driven decision making.',
        videoTitle: 'AI Expert\'s Story',
        videoStatus: 'Coming Soon'
      },
      
      careerPaths: [
        'AI Business Analyst',
        'Business Intelligence Analyst',
        'Junior Data Scientist',
        'AI Implementation Specialist'
      ],
      
      salaryData: {
        average: '£65,000',
        averageDescription: 'AI-Related Roles Average',
        senior: '77.53%',
        seniorDescription: 'Higher Salaries vs Other Occupations'
      },
      
      industryInsights: [
        'Workers using AI save 122 hours per year, driving massive business adoption',
        'Rapidly Growing AI Implementation Market',
        'AI adoption in business continues to accelerate across all sectors'
      ],
      
      topSkills: ['AI Strategy', 'Business Analysis', 'Python', 'Machine Learning', 'Process Automation'],
      
      perfectFor: [
        'Business professionals wanting to embrace AI',
        'Managers seeking to implement AI solutions',
        'Career changers interested in AI applications',
        'Recent graduates with analytical mindsets',
        'Entrepreneurs looking to create engaging content'
      ]
    },
    
    'aimi-ai-video-production': {
      title: 'Create Cutting-Edge Content: Master AI-Powered Video Production.',
      subtitle: 'Partner with AIMI to learn the latest in AI-powered video production. This innovative bootcamp combines traditional video production skills with cutting-edge AI tools, preparing you for the future of content creation in the digital media landscape.',
      duration: '12 weeks',
      format: 'Remote-first',
      price: 'Industry partnership funding',
      location: 'Brighton',
      heroDescription: 'Partner with AIMI to learn the latest in AI-powered video production. This innovative bootcamp combines traditional video production skills with cutting-edge AI tools, preparing you for the future of content creation in the digital media landscape.',
      
      technicalSkills: [
        'AI-powered video editing and production tools',
        'Automated content generation and optimization',
        'Machine learning for video analytics',
        'Cloud-based production workflows',
        'Integration of AI tools in traditional video pipelines'
      ],
      
      professionalSkills: [
        'Creative brief interpretation and execution',
        'Client communication and project management',
        'Project management for video production',
        'Brand storytelling through video',
        'Industry trends and emerging technologies'
      ],
      
      realWorldProjects: [
        'Live studio from Amazon and media clients',
        'AI-enhanced promotional videos',
        'Automated video content series',
        'Interactive video experiences'
      ],
      
      partner: {
        name: 'Duncan Thomson',
        title: 'Co-founder and Conferences & Awards Creative Director',
        description: 'As Creative Producer, Co-founder of the first UK creative conference in the South West Conference, head of the industry\'s AI video production and creative applications. Key Qualifications: Duncan has worked extensively with AIMI Studios, a leader in AI-powered video production and creative applications. Industry Leadership: Duncan has spearheaded campaigns for top-tier brands, combining both technical expertise and creative vision to deliver award-winning content. Why Duncan partners with TechNative: Industry Expertise: Duncan brings cutting-edge expertise ensuring our curriculum stays with industry best practices and emerging technologies. Creative Innovation: As well as educational best practices, we believe that creative innovation should be the foundation for all our training programmes.',
        videoTitle: 'Duncan\'s Story',
        videoStatus: 'Coming Soon'
      },
      
      careerPaths: [
        'AI Video Producer',
        'Content Creation Specialist',
        'Digital Media Technologist',
        'Video Production Coordinator',
        'Creative Technology Consultant'
      ],
      
      salaryData: {
        average: '£65,000',
        averageDescription: 'Average Salary',
        senior: '35%',
        seniorDescription: 'Industry Growth'
      },
      
      industryInsights: [
        'Emerging AI Video Production Market',
        'AI video production expected to reach £2.8B, growing 33.7% annually by 2025',
        'Lead from our industry partner about the current job market, career progression opportunities, and what employers are really looking for in junior developers.'
      ],
      
      topSkills: ['AI Video Tools', 'Creative Strategy', 'Technical Production', 'Brand Storytelling', 'Emerging Technologies'],
      
      perfectFor: [
        'Creative professionals wanting to embrace AI',
        'Video editors seeking advanced skills',
        'Content creators looking to scale production',
        'Marketing professionals needing video skills',
        'Entrepreneurs looking to create engaging content'
      ]
    },
    
    'latest-tv-video-production': {
      title: 'Create Content That Connects: Video Skills for Social, Streaming & Marketing',
      subtitle: 'Master the art of video storytelling, from concept to edit, in this hands-on, studio-based bootcamp. Learn how to plan, shoot and edit professional-quality content for YouTube, TikTok, Instagram and client campaigns.',
      duration: '12 weeks',
      format: 'In-person',
      price: 'Industry partnership with Latest TV',
      location: 'Worthing',
      heroDescription: 'Master the art of video storytelling, from concept to edit, in this hands-on, studio-based bootcamp. Learn how to plan, shoot and edit professional-quality content for YouTube, TikTok, Instagram and client campaigns.',
      
      technicalSkills: [
        'Video production workflow from concept to delivery',
        'Professional camera operation and cinematography',
        'Audio recording and post-production techniques',
        'Advanced editing software and techniques',
        'Lighting design and equipment operation',
        'Content optimization for social media platforms'
      ],
      
      professionalSkills: [
        'Content strategy and planning for digital platforms',
        'Scriptwriting and storyboarding techniques',
        'Client brief interpretation and project management',
        'Team collaboration in video production environments',
        'Brand storytelling and marketing applications',
        'Meeting deadlines in fast-paced production schedules'
      ],
      
      realWorldProjects: [
        'YouTube channel content creation',
        'Social media marketing campaigns',
        'Client promotional videos',
        'Interview and testimonial productions',
        'Live streaming and broadcast content',
        'Portfolio development for Latest TV partner'
      ],
      
      partner: {
        name: 'Cathy Smith',
        title: 'Video Production Partner, Latest TV',
        description: 'Cathy brings extensive experience in video production for streaming platforms, having worked on content that reaches millions of viewers across various digital platforms. Cathy\'s journey in video production: Cathy has been working in video production for streaming platforms, social media and digital video content. She has worked on content that reaches millions of viewers across various digital platforms. Key Qualifications: Cathy has worked extensively with Latest TV, a leader in local broadcasting and digital content creation. Industry Leadership: Cathy has spearheaded campaigns for top-tier brands, combining both technical expertise and creative vision to deliver award-winning content.',
        videoTitle: 'Cathy\'s Story',
        videoStatus: 'Coming Soon'
      },
      
      partnerCompany: {
        name: 'Latest TV',
        title: 'Lead Video Production Partner',
        description: 'Latest TV is an award-winning local television and digital video production company. Latest TV has been working on content that reaches millions of viewers across various digital platforms, including community programming and commercial content production.'
      },
      
      careerPaths: [
        'Content Creator',
        'Video Producer',
        'Social Media Video Specialist',
        'Digital Marketing Video Producer',
        'YouTube Channel Manager',
        'Video Production Specialist'
      ],
      
      salaryData: {
        average: '£37,000',
        averageDescription: 'Starting Salary',
        senior: '£136,500',
        seniorDescription: 'Senior Positions'
      },
      
      industryInsights: [
        'High-Growth Digital Video Production Market',
        'UK\'s digital video production market expected to reach £2.8B, growing 33.7% annually by 2025',
        'Lead from our industry partner about the current job market, career progression opportunities, and what employers are really looking for in junior developers.'
      ],
      
      topSkills: ['Video Editing', 'Social Media', 'Storytelling', 'Content Strategy', 'Brand Production'],
      
      perfectFor: [
        'Aspiring content creators and digital marketers',
        'Social media professionals seeking video skills',
        'Content creators looking to scale production',
        'Marketing professionals needing video skills',
        'Entrepreneurs looking to create engaging content',
        'Creative professionals wanting to expand skills'
      ]
    }
  }

  const course = courses[courseId]

  if (!course) {
    return <div>Course not found</div>
  }

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>{course.title} | TechNative Academy</title>
        <meta name="description" content={course.subtitle} />
      </Helmet>

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="lg:pl-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-2xl">
                {course.title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-xl">
                {course.subtitle}
              </p>
              <div className="flex flex-wrap gap-4 text-lg mb-4">
                <span className="bg-white/20 px-4 py-2 rounded-lg">
                  📅 {course.duration}
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-lg">
                  💻 {course.format}
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-lg">
                  📍 {course.location}
                </span>
              </div>
              <div className="mb-8">
                <span className="bg-yellow-400/20 px-4 py-2 rounded-lg text-yellow-100 border border-yellow-400/30">
                  💰 {course.price}
                </span>
              </div>
              <div>
                <button className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-3 rounded-lg font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-200 transform hover:scale-105">
                  Apply Now - It's Free for those who work or live in {course.location}!
                </button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img 
                src="/software-dev-hero.jpeg" 
                alt="Software Development Student" 
                className="w-full h-auto object-cover rounded-lg transform scale-x-[-1]"
              />
            </div>
          </div>
        </div>
      </div>{/* TechNative Academy Badge */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center">
            <img 
              src="/technative-academy-logo.png" 
              alt="TechNative Academy" 
              className="w-16 h-16 mr-4"
            />
            <div className="text-left">
              <p className="text-sm text-gray-600 mb-1">This bootcamp is part of the <span className="font-bold text-gray-900">TechNative Academy</span> offer - our comprehensive ecosystem of employer-led training programmes designed to create the next generation of tech talent.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Course Overview */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Overview</h2>
            <p className="text-xl text-gray-600">Everything you need to know about this bootcamp</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h3>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Technical Skills</h4>
                <div className="space-y-3">
                  {course.technicalSkills.map((skill, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <p className="text-gray-700">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Professional Skills</h4>
                <div className="space-y-3">
                  {course.professionalSkills.map((skill, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                        <span className="text-white text-sm">✓</span>
                      </div>
                      <p className="text-gray-700">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Deep Dive</h3>
              <div className="bg-gray-200 rounded-lg p-8 flex items-center justify-center h-64">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">▶</span>
                  </div>
                  <p className="text-gray-600 font-medium">Course Overview Video</p>
                  <p className="text-gray-500 text-sm">Coming Soon</p>
                </div>
              </div>
              <p className="text-gray-600 mt-4">
                Course overview video coming soon! In the meantime, explore the detailed curriculum and career prospects below.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Real-World Projects */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Real-World Projects</h2>
            <p className="text-xl text-gray-600">Build your portfolio with meaningful work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {course.realWorldProjects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border">
                <h3 className="font-semibold text-gray-900 mb-2">{project}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Career Progression Routes */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Career Progression Routes</h2>
            <p className="text-xl text-gray-600">Discover where this bootcamp can take your career</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Potential Career Paths</h3>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {course.careerPaths.map((path, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border text-center">
                    <span className="font-medium text-gray-900">{path}</span>
                  </div>
                ))}
              </div>

              <div className="bg-white p-6 rounded-lg border">
                <h4 className="font-semibold text-purple-800 mb-4">📊 Industry Outlook & Career Prospects</h4>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">{course.salaryData.average}</div>
                      <div className="text-sm text-gray-600">{course.salaryData.averageDescription}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">{course.salaryData.senior}</div>
                      <div className="text-sm text-gray-600">{course.salaryData.seniorDescription}</div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">🚀 Industry Growth</h5>
                    <ul className="text-sm text-gray-700 space-y-1">
                      {course.industryInsights.map((insight, index) => (
                        <li key={index}>• {insight}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h5 className="font-semibold text-gray-900 mb-2">🔥 Most Sought-After Skills</h5>
                    <div className="flex flex-wrap gap-2">
                      {course.topSkills.map((skill, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Industry Insights</h3>
              <div className="bg-gray-200 rounded-lg p-8 flex items-center justify-center h-64">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">▶</span>
                  </div>
                  <p className="text-gray-600 font-medium">Career Progression Video</p>
                  <p className="text-gray-500 text-sm">Coming Soon</p>
                </div>
              </div>
              <p className="text-gray-600 mt-4">
                Lead from our industry partner about the current job market, career progression opportunities, and what employers are really looking for in junior developers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Is This Bootcamp Right for You? */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Is This Bootcamp Right for You?</h2>
            <p className="text-xl text-gray-600">Find out if you're a good fit for our programme</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Perfect for:</h3>
              <div className="space-y-3">
                {course.perfectFor.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-1">
                      <span className="text-white text-sm">✓</span>
                    </div>
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">Ready to Take the Next Step?</h3>
              <div className="bg-gray-200 rounded-lg p-8 flex items-center justify-center h-48 mb-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">▶</span>
                  </div>
                  <p className="text-gray-600 font-medium">Course Readiness Video</p>
                  <p className="text-gray-500 text-sm">Coming Soon</p>
                </div>
              </div>
              <div className="text-center">
                <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-green-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Industry Partners - Moved to Bottom */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meet Our Industry Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn from industry professionals and employers who've co-designed our curriculum
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{course.partner.name}</h3>
                  <p className="text-gray-600">{course.partner.title}</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                {course.partner.description}
              </p>
            </div>
            <div className="bg-gray-200 rounded-lg p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">▶</span>
                </div>
                <p className="text-gray-600 font-medium">{course.partner.videoTitle}</p>
                <p className="text-gray-500 text-sm">{course.partner.videoStatus}</p>
              </div>
            </div>
          </div>

          {/* Additional Partner Company (for courses that have them) */}
          {course.partnerCompany && (
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{course.partnerCompany.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{course.partnerCompany.name}</h3>
                    <p className="text-gray-600">{course.partnerCompany.title}</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  {course.partnerCompany.description}
                </p>
              </div>
              <div className="bg-gray-200 rounded-lg p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">▶</span>
                  </div>
                  <p className="text-gray-600 font-medium">{course.partnerCompany.name}'s Story</p>
                  <p className="text-gray-500 text-sm">Coming Soon</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Registration Form */}
      <div className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Start Your {course.title.split(':')[0]} Bootcamp?
              </h2>
              <p className="text-gray-600 mb-6">
                Express your interest in this {course.title.split(':')[0]} Bootcamp and take the first step towards your new career. Our team will be in touch to discuss your options and answer any questions.
              </p>
              
              <div className="inline-flex items-center bg-gray-50 p-6 rounded-lg mb-8">
                <img 
                  src="/technative-academy-logo.png" 
                  alt="TechNative Academy" 
                  className="w-16 h-16 mr-4"
                />
                <div className="text-left">
                  <p className="font-bold text-gray-900 text-lg">TECHNATIVE ACADEMY</p>
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-6">
                Please complete this below to register to apply for a place on one of the upcoming TechNative Academy bootcamps. We will be in touch with further info on how to complete your full application!
              </p>
            </div>

            {/* HubSpot Form */}
            <HubSpotForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CoursePage

