const arrow = () => {
  const arrow = document.getElementById('totop'),
  header = document.querySelector('.header-main');

  document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop < header.offsetHeight) {
      arrow.classList.add('hidden');
      arrow.classList.remove('stick');
    } else if (document.documentElement.scrollTop > header.offsetHeight) {
      arrow.classList.add('stick');
      arrow.classList.remove('hidden');
    }
  });
};

export default arrow;