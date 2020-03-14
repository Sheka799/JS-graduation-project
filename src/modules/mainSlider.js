const mainSlider = () => {
  const mainSlider = document.querySelector('.main-slider'),
  slide = document.querySelectorAll('.slide_main');

  let currentSlide = 0,
  interval;

  const prevSlide = (elem, index, strClass) => {
    elem[index].classList.remove(strClass);
  };

  const nextSlide = (elem, index, strClass) => {
    elem[index].classList.add(strClass);
  };

  const autoPlaySlide = () => {
    prevSlide(slide, currentSlide, 'sliderBlock');
    currentSlide++;
    if(currentSlide >= slide.length) {
      currentSlide = 0;
    }
    nextSlide(slide, currentSlide, 'sliderBlock');

    console.log(slide);
    console.log(currentSlide);
  };  

  const startSlide = (time = 3000) => {
    interval = setInterval(autoPlaySlide, time);
  };

  startSlide(3000);
};

export default mainSlider;