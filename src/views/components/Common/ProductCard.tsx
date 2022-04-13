import React from 'react';

const ProductCard = ({product,onClick}:{product:iProducts,onClick:()=>void}) => {
     return (
          <div className='p-3 rounded-small onClick={()=>onClick} '>
               <div>
                    <img src="" alt="" />
               </div>
               <div>
                    <h4>product title</h4>
                    <h5>product price</h5>
               </div>
          </div>
     );
};

export default ProductCard;