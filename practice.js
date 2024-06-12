let currentIndex = 0;
  const images = document.querySelectorAll('.carousel-image');
  const totalImages = images.length;

  function NextImage() {
      images[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % totalImages;
      images[currentIndex].classList.add('active');
  }

  setInterval(NextImage, 3000);