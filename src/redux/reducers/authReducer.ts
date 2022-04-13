import { authActionType } from './../types';
import { authActionTypes } from "../types";


// state type
interface iAuthState{
     data:iAuthUser|null,
     state:'pending'|'success'|'idle'|'error',
     error:string|null
}
// initialState
const initialState:iAuthState={
     data:null,
     state:'idle',
     error:null
}

function authReducer (state:iAuthState=initialState, action:authActionType){
     switch (action.type) {
          case authActionTypes.LOGIN_SUCCESS:
               return {
                    data:action.payLoad,
                    state:'success',
                    error:null
               };
          case authActionTypes.LOGIN_PENDING:
               return {
                    data:null,
                    state:'pending',
                    error:null
               };
          case authActionTypes.LOGIN_FAIL:
               return {
                    data:null,
                    state:'fail',
                    error:action.payLoad
               };
          case authActionTypes.LOGOUT:
               return initialState;
          default:
          return state;
     }
}

export default authReducer;