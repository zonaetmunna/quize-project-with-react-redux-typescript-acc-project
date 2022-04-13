import { cartActionType, cartActionTypes } from "../types";


function cartReducer (state:iProducts[]=[], action:cartActionType){
     switch (action.type) {
          case cartActionTypes.ADD_TO_CART:
               return [...state,action.payLoad];

          case cartActionTypes.REMOVE_FROM_CART:
               return state.filter((item)=>item._id===action.payLoad);

          case cartActionTypes.CLEAR_CART:
               return [];
          default:
          return state;
     }
}

export default  cartReducer;