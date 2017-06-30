import { FETCH_USER } from '../actions/User'
const reducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_USER:
        
            return action.payload
       
        default:
    }
    return state
}

export default reducer