const gift = () => {
 const btnGift = document.querySelector('.fixed-gift'),
 gift = document.getElementById('gift');

 btnGift.addEventListener('click', () => {
  gift.style.display = 'block';
  btnGift.style.display = 'none';
 });

 gift.addEventListener('click', () => {
  let target = event.target;
  if (target.classList.contains('close_icon')) {
    gift.style.display = 'none';
  } else if (target.classList.contains('close-btn')) {
    gift.style.display = 'none';
  } else if (target.classList.contains('overlay')) {
    gift.style.display = 'none';
  }
 });
};



export default gift;