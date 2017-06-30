import React from 'react';

let UserInfoTopRight = (props) => {
    let {userDetail,signOut} = props
    return (
        <div style={{width:'95%',}}>
        <h1 style={{textAlign:'right'}} className="subtitle">Welcome <b>{userDetail.firstName} {userDetail.lastName} !</b>
        &nbsp;<button className="button is-danger" onClick={signOut}>Logout</button></h1>
        
        </div>
    )
}

export default UserInfoTopRight