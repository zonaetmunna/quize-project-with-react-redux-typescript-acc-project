import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAPI from '../../../hooks/useAPI';
import productService from '../../../services/product.service';
import DSlider from '../../components/custom/DSlider';
import ProductsArray from '../../components/Home/ProductsArray';

const Home = () => {

     axios.get()


const {data:products}=useAPI<iProducts[]>(productService.getAllProducts);

     return (
          <main>
               <div>
                    <DSlider></DSlider>
               </div>
               <div>
                    {products&&<ProductsArray products={products}></ProductsArray>}
               </div>
               
          </main>
     );
};

export default Home;