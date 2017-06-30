import { LOGIN } from '../actions/Login'




const reducer = (state = {}, action) => {
    switch (action.type) {
        
        case LOGIN:
 
        return  action.payload;
    
        default:
        break;
    }
    return state
}

export default reducer