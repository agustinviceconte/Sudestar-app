import {Item} from "../Item/Item";
import "./ItemDetail.css"

export const ItemDetail = ({ itemsDetail }) => {
    console.log("Productos en Items Details", itemsDetail);
    return (
      <div className="contenedorItems">
        <h1 className="titleID">Item Detail</h1>
      <div className="Items">
        
        {itemsDetail.map((itemDetail) => {
          return (
            <Item
              key={itemDetail.id}
              title={itemDetail.title}
              pictureUrl={itemDetail.image}
              price={itemDetail.price}
              description={itemDetail.description}
            />
          );
        })}
      </div>
      </div>
    );
  };



