//not sure 
const track = document.querySelector('.carousel__track');
//stores the slides in the array
const slides = Array.from(track.children);
//object for next button
const nextButton = document.querySelector('.carousel__button--next');
//object for prev button
const prevButton = document.querySelector('.carousel__button--prev');
//object for indicator nav
const dotsNav = document.querySelector('.carousel__nav');
//stores the indicator dots in the array
const dots = Array.from(dotsNav.children);

//takes the width of the slides
const slideWidth = slides[0].getBoundingClientRect().width;

//function that places the slides next to one another
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

//not sure 
const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translatex(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    //removes the node
    targetSlide.classList.add('current-slide');
}

//not sure: dot turns darker when selected
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}


const hideShowArrows = (slides, prevButton, nextButton, targetSlide) => {
    if (targetIndex === 0){
        prevButton.classList.add('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
    else if (targetIndex === slides.length - 1){
        prevButton.classList.remove('is-hidden');
        nextButton.classList.add('is-hidden');
    }
    else {
        prevButton.classList.remove('is-hidden');
        nextButton.classList.remove('is-hidden');
    }
}

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);
    //error: fixed

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling; //fixed
    const nextIndex = slides.findIndex(slide => slide === nextSlide);
    //error: not complete

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, nextDot); //fixed
    hideShowArrows(slides, prevButton, nextButton, nextIndex); // fixed
});

dotsNav.addEventListener('click', e => {
     //what indiacator was clicked on
     const targetDot = e.target.closest('button');
     if (!targetDot) return;

     const currentSlide = track.querySelector('.current-slide');
     const currentDot = dotsNav.querySelector('.current-slide');
     const targetIndex = dots.findIndex(dot => dot === targetDot);
     const targetSlide = slides[targetIndex];

     moveToSlide(track, currentSlide, targetSlide);
     updateDots(currentDot, targetDot);
     hideShowArrows(slides, prevButton, nextButton, nextIndex);
})


//Author: M R