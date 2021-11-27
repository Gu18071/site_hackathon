
import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import Button from './Button';

const recu = () => {

    function formataValor(valor) {
        valor = parseFloat(valor);
        return valor.toLocaleString('pt-br',{style:'currency', currency:'BRL'});
    }


    const [produtos,getProdutos] = useState([]);

    useEffect ( () => {
        axios.get('http://cssmodas.herokuapp.com/api/produtos/')
        .then((response) => {
            //console.log(response.data);
            getProdutos(response.data.data);
        })
    },[])


    return(
        <>
            <h1 className="text-center" id="cat">Catálogo</h1>
            <div className="row">
                { produtos.map((item,index) => (
                    <div className="col-12 col-md-3">
                        <div className="product-card">
                         <div className="product-card__image">
                            <img src={'https://cssmodas.herokuapp.com/images/'+item.foto} className="w-110"
                            alt={item.produto}></img>
                            <img src={'https://cssmodas.herokuapp.com/images/'+item.foto} className="w-110"
                            alt={item.produto}></img>
                            </div>
                            <h3 className="product-card__name">{item.produto}</h3>
                            <h4 className="product-card__descricao">{item.descricao}</h4>
                            <div className="product-card__price">
                                {formataValor(item.valor)}
                                <span className="product-card__price__old">
                                   <del>{formataValor(item.promo)}</del>
                                </span>
                            </div>
                            <a href={item.whatsapp}>
                            <Button
                             backgroundColor= "lightgreen"
                             size="sm"
                             icon="bx bxl-whatsapp" 
                             animate={true}
                            >
                                empresa:{item.empresa_id}

                            </Button>
                            </a>
                        </div>
                    </div>
                ))
                }
            </div>
        </>

    )
}

export default recu
