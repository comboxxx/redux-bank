import { FETCH_HISTORY } from '../actions/TransactionHistory'

const reducer = (state = [], action) => {
    switch (action.type) {
        case FETCH_HISTORY:
        
            return action.payload
       
        default:
    }
    return state
}

export default reducer