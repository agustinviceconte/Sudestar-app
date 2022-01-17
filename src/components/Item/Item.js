const Item=({title,price,pictureUrl,description})=>{
    return(
      <div>  
        
        <h2>{title}</h2>
        <h2>{description}</h2>
        <h2>Precio: US${price}</h2>
        <img className="Img" alt={title} src={pictureUrl}></img>
    </div>
    )
};
export default Item;