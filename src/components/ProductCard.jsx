import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import Card from "./Card";

const ProductCard = () => {
  const [produtos, getProdutos] = useState([]);

  useEffect ( () => {
    axios.get('http://187.87.223.235/api/produtos/')
    .then((response) => {
        getProdutos(response.data.data);
    })
},[])

  return (
    <>
      <h1 className="text-center" id="cat">
        Catálogo
      </h1>
      <div className="row">
        {produtos.map((item, index) => (
          <Card key={item.id} item={item}/>
        ))}
      </div>
    </>
  );
};

export default ProductCard;