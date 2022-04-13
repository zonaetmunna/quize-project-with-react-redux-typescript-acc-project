
// Cart
// enum cartAction types
export enum cartActionTypes{
     ADD_TO_CART='add_to_cart',
     REMOVE_FROM_CART='remove_from_cart',
     CLEAR_CART='clear_cart'
}
// interface cartAction type
export  interface addToCart{
     type:cartActionTypes.ADD_TO_CART,
     payLoad:iProducts
}
export  interface removeFromCart{
     type:cartActionTypes.REMOVE_FROM_CART,
     payLoad:string
}
 export interface clearCart{
     type:cartActionTypes.CLEAR_CART  
}

export type cartActionType=addToCart|removeFromCart|clearCart;

// auth
//enum authAction type
export enum authActionTypes{
     LOGIN_SUCCESS='login/success',
     LOGIN_PENDING='login/pending',
     LOGIN_FAIL='login/fail',
     LOGOUT='logOut'
}
// interface authAction type
interface loginSuccess{
     type:authActionTypes.LOGIN_SUCCESS,
     payLoad:iAuthUser
}
interface loginPending{
     type:authActionTypes.LOGIN_PENDING,

}
interface loginFail{
     type:authActionTypes.LOGIN_FAIL,
     payLoad:string
}
interface logOUt{
     type:authActionTypes.LOGOUT
}
export type authActionType=loginSuccess|loginPending|loginFail|logOUt;

