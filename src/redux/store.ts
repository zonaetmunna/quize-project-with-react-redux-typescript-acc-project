import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, combineReducers, createStore } from "redux";
import cartReducer from "./reducers/cartReducer";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 


// redux persist config add
const persistConfig = {
     key: 'root',
     storage,
}

// make rootReducers for many reducers combine one root reducers
const rootReducer=combineReducers({
     cart:cartReducer,
     auth:authReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)
// export store
export const store=createStore(persistedReducer,composeWithDevTools(applyMiddleware(thunk)));

const persister = persistStore(store)
export default persister;