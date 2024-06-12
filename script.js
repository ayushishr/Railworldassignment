document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.querySelector(".toggle-button");
    const navbarLinks = document.querySelector(".navbar-links");
    const signupButton = document.querySelector('.signup-btn');
    const signupFormContainer = document.querySelector('.signup-form-container');
    const closeBtn = document.querySelector('.close-btn');

    //   toggleButton.addEventListener('click', () => {
    //     navbarLinks.classList.toggle('active');
    // });
   
    signupButton.addEventListener('click', () => {
        signupFormContainer.style.display = 'flex';
    });

     closeBtn.addEventListener('click', () => {
        signupFormContainer.style.display = 'none';
    });

    // setTimeout(() => {
    //     signupFormContainer.style.display = 'flex';}, 4000);
 

    let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;

function NextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].classList.add('active');
}
 setInterval(NextImage, 3000);

});

