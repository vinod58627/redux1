import { VINOD_POSTS } from "../Action/action2";
const initialState = {
    user: []
  };

export const vinodReducer=(state=initialState, action)=>{
switch (action.type){
    case VINOD_POSTS:
        return{...state, user: action.payload}
    default :
       return state;
}

}
