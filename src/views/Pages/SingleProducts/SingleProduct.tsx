import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import useAPI from '../../../hooks/useAPI';
import { add_to_cart, remove_from_cart } from '../../../redux/actions/cartAction';
import productService from '../../../services/product.service';

const SingleProduct = () => {
     const {id=''}=useParams();

     const {data:product}=useAPI<iProducts>(()=>productService.getAllProducts);

     // 
     // cons
     const dispatch=useDispatch();

     return (
          <div>
               <button onClick={()=>dispatch(add_to_cart(product as iProducts))}>Add to cart</button>
               <button onClick={()=>dispatch(remove_from_cart(id as string))}>remove from cart</button>
          </div>
     );
};

export default SingleProduct;