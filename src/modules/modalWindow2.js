const modalWindowTwo = () => {
  const callbackForm = document.querySelector('#callback_form'),
   openPopup = document.querySelector('.callback-btn');

  
   openPopup.addEventListener('click', () => {
    callbackForm.style.display = 'block';
   });

   callbackForm.addEventListener('click', () => {
    let target = event.target;
    if (target.classList.contains('close_icon')) {
      callbackForm.style.display = 'none';
    } else if (target.classList.contains('overlay')) {
      callbackForm.style.display = 'none';
    }
   });
};



export default modalWindowTwo;