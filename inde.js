const dropdownItems = document.querySelectorAll('.dropdown');

dropdownItems.forEach(item => {
    const submenu = item.querySelector('.submenu');
    item.addEventListener('click', () => {
        submenu.classList.toggle('show');
    });
});

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetSection = document.querySelector(link.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});
