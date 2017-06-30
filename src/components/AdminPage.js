import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUser } from '../actions/User'
import {  modalVisible } from '../actions/UI'
import { addCurrentUser, sendDepositDataToFirebase,sendWithdrawDataToFirebase } from '../actions/CurrentUser'
import _ from 'lodash'
import TransactionModal from './TransactionModal'

class AdminPage extends Component {
    componentDidMount() {
        let { fetchUserFromFirebase } = this.props
        fetchUserFromFirebase()

    }
    render()
    {
        return (
            <div className="container">
                ADMIN
            </div>
        )
    }

}

function mapStatetoProps(state) {
    let { form, UI, User, CurrentUser, Loading, TransactionHistory } = state
    return {
        // pinUI: UI.pin.visible,
        // userInfo: UI.userInfo.visible,
        User,
        // userPin: form.Pin,
        // CurrentUser,
        // transactionModal: UI.transactionModal.visible,
        // Loading,
        // form,
        // histories: TransactionHistory
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        fetchUserFromFirebase() {
            dispatch(fetchUser())
        },
        // switchPinVisible(mode) {
        //     dispatch(pinVisible(mode))
        // },
        // addCurrentUser(data) {
        //     dispatch(addCurrentUser(data))
        // },
        // transactionModalVisible(mode) {
        //     dispatch(modalVisible(mode))
        // },
        // sendDepositDataToFirebase(amount) {
        //     dispatch(sendDepositDataToFirebase(amount))
        // },
        // sendWithdrawDataToFirebase(amount) {
        //     dispatch(sendWithdrawDataToFirebase(amount))
        // },
        // transactionHistory(accountNumber) {
        //     dispatch(transactionHistory(accountNumber))
        // }
    }
}
export default connect(mapStatetoProps,mapDispatchtoProps) (AdminPage)