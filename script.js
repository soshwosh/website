let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x')
    navBar.classList.toggle('active');
}

const githubButtons = document.querySelectorAll('.github');
githubButtons.forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = "https://github.com/soshwosh";
    });
});

const linkedinButtons = document.querySelectorAll('.linkedin');
linkedinButtons.forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = "https://www.linkedin.com/in/sasha-r-persaud/";
    });
});

const instagramButtons = document.querySelectorAll('.instagram');
instagramButtons.forEach(button => {
    button.addEventListener('click', function() {
        window.location.href = "https://www.instagram.com/sosh.goes.to.ghc/";
    });
});