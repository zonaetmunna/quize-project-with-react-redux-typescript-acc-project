import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
     return (
          <div className='container mx-auto'>
               <div className='flex'>
                    <div>
                         <img src="" alt="" />
                    </div>
                    <div>
                         <input type="text" />
                    </div>
                    <div>
                         <Link to='/home'>home</Link>
                         <Link to='/login'>Login</Link>
                    </div>
               </div>
             
          </div>
     );
};

export default Header;