// Custom JavaScript for Navbar Toggler
document.addEventListener('DOMContentLoaded', function() {
    var toggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('#navbarNav');

    toggler.addEventListener('click', function() {
        if (navbarCollapse.classList.contains('show')) {
            navbarCollapse.classList.remove('show');
        } else {
            navbarCollapse.classList.add('show');
        }
    });
});
