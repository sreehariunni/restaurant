import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restaurantListReducer } from "./reducers/restaurantReducers";

// reducer
const reducers=combineReducers({

    restaurentReducer:restaurantListReducer

})

// middleware
const middleware=[thunk]   

// create store      -                            spread opreator
const store=createStore(reducers,applyMiddleware(...middleware)) 


export default store