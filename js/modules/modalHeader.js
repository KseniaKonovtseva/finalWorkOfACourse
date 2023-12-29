import { animate } from "./helpers";

const modalHeader = () => {
  const btn = document.querySelector('div.button>a');
  const modal = document.querySelector('.header-modal');
  const overlay = document.querySelector('.overlay');

  const mobile = window.matchMedia("(max-width: 768px)");

  btn.addEventListener('click', () => {
    overlay.style.display = 'block';
    modal.style.display = 'block';
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
    if (e.target.classList.contains('header-modal__close')) {
      modal.style.display = 'none';
      overlay.style.display = 'none';
    }
  })
  overlay.addEventListener('click', () => {
    modal.style.display = 'none';
    overlay.style.display = 'none';
  })
}

export default modalHeader