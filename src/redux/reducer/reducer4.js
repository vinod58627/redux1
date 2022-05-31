import { VIN } from "../Action/action4";
 const initialState={
     vin: []
 }
export const vinReducer=(state=initialState, action)=>{
    switch(action.type){
        case VIN :
            return {...state, vin: action.payload}
        default: 
        return state
    }

}