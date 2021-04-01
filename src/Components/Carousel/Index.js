import React from 'react';

const Index = () => {
  return (
    <div>
      <link rel="stylesheet" href="style.css">
    
    <div class="carousel">
      <button class="carousel_button carousel_button--left">
        <img src="left.png" alt="">
      </button>
      <div class="carousel_track-container">
        <ul class="carousel_track">
          <li class="carousel_slide">
          <img class="carousel_image" src="/src/Images/image1.jpg" alt="">
          </li>            
          <li class="carousel_slide">
          <img class="carousel_image" src="/src/Images/image2.jpg" alt="">
          </li>            
          <li class="carousel_slide">
          <img class="carousel_image" src="/src/Images/image3.jpg" alt="">
          </li>            

        </ul>
      </div>
      <button class="carousel_button carousel_button--right">
      <img src="right.jpg" alt="">
      </button>
      <div class="carousel_nav">
        <button class="carousel_indicator current-slide"></button>
        <button class="carousel_indicator"></button>
        <button class="carousel_indicator"></button>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Index;