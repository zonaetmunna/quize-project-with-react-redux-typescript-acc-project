import React, { Suspense } from 'react';
import {Routes,Route,} from "react-router-dom";
import routes from '../../../routes/routes';
// import Login from '../Login/Login';
import SingleProduct from '../SingleProducts/SingleProduct';
import Footer from './Footer';
import Header from './Header';
// import Home from '../Home/Home';


const filterRoutes=routes.filter((route)=>route.role.includes('admin'));


const Main = () => {
     return (
          <div className='container mx-auto'>
               <div>
                    <Header></Header>
               </div>
               <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                    {
                         routes.map(({path,element},idx)=>{
                              return (route.element&& (<Route element={<route.element/>} path={route.path} key={idx}></Route>))
                         })
                    }
                    </Routes>
                    
                    
               </Suspense>
               <div>
                    <Footer></Footer>
               </div>
          </div>
          
     
     );
};

export default Main;