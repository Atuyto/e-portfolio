

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const progressBar = entry.target;
            const percentage = progressBar.getAttribute('data-percentage');
            const color = progressBar.getAttribute("data-color");
            progressBar.style.backgroundColor = color;
            progressBar.style.width = percentage + '%';
            progressBar.classList.add('animate');
            if(percentage === "100"){
                progressBar.style.borderRadius = "5px"
            }
        } else {
            const progressBar = entry.target;
            progressBar.classList.remove('animate');
            progressBar.style.width = '0%';
        }
    });
});

const progressBars = document.querySelectorAll(".progress-bar");

progressBars.forEach(bar => {
    bar.style.width = '0%';
    observer.observe(bar);
});





function toggleMenu() {
    let navbarMenu = document.querySelector('.navbar .menu');

    if (navbarMenu.classList.contains('show')) {
        navbarMenu.classList.remove('show');
        navbarMenu.classList.add('hide');
    } else {
        navbarMenu.classList.remove('hide');
        navbarMenu.classList.add('show');
    }
}
