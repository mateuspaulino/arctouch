// import Carousel from './components/Carousel';
import removeClass from './helpers/util';
import './../static/sass/main.scss';

async function init() {

  //bind querySelector
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  //init variables
  let currentSlide = 0;
  let automaticSlide = true;
  // let automaticInterval = setInterval(function(){goToNextSlide();}, 1000);

  //DOM elements
  let slide = $$('.feedback__carousel__container__list__item');
  let slideActivated = document.getElementsByClassName('feedback__carousel__container__list__item active');

  //Shows to the specific slide
  let showSlide = (number) => {
    removeClass(slideActivated,'active');
    slide[number].classList.add('active');
    currentSlide++;
  }

  //Go to the next slide
  let goToNextSlide = () => {
    showSlide(currentSlide+1);
  }

  //Go to the previous slide
  let goToPreviousSlide = () => {
    showSlide(currentSlide-1);
  }

  // Running tests
  // goToNextSlide();
  // showSlide(1);
}

init();

