document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventisListener('click', function(e) {
        e.preventDefault();
      
        const targetSection = document.querySelector(this.getAttribute('href'));

        window.scroll({
            top:targetSection.offsetTop,
            behaviour: "smooth"

        });
    });
});