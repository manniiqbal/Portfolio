// Wait for the DOM content to be loaded
document.addEventListener("DOMContentLoaded", function() {

    // Function to show the section based on the section id passed
    function showSection(sectionId) {
      // Hide all sections
      const sections = document.querySelectorAll('.section');
      sections.forEach(function(section) {
        section.style.display = 'none';
      });
  
      // Show the section that matches the sectionId
      const activeSection = document.getElementById(sectionId);
      if (activeSection) {
        activeSection.style.display = 'block';
      }
    }
  
    // Initially show the Home section
    showSection('home');
  
    // Attach event listeners to navigation links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        // Prevent default link behavior
        event.preventDefault();
  
        // Get the section to show from the href attribute
        const sectionId = link.getAttribute('href').substring(1);
        showSection(sectionId);
      });
    });
  });
  
  
  