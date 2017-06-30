import React from 'react';
import _ from 'lodash'
let UserInfoBody = ( { userDetail, balance } ) => {
     
     
    return (
        <div >
            <center><h1 className="title">Profile</h1>
                <b> ชื่อบัญชี: {userDetail.firstName} {userDetail.lastName}<br />
                    เลขที่บัญชี: {userDetail.key}<br />
                    ยอดเงินคงเหลือ:{balance}</b><br /><br />
            </center>

        </div>
    )
}

export default UserInfoBody