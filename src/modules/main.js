const main = () => {
  const openPopup = document.querySelector('.menu-button img'),
  closePopup = document.querySelector('.close-menu-btn img'),
  popupMenu = document.querySelector('.popup-menu');

openPopup.classList.add('open-popup-btn');
closePopup.classList.add('close-popup-btn');

const link = document.querySelectorAll('li a');
 for (let i=0; i < link.length; i++) {
  link[i].classList.add('link');
 }

  document.addEventListener('click', (event) => {
    const target = event.target; 
    if (target.classList.contains('open-popup-btn')) {
      popupMenu.style.display = 'flex';
    } else if (target.classList.contains('close-popup-btn')) {
      popupMenu.style.display = 'none';
    } else if (target.classList.contains('link')) {
      popupMenu.style.display = 'none';
    }
  });
};

export default main;