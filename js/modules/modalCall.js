import { animate } from "./helpers";

const modalCall = () => {
  const block = document.querySelector('.service-inner');
  const modal = document.querySelector('.services-modal');
  const overlay = document.querySelector('.overlay');
  const mobile = window.matchMedia("(max-width: 768px)");

  block.addEventListener('click', (e) => {
    if (e.target.classList.contains('service-button')) {
      overlay.style.display = 'block';
      modal.style.display = 'block';
    }
    
    if (!mobile.matches) {
      animate({
        duration: 1000,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          modal.style.opacity = progress;
        }
      });
    }
  })

  modal.addEventListener('click', (e) => {
    if (e.target.classList.contains('services-modal__close')) {
      modal.style.display = 'none';
      overlay.style.display = 'none';
    }
  })
  overlay.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
  })
}

export default modalCall