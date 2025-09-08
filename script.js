// Smooth scroll avec vitesse contrôlée
document.querySelectorAll('.nav-link, a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if(target){
      const headerOffset = 70; // pour header fixe
      const elementPosition = target.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  });
});
