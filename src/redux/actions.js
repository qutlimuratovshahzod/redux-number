import { CUSTOM, DECREMENT, DELETE, INCREMENT, MINUS10, PLUS10 } from "./types";

export const increment = {
    type: INCREMENT,
};
 export const decrement = {
     type: DECREMENT
 };
 export const delete1 = {
     type: DELETE,
 }
 export const plus10 = {
    type: PLUS10,
}
export const minus10 = {
    type: MINUS10,
}
export const custom = (num) => {
   return{
       type: CUSTOM,
       payload: num,
    };
};

