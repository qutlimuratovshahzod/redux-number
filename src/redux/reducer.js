import { CUSTOM, DECREMENT, DELETE, INCREMENT, MINUS10, PLUS10 } from "./types";

export const reducer = (state = 0, action) => {
    switch(action.type){
        case INCREMENT: return state + 1;
        case DECREMENT: return state - 1;
        case DELETE: return state = 0 ;
        case PLUS10: return state + 10 ;
        case MINUS10: return state - 10 ;
        case CUSTOM: return state = state + action.payload 
        default : return state   
    }
}