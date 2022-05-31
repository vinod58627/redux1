

const reducerFn = (state={counter: 0}, action) => {


    /*if(action.type=== "INC"){
        return({counter: state.counter+1});
    }
    if(action.type=== "DEC"){
        return({counter: state.counter-1})
    }
    if(action.type=== "ADD"){
        return({counter: state.counter+ action.payload})
    }
    return state;*/

    
    switch(action.type){
        case "INC":
        return({counter: state.counter+1});
        case "DEC":
        return({counter: state.counter-1})
        case "ADD":
        return({counter: state.counter + action.payload})

        default:
            return state;
    }

    

}
export default reducerFn;