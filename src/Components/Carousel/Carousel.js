import React from 'react';
import './Carousel.css';
import right from '../../Images/right.jpg';
import left from '../../Images/left.png';
import image1 from '../../Images/image1.jpg';
import image2 from '../../Images/image2.jpg';
import image3 from '../../Images/image3.jpg';
import './Index'
const Carousel = () => {
  return (
    
       
     
    
     <div className="carousel">
       <button className="carousel_button carousel_button--left is-hidden"><img src={left} alt=""/></button>
         
       
       <div className="carousel_track-container">
         <ul className="carousel_track">
           <li className="carousel_slide">
           <img className="carousel_image" src={image1} alt=""/>
           </li>            
           <li className="carousel_slide">
           <img className="carousel_image" src={image2} alt=""/>
           </li>            
           <li className="carousel_slide">
           <img className="carousel_image" src={image3} alt=""/>
           </li>            
 
         </ul>
       </div>
       <button className="carousel_button carousel_button--right">
       <img src={right} alt=""/>
       </button>
       <div className="carousel_nav">
         <button className="carousel_indicator current-slide"></button>
         <button className="carousel_indicator"></button>
         <button className="carousel_indicator"></button>
        
       </div>
     </div>
     
   
  );
};

export default Carousel;