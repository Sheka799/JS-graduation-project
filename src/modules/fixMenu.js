const fixMenu = () => {
  const navigation = document.querySelector('.top-menu'); 
  document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop >= 187) {
      navigation.classList.add('stick');
      navigation.classList.remove('static');
    } else {
      navigation.classList.add('static');
      navigation.classList.remove('stick');
    }
  });
};

export default fixMenu;