document.addEventListener('DOMContentLoaded', function() {
    // Select elements to animate
    const profileImage = document.querySelector('img');
    const projectsList = document.querySelector('.section-2 ul');
    const socialMediaLinks = document.querySelectorAll('.section-4 a');
 
    // Animate profile image on mouseover
    profileImage.addEventListener('mouseover', function() {
       this.classList.add('rotate');
    });
 
    profileImage.addEventListener('mouseout', function() {
       this.classList.remove('rotate');
    });
 
    // Animate projects list on click
    projectsList.addEventListener('click', function(event) {
       if (event.target.tagName === 'LI') {
          event.target.classList.add('fade-out');
          setTimeout(function() {
             event.target.remove();
          }, 500);
       }
    });
 
    // Animate social media links on hover
    socialMediaLinks.forEach(function(link) {
       link.addEventListener('mouseover', function() {
          this.classList.add('bounce');
       });
 
       link.addEventListener('animationend', function() {
          this.classList.remove('bounce');
       });
    });
 });
 