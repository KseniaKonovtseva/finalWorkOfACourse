const sliderBenefits = () => {
  const sliderWrap = document.querySelector('.benefits-inner');
  const slides = document.querySelectorAll('.benefits__item');
  const arrows = document.querySelector('.benefits-arrows');
  const mobile = window.matchMedia("(max-width: 576px)");
  let firstSlideWidth;
    
    arrows.addEventListener('click', (e) => {
      if (!mobile.matches) {
        firstSlideWidth = slides[0].offsetWidth * 3;
      } else {
        firstSlideWidth = slides[0].offsetWidth;
      }
      if (e.target.classList.contains('benefits__arrow--left')) {
        sliderWrap.scrollLeft -= firstSlideWidth;
      } else if (e.target.classList.contains('benefits__arrow--right')) {
        sliderWrap.scrollLeft += firstSlideWidth;
      }
    })

}

export default sliderBenefits