
    document.getElementById("click").onclick = function () {
        document.getElementById("booking").scrollIntoView({
            behavior: 'smooth'
            
        });
        
    };

    // Scroll Reveal Animation
    const scrollReveal = document.querySelectorAll('.scroll-reveal');

    const revealOnScroll = () => {
        scrollReveal.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);

    // Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchar =>{
        anchar.addEventListener('click', function(e){
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth', 
            block: 'start'
        });
    });
});

