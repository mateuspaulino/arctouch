// import Carousel from './components/Carousel';
import removeClass from './helpers/util';
import './../static/sass/main.scss';

async function init() {

  //bind querySelector
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  //init variables
  // let slideActual = 0;

  //DOM elements
  let slide = $$('.feedback__carousel__container__list__item');
  let slideActivated = document.getElementsByClassName('feedback__carousel__container__list__item active');

  const showSlide = (number) => {
    removeClass(slideActivated,'active');
    slide[number].classList.add('active');
  }

  //recursive function
  // const removeClass = (elements, className) => {
  //   //elements must be a HTML collection
  //   elements[0].classList.remove(className);
  //   if (elements[0]){
  //     removeClass(elements, className);
  //   }
  // }

  showSlide(1);
}

init();

