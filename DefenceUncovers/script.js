document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({ 
                behavior: "smooth" 
            });
        });
    });

    const heroSection = document.querySelector(".hero");
    window.addEventListener("scroll", function() {
        let scrollY = window.scrollY;
        heroSection.style.backgroundPositionY = -scrollY * 0.5 + "px";
    });
});
