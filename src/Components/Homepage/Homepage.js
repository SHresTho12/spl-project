import React from 'react';
import './Homepage.css';
import Navbar from '../NavBar/NavBar';
import Carousel from '../Carousel/Carousel'
import CardGames from '../CardsGames/CardGames';

const Homepage = () => {
    return (
        <div>
            <Navbar></Navbar>


<Carousel></Carousel>

<h1>Games</h1>

<div className="container">
<div className="gamesList d-flex justify-content-around">
   <li className="gameItem"><CardGames></CardGames></li>
   <li className="gameItem"><CardGames></CardGames></li>
   <li className="gameItem"><CardGames></CardGames></li>
   <li className="gameItem"><CardGames></CardGames></li>

  
    
</div>
</div>



            
        </div>
    );
};

export default Homepage;