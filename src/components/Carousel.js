import removeClass, { binder } from './../helpers/util';

export default function Carousel() {
    // bind querySelector
    const $$ = document.querySelectorAll.bind(document);

    // init variables
    let currentSlide = 0;
    const timeOut = 4000;
    const automaticInterval = setInterval(() => { goToNextSlide(); }, timeOut);

    // DOM elements
    const slide = $$('.feedback__carousel__container__list__item');
    const dot = $$('.feedback__carousel__container__dots__dot');
    const slideActivated = document.getElementsByClassName('feedback__carousel__container__list__item active');
    const dotActivated = document.getElementsByClassName('feedback__carousel__container__dots__dot active');

    // Shows to the specific slide
    const slideSize = slide.length - 1;
    const showSlide = (number) => {
        // value protection - it must be a number
        if (typeof number !== 'number') return false;

        // if it isn't an possible number, go to the first slide
        if (number > slideSize) {
            currentSlide = 0;
            number = 0;
        }

        // remove class from the last element and add to the current element
        removeClass(slideActivated, 'active');
        slide[number].classList.add('active');

        // paint the dot and update the currentSlide value
        paintDot(number);
        currentSlide = number;
    };

    // Go to the next slide
    const goToNextSlide = () => {
        showSlide(currentSlide + 1);
    };

    const paintDot = (number) => {
        // value protection - it must be a number
        if (typeof number !== 'number') return false;

        // if it isn't an possible number, paint the first dor
        if (number > slideSize) {
            number = 0;
        }

        // remove class from the last element and add to the current element
        removeClass(dotActivated, 'active');
        dot[number].classList.add('active');
    };

    // Click on dot
    binder(
        dot,
        'click',
        ({ currentTarget }) => {
            // Stop automactic interval
            clearInterval(automaticInterval);

            // Get dot's number
            const index = Number(currentTarget.getAttribute('data-index'));

            // Goes to the selected slide
            showSlide(index);
        }
    );
}
