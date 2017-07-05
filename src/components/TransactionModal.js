import React from 'react';
import { Field, reduxForm, } from 'redux-form'

let TransactionModal = function (props) {


  const { topic, buttons, close, user, label, labelReciever } = props
  debugger

  return (<div className="container">
    <div className="columns">
      <div className="modal  is-active">
        <div onClick={() => close("transaction", false)} className="modal-background"></div>
        <div className="modal-content" style={{ backgroundColor: 'white', borderRadius: '15px', borderWidth: '10px', borderStyle: ' solid', borderColor: 'lightyellow' }}>
          <center><h1 className="subtitle">{topic}</h1><hr />
            <form >
              <br />
              <p>
                ชื่อบัญชี: {user.firstName} {user.lastName}<br /><br />
                เลขที่บัญชี: {user.key}<br /><br />
                ยอดเงินคงเหลือ:{user.balance}<br /><br />
                <div className="column is-4 ">
                  {
                    topic === "โอนเงิน" &&
                    <div>
                      {labelReciever} <Field className="input" name="reciverAccountNumber" component="input" type="text" />
                    </div>
                  }
                  {label} <Field className="input" name="amount" component="input" type="number" />
                </div>
              </p>
            </form>
            {buttons.map((button, i) => { return button })}</center>
          <br />
        </div>
        <button onClick={() => close("transaction", false)} className="modal-close"></button>
      </div>
    </div>
  </div>)
}

TransactionModal = reduxForm(
  {
    form: "TransactionForm"
  })(TransactionModal)



export default TransactionModal