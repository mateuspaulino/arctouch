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
  let automaticInterval = setInterval(function(){goToNextSlide();}, 3300);

  //DOM elements
  let slide = $$('.feedback__carousel__container__list__item');
  let dot = $$('.feedback__carousel__container__dots__dot');
  let slideActivated = document.getElementsByClassName('feedback__carousel__container__list__item active');
  let dotActivated = document.getElementsByClassName('feedback__carousel__container__dots__dot active');

  //Shows to the specific slide
  let slideSize = slide.length - 1;
  let showSlide = (number) => {
    //value protection - it must be a number
    if(typeof number !== 'number') return false

    //if it isn't an possible number, go to the first slide
    if(number>slideSize){
      currentSlide = 0;
      number = 0;
    }

    //remove class from the last element and add to the current element
    removeClass(slideActivated,'active');
    slide[number].classList.add('active');
    
    //paint the dot and update the currentSlide value
    paintDot(number);
    currentSlide = number;
  }

  //Go to the next slide
  let goToNextSlide = () => {
    showSlide(currentSlide + 1);
  }

  //Go to the previous slide
  let goToPreviousSlide = () => {
    showSlide(currentSlide - 1);
  }

  let paintDot = (number) => {
     //value protection - it must be a number
     if(typeof number !== 'number') return false

     //if it isn't an possible number, paint the first dor
     if(number>slideSize){
       number = 0;
     }

     //remove class from the last element and add to the current element
     removeClass(dotActivated,'active');
     dot[number].classList.add('active');
  }

  // Running tests
  // goToNextSlide();
  // showSlide(1);
}

init();

