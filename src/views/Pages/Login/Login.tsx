import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import login from '../../../redux/actions/authAction';
import AuthService from '../../../services/Auth.Service';




const Login = () => {
     const { register, handleSubmit } = useForm<iLoginData>();
     const dispatch=useDispatch();
     // handleSubmit
     const handleLogin=(data:iLoginData)=>{
          console.log(data);
          AuthService.login(data).then((user:iAuthUser)=>console.log(user));
          dispatch(login(data));
     } 

     return (
          <div>
               <form onSubmit={handleSubmit(handleLogin)} >
                    <input type="email"  placeholder='email'{...register("email")} />
                    <br />
                    <input type="password"  placeholder='password'{...register("password")} />
                    <br />
                    <button type='submit'>Login</button>
               </form>
          </div>
     );
};

export default Login;