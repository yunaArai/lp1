document.getElementById('hamburger-menu').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // メニューを表示・非表示
});