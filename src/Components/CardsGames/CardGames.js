import React from 'react';
import './CardGames.css'
import image from '../../Images/games.jpg'

const CardGames = () => {
    return (
        <div class="card" style={{width: "18rem"}}>
  <img src={image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Games</h5>
    <p class="card-text">There will be game description which will describe the game functionality. The style is yet to be added</p>
    <a href="#" class="btn btn-primary">Play</a>
  </div>
</div>
    );
};

export default CardGames;