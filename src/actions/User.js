import { userRef } from '../firebaseRef'
import { addLoadValue } from './Loading'


var _ = require('lodash');
export const FETCH_USER = 'FETCH_USER'
// export const CHANGE_VISIBLE_MODAL = 'CHANGE_VISIBLE_MODAL'




export function fetchUser() {


    return (dispatch, getState) => {
        dispatch(addLoadValue(1))
        userRef.on('value', (snapshot) => {

            let users = snapshot.val();
            let user_computed = _.map(users, (user, key) => {

                user.key = key;

                return user
            })
            dispatch(addLoadValue(-1))


            dispatch({
                type: FETCH_USER,
                payload: user_computed
            })
        })
    }
}



// export function updateUser(userData) {
//     const update = userRef.child(userData.key)
//    let newReciept = Object.assign({}, {...userData}  , {key : null} )

//     return (dispatch, getState) => {
//         update.update(newReciept)
//     }
// }

// export function deleteUser(key) {

//     return (dispatch, getState) => {
//         userRef.child(key).remove()
//     }
// }

// export function insertUser(data) {

//     return (dispatch, getState) => {
//         userRef.push(data)
//     }
// }