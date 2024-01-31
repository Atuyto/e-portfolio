

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
