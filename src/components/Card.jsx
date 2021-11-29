import React from "react";
import Button from "./Button";

const Card = ({ item }) => {

  function formataValor(valor) {
    valor = parseFloat(valor);
    return valor.toLocaleString('pt-br',{style:'currency', currency:'BRL'});
}
  
  return (
    <div key={item.id} className="col-12 col-md-3">
      <div className="product-card">
        <div className="product-card__image">
          <img
            src={"http://187.87.223.235/images/" + item.foto}
            className="w-110"
            alt={item.produto}
          ></img>
          <img
            src={"http://187.87.223.235/images/" + item.foto}
            className="w-110"
            alt={item.produto}
          ></img>
        </div>
        <h3 className="product-card__name">{item.produto}</h3>
        <h4 className="product-card__descricao">{item.descricao}</h4>
        <div className="product-card__price">
        <del>{formataValor(item.valor)}</del>
          <span className="product-card_price_old">
            {formataValor(item.promo)}
          </span>
        </div>
        <a href={'https://api.whatsapp.com/send?phone='+item.whatsapp+'&text='} target="_blank" rel="noreferrer">
          <Button
            backgroundColor="lightgreen"
            size="sm"
            icon="bx bxl-whatsapp"
            animate={true}
          > 
            empresa: {item.empresa}
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Card;