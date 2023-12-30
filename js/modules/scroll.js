const scroll = () => {
  const anchor = document.getElementById('header');
  const btn = document.querySelector('.smooth-scroll');

  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.clientHeight;
    const scrolled = window.scrollY;

    if (scrolled > windowHeight) {
      btn.classList.add('smooth-scroll--active');
    } else {
      btn.classList.remove('smooth-scroll--active');
    }
  })

  btn.addEventListener('click', () => {
    anchor.scrollIntoView({
      behavior: "smooth"
    })
  })

}

export default scroll