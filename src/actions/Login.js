import _ from 'lodash'
import { userRef } from '../firebaseRef'
import * as firebase from 'firebase'
export const LOGIN = 'LOGIN'
var provider = new firebase.auth.GoogleAuthProvider();

// export function login(username,password) {
//     return {
//         type: RECIEPT_CHANGE_VIEWMODE, payload: { username,password }
//     }
// }

export function login(username, password) {

    return (dispatch, getState) => {
        firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
  var token = result.credential.accessToken;
  // The signed-in user info.
  var user = result.user;
  alert(JSON.stringify(user.uid))
  // ...
}).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // The email of the user's account used.
  var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
  var credential = error.credential;
  // ...
});
//         firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
//   // Handle Errors here.
//   let errorCode = error.code;
//   let errorMessage = error.message;
//   debugger
//   if(errorMessage)
//   {
//       console.log(errorMessage)
//   }
//   else 
//   {
//       console.log(errorMessage)
//   }
// });


        // userRef.orderByChild("username").equalTo(username).limitToFirst(1).on('value', (snapshot) => {
            

            
        //     if (snapshot.val()) {
        //         let loginData = _.values(snapshot.val())
        //         debugger
        //        if(password === loginData[0].password)
        //        {    
        //             dispatch({
        //             type: LOGIN,
        //             payload: loginData[0]
        //         })
        //        }
        //        else{
        //            alert("รหัสผ่านไม่ถูกต้อง")
        //        }
        //     }
        //     else{
        //         alert("ข้อมูลไม่ถูกต้อง")
        //     }

        // }
        // )
    }


}


