import React from "react";
import Item from "../Item/Item";

const ItemList = ({ listProducts }) => {
  return (
    <>
      {listProducts.map((el) => (
        <Item
          key={el.id}
          imagenUrl={el.imagenUrl}
          name={el.name}
          price={el.price}
          category={el.category}
          stock={el.stock}
          id={el.id}
        />
      ))}
    </>
  );
};

export default ItemList;
