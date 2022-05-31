import { KUMAR_USERS } from './../Action/action3'

const initialState={
    products: []
}
export const kumarReducer=(state=initialState, action)=>{
    switch(action.type){
        case KUMAR_USERS:
            return {...state, products: action.payload};
        default :
        return state
    }
    
}