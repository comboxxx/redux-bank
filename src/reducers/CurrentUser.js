import { ADD_CURRENT_USER,UPDATE_DATA} from '../actions/CurrentUser'
import UI from './exampleData/UI'
const reducer = (state = {}, action) => {
    switch (action.type) {

        case ADD_CURRENT_USER:
               
                return action.payload
        case UPDATE_DATA:
        let newCurrentUserData = Object.assign({}, {...state}  , {balance : action.payload} )
        return newCurrentUserData
        default:
    }
    return state
}

export default reducer