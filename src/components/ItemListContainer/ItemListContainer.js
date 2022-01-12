
import ItemCount from "../ItemCount/ItemCount"
import "./ItemListContainer.css"

export const ItemListContainer=({greeting})=>{
    return(
    <div className="itemListContainer">
         <h1 className="greeting">{greeting}</h1>
        <ItemCount stock={15} initial={1}/>
    
     </div>  


    
    )
}