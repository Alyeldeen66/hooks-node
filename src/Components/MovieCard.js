import React from 'react';
import '../App.css'
const MovieCard=({name,url,description,rating})=>{
    return(
        <div className="card movie_card">    
             <img style={{width:351,height:261}} className="card-img-top" src={url} alt="Movie img"></img> 
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="movie-info">{description}</p>
                <span style={{float:"right"}}>
                <i className="fas fa-star float-right"></i> {rating}/10
                </span>
            </div>
           
            
        </div>
    );
}   

export default MovieCard;