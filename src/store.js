import logger from 'redux-logger'
import { createStore, combineReducers , applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
// import Login from './reducers/Login'
import User from './reducers/User'
import UI from './reducers/UI'
import CurrentUser from './reducers/CurrentUser'
import Loading from './reducers/Loading'
import TransactionHistory from './reducers/TransactionHistory'

let store = createStore(combineReducers(
    {
        form:formReducer,User,UI,CurrentUser,Loading,TransactionHistory
        
    }
),applyMiddleware(logger , thunk)
)
export default store