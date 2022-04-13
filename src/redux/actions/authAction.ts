import { authActionType,authActionTypes } from './../types';
import { Dispatch } from 'react';
import AuthService from '../../services/Auth.Service';



const login=(payLoad:iLoginData)=>{


     return(dispatch:Dispatch<authActionType>)=>{
          dispatch({
               type:authActionTypes.LOGIN_PENDING,  
          })
          AuthService.login(payLoad)
          .then(user=>dispatch({
               type:authActionTypes.LOGIN_SUCCESS,
               payLoad:user
          }))
          .catch(err=>{
               dispatch({
                    type:authActionTypes.LOGIN_FAIL,
                    payLoad:err?.response?.data?.message
               })
          })
     }    
}

export default login;