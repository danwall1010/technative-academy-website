/* Bootcamps Dropdown Fix - External JavaScript */
/* This file adds dropdown functionality without modifying React components */

(function() {
  'use strict';
  
  // Wait for DOM to be ready
  function initDropdown() {
    console.log('Initializing Bootcamps dropdown...');
    
    // Find the Bootcamps button
    const bootcampsButton = Array.from(document.querySelectorAll('button, a')).find(el => 
      el.textContent.trim() === 'Bootcamps'
    );
    
    if (!bootcampsButton) {
      console.log('Bootcamps button not found, retrying...');
      setTimeout(initDropdown, 1000);
      return;
    }
    
    console.log('Bootcamps button found:', bootcampsButton.tagName);
    
    // Make parent relative for positioning
    bootcampsButton.parentElement.classList.add('bootcamps-parent');
    
    // Create dropdown menu
    const dropdown = document.createElement('div');
    dropdown.className = 'bootcamps-dropdown';
    dropdown.id = 'bootcamps-dropdown';
    
    // Course links to proper course pages
    const courseLinks = [
      { name: 'Software Development', url: '/course/software-development', description: 'Full-stack development bootcamp' },
      { name: 'AI for Business', url: '/course/artificial-intelligence', description: 'AI implementation for business' },
      { name: 'Data Analytics', url: '/course/data-analytics', description: 'Transform data into insights' },
      { name: 'AI Video Production', url: '/course/aimi-ai-video-production', description: 'AI-powered video creation' },
      { name: 'Digital Video Production', url: '/course/latest-tv-video-production', description: 'Streaming & marketing video' }
    ];
    
    // Add course links to dropdown
    courseLinks.forEach(course => {
      const link = document.createElement('a');
      link.href = course.url;
      link.textContent = course.name;
      link.title = course.description;
      
      // Add click handler for React Router navigation
      link.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Navigating to:', course.url);
        
        // Close dropdown
        dropdown.classList.remove('show');
        
        // Use window.history.pushState for client-side navigation
        window.history.pushState({}, '', course.url);
        
        // Trigger a popstate event to notify React Router
        window.dispatchEvent(new PopStateEvent('popstate', { state: {} }));
      });
      
      dropdown.appendChild(link);
    });
    
    // Add dropdown to parent
    bootcampsButton.parentElement.appendChild(dropdown);
    
    // Add click handler to button
    bootcampsButton.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      
      const isVisible = dropdown.classList.contains('show');
      
      // Close all other dropdowns first
      document.querySelectorAll('.bootcamps-dropdown.show').forEach(d => {
        if (d !== dropdown) d.classList.remove('show');
      });
      
      // Toggle this dropdown
      if (isVisible) {
        dropdown.classList.remove('show');
        console.log('Dropdown closed');
      } else {
        dropdown.classList.add('show');
        console.log('Dropdown opened');
      }
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
      if (!bootcampsButton.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove('show');
      }
    });
    
    // Close dropdown on escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        dropdown.classList.remove('show');
      }
    });
    
    console.log('Bootcamps dropdown initialized successfully');
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDropdown);
  } else {
    initDropdown();
  }
  
  // Also try after a short delay to handle React rendering
  setTimeout(initDropdown, 2000);
  
})();

