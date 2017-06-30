import { ADD_LOADVALUE} from '../actions/Loading'


const reducer = (state = 0, action) => {

    switch (action.type) {
        case ADD_LOADVALUE: 
            return  state + action.payload
            
        default:
    }
    return state
}

export default reducer