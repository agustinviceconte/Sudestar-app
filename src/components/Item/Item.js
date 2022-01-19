import React from "react";
import "../Item/Item.css"
export const Item=({title,price,pictureUrl,description})=>{
    return(
      <div className="item">  
        <h2 className="title">{title}</h2>
        <img className="image" src= {pictureUrl} alt="img"/> 
        <h2 className="description">{description}</h2>
        <h2>US$: {price}</h2>
        
        
    </div>
    )
};
