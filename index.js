// Get the navigation links
const navLinks = document.querySelectorAll('nav a');

// Add event listeners to the links
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    // Prevent the default link behavior
    event.preventDefault();
    
    // Get the href attribute of the link
    const href = link.getAttribute('href');
    
    // Scroll smoothly to the target section
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Get the "scroll to top" button
const scrollToTopButton = document.querySelector('#scroll-to-top');

// Add event listener to the button
scrollToTopButton.addEventListener('click', () => {
  // Scroll smoothly to the top of the page
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

