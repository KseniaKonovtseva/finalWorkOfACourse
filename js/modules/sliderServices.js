const sliderServices = () => {
  const sliderWrap = document.querySelector('.service-slider');
  const slides = document.querySelectorAll('.service-slider__item');
  const arrows = document.querySelector('.services-arrows');
  const mobile = window.matchMedia("(max-width: 1200px)");
  let firstSlideWidth;
    
    arrows.addEventListener('click', (e) => {
      if (!mobile.matches) {
        firstSlideWidth = slides[0].offsetWidth * 2;
      } else {
        firstSlideWidth = slides[0].offsetWidth;
      }
      if (e.target.classList.contains('services__arrow--left')) {
        sliderWrap.scrollLeft -= firstSlideWidth;
      } else if (e.target.classList.contains('services__arrow--right')) {
        sliderWrap.scrollLeft += firstSlideWidth;
      }
    })

}

export default sliderServices