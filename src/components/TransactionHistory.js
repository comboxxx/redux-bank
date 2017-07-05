import React from 'react'
import moment from 'moment'

const TransactionHistory = (props) => {
    let { histories } = props
    return (
        <center><div style={{width:'95%'}}> 
        <h1 className="title">ประวัติธุรกรรม</h1>
        <table className="table is-striped is-bordered">
            <thead>
                <tr>
                    <th>ประเภทธุรกรรม</th>
                    <th>จำนวนเงิน</th>
                    <th>วัน&เวลา</th>
                    <th>หมายเหตุ</th>
                </tr>
            </thead>
            <tbody>
                {histories.map((history, i) => {
                    return <tr>
                    <td>{history.type}</td>
                    <td>{history.amount}</td>
                    <td>{moment(history.timestamp).format("HH:mm:ss  DD/MMMM/YYYY ")  }</td>
                    <td>{history.remark}</td>
                    </tr>
                })}
            </tbody>
        </table>
         </div></center>
    )
}

export default TransactionHistory