import React from "react";
import Button from "./Button";



const Card = ({ empresas, item }) => {
  const empresa = empresas.find((empresa) => empresa.id === item.empresa_id);

  function formataValor(valor) {
    valor = parseFloat(valor);
    return valor.toLocaleString('pt-br',{style:'currency', currency:'BRL'});
}
  
  return (
    <div key={item.id} className="col-12 col-md-3">
      <div className="product-card">
        <div className="product-card__image">
          <img
            src={"http://187.87.223.235/images/default.jpg/" + item.foto}
            className="w-110"
            alt={item.produto}
          ></img>
          <img
            src={"http://187.87.223.235/images/default.jpg/" + item.foto}
            className="w-110"
            alt={item.produto}
          ></img>
        </div>
        <h3 className="product-card__name">{item.produto}</h3>
        <h4 className="product-card__descricao">{item.descricao}</h4>
        <div className="product-card__price">
          {formataValor(item.valor)}
          <span className="product-card_price_old">
            <del>{formataValor(item.promo)}</del>
          </span>
        </div>
        <a href={empresa?.whatsapp}>
          <Button
            backgroundColor="lightgreen"
            size="sm"
            icon="bx bxl-whatsapp"
            animate={true}
          > 
            empresa: {empresa?.empresa}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Card;