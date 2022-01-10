
import "./ItemListContainer.css"

export const ItemListContainer=({greeting})=>{
    return(
    <div className="itemListContainer">
    <h1 className="greeting">{greeting}</h1>
    </div>
    
    )
}