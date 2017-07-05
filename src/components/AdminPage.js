import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUser } from '../actions/User'
import { addCurrentUser, sendDepositDataToFirebase, sendWithdrawDataToFirebase,sendMoneyTransferDataToFirebase } from '../actions/CurrentUser'
import _ from 'lodash'
import TransactionModal from './TransactionModal'
import { pinVisible, modalVisible } from '../actions/UI'
import { transactionHistory } from '../actions/TransactionHistory'


class AdminPage extends Component {
    componentDidMount() {
        let { fetchUserFromFirebase } = this.props
        fetchUserFromFirebase()
        this.openDepositModal = this.openDepositModal.bind(this)
        this.deposit = this.deposit.bind(this)
        this.switchVisible = this.switchVisible.bind(this)

         this.state = {
            topic: '',
            buttons: [],
            label: '',
            labelReciever: ''

        }
    }
    openDepositModal() {
        let button = []
        button.push(<button className="button is-primary" onClick={() => this.deposit()} >ตกลง</button>)
        button.push(<button className="button" onClick={() => this.switchVisible("transaction", false)}>ยกเลิก</button>)
        this.setState({
            topic: "ฝากเงิน",
            buttons: button,
            label: "จำนวนเงินที่ต้องการฝาก"
        })
        this.props.transactionModalVisible(true)
    }
    deposit() {

        const { sendDepositDataToFirebase, form } = this.props
        this.switchVisible("transaction", false)
        if (form.TransactionForm.values) {
            sendDepositDataToFirebase(form.TransactionForm.values.amount)
        }
        else {
            alert("กรุณาระบุจำนวนเงินที่ต้องการฝาก")

        }

    }
    switchVisible(name, mode) {

        let { switchPinVisible, transactionModalVisible } = this.props
        switch (name) {
            case "pin":
                return switchPinVisible(mode)
            case "transaction":
                return transactionModalVisible(mode)
            default:
                return
        }
    }
    render() {
        // let { topic, buttons, label, labelReciever  } = this.state
        let { User,transactionModal } = this.props
        // labelReciever={labelReciever} label={label} topic={topic} buttons={buttons} close={this.switchVisible} user={CurrentUser} 
        return (
            <div className="container">
                
                <table className="table is-striped is-bordered">
                {
                    transactionModal &&
                    <TransactionModal  />
                }
                            <thead>
                                <tr>
                                    <th>เลขที่บัญชี</th>
                                    <th>ชื่อบัญชี</th>
                                    <th>ยอดเงินคงเหลือ</th>
                                    <th>สถานะ</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                    User.map((detail, i) => {
                        return <tr>
                                    <td>{detail.key}</td>
                                    <td>{detail.firstName} {detail.lastName}</td>
                                    <td>{detail.balance}</td>
                                    <td>{detail.type}</td>
                                    <td><button onClick={() => this.openMoneyTransferModal()} className="button is-primary">โอน</button>&nbsp;
        <button onClick={() => this.openDepositModal()} className="button is-primary">ฝาก</button>&nbsp;
        <button className="button is-primary" onClick={() => this.openWithdrawModal()}>ถอน</button></td>
                                </tr>
                    })
                }

                            </tbody>
                        </table>
            </div>
        )
    }

}

function mapStatetoProps(state) {
    let { form, UI, User, CurrentUser, Loading, TransactionHistory } = state

    let balance = _.reduce(TransactionHistory, function (sum, history) {
        return sum + parseInt(history.amount)
    }, 0);

    return {
        pinUI: UI.pin.visible,
        userInfo: UI.userInfo.visible,
        User,
        balance,
        userPin: form.Pin,
        CurrentUser,
        transactionModal: UI.transactionModal.visible,
        Loading,
        form,
        histories: TransactionHistory
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        fetchUserFromFirebase() {
            dispatch(fetchUser())
        },
        switchPinVisible(mode) {
            dispatch(pinVisible(mode))
        },
        addCurrentUser(data) {
            dispatch(addCurrentUser(data))
        },
        transactionModalVisible(mode) {
            dispatch(modalVisible(mode))
        },
        sendDepositDataToFirebase(amount) {
            dispatch(sendDepositDataToFirebase(amount))
        },
        sendWithdrawDataToFirebase(amount) {
            dispatch(sendWithdrawDataToFirebase(amount))
        },sendMoneyTransferDataToFirebase(amount,recieverAccountNumber)
        {
            dispatch(sendMoneyTransferDataToFirebase(amount,recieverAccountNumber))
        }
        ,
        transactionHistory(accountNumber) {
            dispatch(transactionHistory(accountNumber))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(AdminPage)