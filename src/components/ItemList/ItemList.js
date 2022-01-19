import {Item} from "../Item/Item";


export const ItemList = ({ products }) => {
  console.log("Productos en ItemList", products);
  return (
    <div>
      <h1 className="titulo">Productos</h1>
    <div className="Items">
      
      {products.map((product) => {
        return (
          <Item
            key={product.id}
            title={product.title}
            pictureUrl={product.pictureUrl}
            price={product.price}
            description={product.description}
          />
        );
      })}
    </div>
    </div>
  );
};


