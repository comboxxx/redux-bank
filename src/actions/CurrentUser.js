import _ from 'lodash'
import { userRef, transactionHistoryRef } from '../firebaseRef'
import * as moment from 'moment';






export const ADD_CURRENT_USER = 'ADD_CURRENT_USER'
export const UPDATE_DATA = 'UPDATE_DATA'

// const monthList = ["ม.ค.","ก.พ.",",มี.ค.","เม.ย.","พ.ค.","มิ.ย.","ก.ค.","ส.ค.","ก.ย.","ต.ค.","พ.ย.","ธ.ค."]
// var dateObj = new Date();
// var month = dateObj.getUTCMonth() ; //months from 1-12
// var day = dateObj.getUTCDate();
// var year = dateObj.getUTCFullYear();
// let newdate = day + "/" + monthList[month] + "/" + year;

// var d = new Date(); // for now
// let hour = d.getHours(); // => 9
// let minute = d.getMinutes(); // =>  30
// let second = d.getSeconds(); // => 51
// let time = hour+":"+minute+":"+second

export function addCurrentUser(data) {

    return {
        type: ADD_CURRENT_USER,
        payload: { ...data }
    }

}

export function sendDepositDataToFirebase(amount) {
    return (dispatch, getState) => {
        const { CurrentUser } = getState()
        let balance = CurrentUser.balance + parseInt(amount)
        // let newData = Object.assign({}, { ...CurrentUser }, { balance: balance, key: null })
        // let updateRef = userRef.child(CurrentUser.key)
        // updateRef.update(newData)
        transactionHistoryRef.push({
            accountNumber: CurrentUser.key,
            amount: parseInt(amount),
            type: "deposit",
            timestamp: moment().format()
        })
        dispatch(updateData(balance))

    }

}

export function updateData(balance) {
    return {
        type: UPDATE_DATA,
        payload: balance
    }
}
//55555
export function sendWithdrawDataToFirebase(amount) {
    return (dispatch, getState) => {
        const { CurrentUser } = getState()
        let balance = CurrentUser.balance - parseInt(amount)
        // let newData = Object.assign({}, { ...CurrentUser }, { balance: balance, key: null })
        // let updateRef = userRef.child(CurrentUser.key)
        // updateRef.update(newData)
        transactionHistoryRef.push({
            accountNumber: CurrentUser.key, amount: -parseInt(amount),
            type: "withdraw", timestamp: moment().format()
        })
        dispatch(updateData(balance))
    }

}

export function sendMoneyTransferDataToFirebase(amount,recieverAccountNumber) {
    return (dispatch, getState) => {
        const { CurrentUser } = getState()
        let balance = CurrentUser.balance - parseInt(amount)
        // let newData = Object.assign({}, { ...CurrentUser }, { balance: balance, key: null })
        // let updateRef = userRef.child(CurrentUser.key)
        // updateRef.update(newData)
        transactionHistoryRef.push({
            accountNumber: CurrentUser.key, amount: -parseInt(amount),
            type: "transfer", timestamp: moment().format() ,remark: "ผู้รับ: "+ recieverAccountNumber
        })

        transactionHistoryRef.push({
            accountNumber: recieverAccountNumber, amount: parseInt(amount),
            type: "recieve", timestamp: moment().format(),remark: "ผู้โอน: "+ CurrentUser.key
        })
        dispatch(updateData(balance))
    }

}

