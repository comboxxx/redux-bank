import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchUser } from '../actions/User'
import FormPin from './FormPin'
import { pinVisible, modalVisible } from '../actions/UI'
import UserInfoTopRight from './UserInfoTopRight'
import UserInfoBody from './UserInfoBody'
import { addCurrentUser, sendDepositDataToFirebase, sendWithdrawDataToFirebase } from '../actions/CurrentUser'
import _ from 'lodash'
import TransactionModal from './TransactionModal'
import { transactionHistory } from '../actions/TransactionHistory'
import TransactionHistory from './TransactionHistory'
class UserAccount extends Component {
    constructor(props) {
        super(props)
        this.state = {
            topic: '',
            buttons: [],
            label: ''
        }
        this.switchVisible = this.switchVisible.bind(this)
        this.addCurrentUser = this.addCurrentUser.bind(this)
        this.signOut = this.signOut.bind(this)
        this.openDepositModal = this.openDepositModal.bind(this)
        this.deposit = this.deposit.bind(this)
        this.openWithdrawModal = this.openWithdrawModal.bind(this)
        this.withdraw = this.withdraw.bind(this)

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
    openWithdrawModal() {
        let button = []
        button.push(<button className="button is-primary" onClick={() => this.withdraw()} >ตกลง</button>)
        button.push(<button className="button" onClick={() => this.switchVisible("transaction", false)}>ยกเลิก</button>)
        this.setState({
            topic: "ถอนเงิน",
            buttons: button,
            label: "จำนวนเงินที่ต้องการถอน"
        })
        this.props.transactionModalVisible(true)
    }
    withdraw() {

        const { sendWithdrawDataToFirebase, form } = this.props
        this.switchVisible("transaction", false)
        if (form.TransactionForm.values) {
            sendWithdrawDataToFirebase(form.TransactionForm.values.amount)
        }
        else {
            alert("กรุณาระบุจำนวนเงินที่ต้องการฝาก")

        }

    }




    addCurrentUser() {
        let { User, form, userPin, addCurrentUser, transactionHistory } = this.props
        let data
        if (userPin.values) {
            data = _.find(User, function (o) { return o.pin === userPin.values.pin })
            if (data) {
                addCurrentUser(data)
                this.switchVisible("pin", false)
                transactionHistory(data.key)
            } else {
                alert("รหัส PIN ไม่ถูกต้อง")
            }

        }
        else {
            alert("กรุณากรอกรหัส PIN")
        }


    }
    signOut() {
        this.switchVisible("pin", true)
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
    componentDidMount() {
        let { fetchUserFromFirebase } = this.props
        fetchUserFromFirebase()

    }
    render() {
        let { topic, buttons, label } = this.state
        let { pinUI, userInfo, CurrentUser, transactionModal, Loading, histories , balance} = this.props
        return (
            <div className="container">
                {
                    transactionModal &&
                    <TransactionModal label={label} topic={topic} buttons={buttons} close={this.switchVisible} user={CurrentUser} />
                }
                {
                    userInfo &&
                    <div>
                        <UserInfoTopRight userDetail={CurrentUser} signOut={this.signOut} />
                        <hr />
                    </div>

                }

                <br />
                {pinUI &&
                    <div className="columns">
                        <FormPin addCurrentUser={this.addCurrentUser} Loading={Loading} />
                    </div>}
                {userInfo && <div>
                    <UserInfoBody userDetail={CurrentUser}   balance={balance}   />
                    <center><h1 className="title">เลือกทำรายการ</h1>
                        <button className="button is-primary" disabled>โอน</button>&nbsp;
        <button onClick={() => this.openDepositModal()} className="button is-primary">ฝาก</button>&nbsp;
        <button className="button is-primary" onClick={() => this.openWithdrawModal()}>ถอน</button></center>
                    <br />
                    <TransactionHistory histories={histories} />
                </div>
                }
            </div>
        )
    }
}

function mapStatetoProps(state) {
    let { form, UI, User, CurrentUser, Loading, TransactionHistory } = state

    let balance = _.reduce(TransactionHistory, function (sum, history) {
        return sum + parseInt (history.amount)
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
        },
        transactionHistory(accountNumber) {
            dispatch(transactionHistory(accountNumber))
        }
    }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(UserAccount)