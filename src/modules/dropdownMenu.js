
const dropdownMenu = () => {
  const clubSelect = document.querySelector('.club-select'),
   clubsList = document.querySelector('.clubs-list ul');
   clubSelect.addEventListener('click', () => {
  
    if (clubsList.style.display !== 'block') {
      clubsList.style.display = 'block';
    } else if (clubsList.style.display === 'block') {
      clubsList.style.display = 'none';
    } 
  });
};

export default dropdownMenu;