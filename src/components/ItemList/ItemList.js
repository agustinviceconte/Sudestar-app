import Item from "../Item/Item";
import "./Item.css"

const ItemList = ({ products }) => {
  console.log("Productos en ItemList", products);
  return (
    <div className="Items">
      <h1>Productos</h1>
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
  );
};

export default ItemList;
