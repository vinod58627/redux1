import { combineReducers } from 'redux'

import reducerFn from './index'
import { postsReducer } from './reducer1'
import { vinodReducer } from './reducer2'
import { kumarReducer } from './reducer3'
import { vinReducer } from './reducer4'
 

const rootReducer = combineReducers({
    reducerFn:reducerFn,
    postsReducer:postsReducer ,
    users: vinodReducer,
    vinReducer : vinReducer,
    vin : kumarReducer
    
})
export default rootReducer;