const modalWindow = () => {
  const freeVisitForm = document.querySelector('#free_visit_form'),
   openPopup = document.querySelector('.open-popup');

  
   openPopup.addEventListener('click', () => {
    freeVisitForm.style.display = 'block';
   });

   freeVisitForm.addEventListener('click', () => {
    let target = event.target;
    if (target.classList.contains('close_icon')) {
      freeVisitForm.style.display = 'none';
    } else if (target.classList.contains('overlay')) {
      freeVisitForm.style.display = 'none';
    }
   });
};



export default modalWindow;