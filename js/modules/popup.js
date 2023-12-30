const popup = () => {
  const btn = document.getElementById('documents');
  const popup = document.querySelector('.popup-img');

  btn.addEventListener('click', (e) => {
    if (e.target.classList.contains('document-overlay')) {
      popup.classList.add('popup-img--active')
    } else if (!e.target.closest('.popup-img img')) {
      popup.classList.remove('popup-img--active')
    }
  })

}

export default popup