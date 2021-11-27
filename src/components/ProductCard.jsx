import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";

import Card from "./Card";

const ProductCard = () => {
  const [produtos, setProdutos] = useState([]);
  const [empresas, setEmpresas] = useState([]);

  useEffect(() => {
    axios
      .get("http://187.87.223.235/api/produtos/")
      .then((response) => {
        //console.log(response.data);
        setProdutos(response.data.data);
      });
    axios
      .get("http://187.87.223.235/api/empresas/")
      .then((response) => {
        //console.log(response.data);
        setEmpresas(response.data.data);
      });
  }, []);

  return (
    <>
      <h1 className="text-center" id="cat">
        Catálogo
      </h1>
      <div className="row">
        {produtos.map((item, index) => (
          <Card key={item.id} item={item} empresas={empresas} />
        ))}
      </div>
    </>
  );
};

export default ProductCard;