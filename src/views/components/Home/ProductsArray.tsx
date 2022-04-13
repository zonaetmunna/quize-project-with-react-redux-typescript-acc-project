import React from 'react';
import ProductCard from '../Common/ProductCard';

const ProductsArray= ({products}:{products:iProducts[]}) => {
     return (
          <div>
              {products.map(product=><ProductCard product={product}></ProductCard>)} 
          </div>
     );
};

export default ProductsArray;