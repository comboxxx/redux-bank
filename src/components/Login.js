import React, { Component } from 'react';
import { connect } from 'react-redux'
import {login} from '../actions/Login'
import FormLogin from './FormLogin'
import {NavLink} from 'react-router-dom'
// import * as firebase from 'firebase'
class Login extends Component {
    constructor(props)
    {
        super(props)

        this.login = this.login.bind(this)
    }

    login()
    {
        
        let {commitLogin,form} = this.props
        commitLogin(form.values.username,form.values.password)
       

    }

    render() {
        
        return (
            
            <div className="columns">

                <div className="column is-4 is-offset-4">
                <br /><br />
                    <center>
                        <h1 className="title">เข้าสู่ระบบ</h1>
                        <br />
                    
                   <FormLogin/>
                   <br />
                    <button className="button is-primary" onClick={() => this.login()} >Login</button>
                    <NavLink className="button" to="/ShoppingCart"  >ShoppingCart</NavLink>
                </center>
                </div>
            </div>
        )
    }
}





function mapStatetoProps(state){
    let {form} = state
    return {
        form:form.FormLogin
    }
}
const mapDispatchtoProps = (dispatch) => {
    return {
        commitLogin(username,password)
        {
            dispatch(login(username,password))
        }
    }
}

export default connect (mapStatetoProps,mapDispatchtoProps) (Login)

// export const formEach = function (key) {
//     return reduxForm(
//         {
//             form: key
//         })(Form)
// }



