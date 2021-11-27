import React from 'react';
import Helmet from '../components/Helmet';
import ProductCard from '../components/ProductCard';

const Catalog = () => {
    return (
        <Helmet title="Catálogo">
             <ProductCard/>
        </Helmet>
    )
}

export default Catalog
