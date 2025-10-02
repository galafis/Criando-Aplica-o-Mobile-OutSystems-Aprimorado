document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const sideMenu = document.getElementById('side-menu');
    const featureButton = document.getElementById('feature-button');
    const backButton = document.getElementById('back-button');
    const homeScreen = document.getElementById('home-screen');
    const featureScreen = document.getElementById('feature-screen');

    menuButton.addEventListener('click', () => {
        sideMenu.classList.toggle('active');
    });

    featureButton.addEventListener('click', () => {
        homeScreen.classList.remove('active');
        featureScreen.classList.add('active');
    });

    backButton.addEventListener('click', () => {
        featureScreen.classList.remove('active');
        homeScreen.classList.add('active');
    });
});
